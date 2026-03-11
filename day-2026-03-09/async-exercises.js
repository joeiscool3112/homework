// --- MOCK APIs (dùng cho tất cả bài tập) ---

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchUser(id) {
  await delay(500);
  const db = {
    1: { id: 1, name: 'Joe', role: 'developer' },
    2: { id: 2, name: 'Alice', role: 'designer' },
    3: { id: 3, name: 'Bob', role: 'manager' }
  };
  if (!db[id]) throw new Error(`User #${id} not found`);
  return db[id];
}

async function fetchTodos(userId) {
  await delay(300);
  return [
    { id: 1, userId, title: 'Learn ES6', done: true },
    { id: 2, userId, title: 'Build project', done: false },
    { id: 3, userId, title: 'Review code', done: false }
  ];
}

async function fetchNotifications(userId) {
  await delay(400);
  return [
    { id: 1, userId, message: 'New comment on your post' },
    { id: 2, userId, message: 'Task assigned to you' }
  ];
}

// Occasionally fails (for error handling practice)
async function unreliableFetch(url) {
  await delay(300);
  if (Math.random() < 0.5) throw new Error(`Failed to fetch: ${url}`);
  return { url, data: 'Success!' };
}

async function failedFetch(url) {
  throw new Error(`Failed to fetch: ${url}`);
}


// Bài 1: Basic async/await
// Fetch user id=1, then fetch their todos → console.log cả 2
async function exercise1() {
  try {
    const user = await fetchUser(1);
    const todos = await fetchTodos(user.id);

    console.log("1: user:", user);
    console.log("1: todos:", todos);
  } catch (error) {
    console.log("1: error:", error.message);
  }
}

// Bài 2: Error handling
// Fetch user id=999 (sẽ throw error) → catch và in error message
// KHÔNG được để unhandled promise rejection
async function exercise2() {
  try {
    const user = await fetchUser(999);
    console.log("2: user:", user);
  } catch (error) {
    console.log("2: error:", error.message);
  }
}


// Bài 3: Sequential vs Parallel
// a) Sequential: Fetch user 1, rồi user 2, rồi user 3 → đo thời gian
// b) Parallel: Fetch 3 users cùng lúc (Promise.all) → đo thời gian
// c) console.log("Sequential: Xms, Parallel: Yms")
async function exercise3() {
  const seqStart = Date.now();

  const user1 = await fetchUser(1);
  const user2 = await fetchUser(2);
  const user3 = await fetchUser(3);

  const seqTime = Date.now() - seqStart;

  console.log("3: sequential users:", user1, user2, user3);

  const parStart = Date.now();

  const [pUser1, pUser2, pUser3] = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
  ]);

  const parTime = Date.now() - parStart;

  console.log("3: parrallel:", pUser1, pUser2, pUser3);
  console.log(`Sequential: ${seqTime}ms, Parallel: ${parTime}ms`);
}


// Bài 4: Promise.all với error handling
// Fetch users [1, 2, 999, 3] cùng lúc
// ⚠️ Promise.all sẽ reject nếu BẤT KỲ 1 promise fail
// → Dùng Promise.allSettled() thay thế
// → In ra: fulfilled users + lý do reject
async function exercise4() {
  const results = await Promise.allSettled([
    fetchUser(1),
    fetchUser(2),
    fetchUser(999),
    fetchUser(3)
  ]);

  const fulfilledUsers = results
    .filter((item) => item.status === "fulfilled")
    .map((item) => item.value);

  const rejectedReasons = results
    .filter((item) => item.status === "rejected")
    .map((item) => item.reason.message);

  console.log("4: fulfilled users:", fulfilledUsers);
  console.log("4: rejected reasons:", rejectedReasons);
}

// Bài 5: Timeout pattern
// Viết function fetchWithTimeout(promise, timeoutMs)
// Nếu promise resolve trước timeout → return kết quả
// Nếu timeout trước → throw 'Request timed out'
// HINT: Promise.race([promise, timeoutPromise])
async function fetchWithTimeout(promise, timeoutMs) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out"));
    }, timeoutMs);
  });

  return Promise.race([promise, timeoutPromise]);
}

async function exercise5() {
  try {
    const user = await fetchWithTimeout(fetchUser(1), 200);
    console.log(user);
  } catch (error) {
    console.log("5: Timeout:", error.message);
  }
}


// Bài 6: Retry logic
// Viết function retry(fn, maxAttempts)
// Gọi fn(), nếu fail → retry, tối đa maxAttempts lần
// Giữa mỗi lần retry, delay 500ms
// Test với: retry(() => unreliableFetch('/api/data'), 5)
async function retry(fn, maxAttempts = 3) {
  // Your code
  let i = 0;
  while (i < maxAttempts) {
    try {
      const result = await fn();
      return result;
    }
    catch (error) {
      i++;
      console.log("retrying...");
      if (i === maxAttempts) {
        throw error;
      }

      await delay(500);
    }
  }
}
async function exercise6() {
  console.log("6: ");
  try {
    const result = await retry(() => failedFetch('/api/data'), 5);
    console.log("success:", result);
  } catch (error) {
    console.log("error:", error.message);
  }
}
// Bài 7: Loading Dashboard
// Giả lập load dashboard: fetch 3 data sources song song
// → user profile, todos, notifications
// → Tính tổng thời gian load
// → In summary: "Dashboard loaded in Xms"
// → In: "User: Joe (developer)"
// → In: "Pending todos: 2"
// → In: "Notifications: 2"
async function loadDashboard(userId) {
  // Your code
  console.log("Loading Dashboard...");
  try {
    const parStart = Date.now();
    const [profile, todo, notifications] = await Promise.all([
      fetchUser(userId),
      fetchTodos(userId),
      fetchNotifications(userId)
    ]);
    const parTime = Date.now() - parStart;
    console.log(`Dashboard loaded in ${parTime}ms`);
    console.log(`User: ${profile.name}`)
    let todoleft = 0;
    todo.forEach(item => {
      if (!item.done) {
        todoleft++;
      }
      return todoleft;
    }
    );
    console.log(`Pending todos: ${todoleft}`);


    let notileft = 0;
    notifications.forEach(item => {
      if (!item.done) {
        notileft++;
      }
      return notileft;
    }
    );
    console.log(`Pending notifications: ${notileft}`);
  }
  catch (error) {
    console.log(error);
  }
};



async function exercise7() {
  console.log("7: ");
  loadDashboard(1);
}

//Run hw

async function runExercises() {
  await exercise1();
  await exercise2();
  await exercise3();
  await exercise4();
  await exercise5();
  await exercise6();
  await exercise7();
}

runExercises();