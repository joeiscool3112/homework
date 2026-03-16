// --- EXERCISE 1: Simulate async operations ---
// Viết 3 functions giả lập fetch data (dùng setTimeout + Promise)

function fetchUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { id: 1, name: 'Joe', email: 'joe@mail.com' },
        2: { id: 2, name: 'Alice', email: 'alice@mail.com' },
      };
      const user = users[id];
      if (user) resolve(user);
      else reject(new Error(`User ${id} not found`));
    }, 1000);
  });
}

function fetchPostsByUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, userId, title: 'First Post' },
        { id: 102, userId, title: 'Second Post' },
      ]);
    }, 800);
  });
}

function fetchCommentsByPost(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 201, postId, text: 'Great post!' },
        { id: 202, postId, text: 'Thanks for sharing' },
      ]);
    }, 600);
  });
}

async function failedFetch(url) {
  throw new Error(`Failed to fetch: ${url}`);
}


// Bài 1: Dùng .then().catch() chain
// Lấy user id=1 → posts → comments của post đầu tiên → console.log
async function exercise1() {
  console.log("1: ")
  fetchUserById(1)
  .then(user => {
    console.log("User:", user);
    return fetchPostsByUser(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
    return fetchCommentsByPost(posts[0].id);
  })
  .then(comments => {
    console.log("Comments of first post:", comments);
  })
  .catch(err => {
    console.log("Error:", err.message);
  });
}

// Bài 2: Viết lại Bài 1 bằng async/await + try/catch
async function exercise2() {
  
  try {
    console.log("2: ");
    const user = await fetchUserById(1);
    console.log("User:", user);
    const posts = await fetchPostsByUser(user.id);
    console.log("Posts:", posts)
    const comments = await fetchCommentsByPost(posts[0].id);
    console.log("Comments of first post:", comments);
  } catch (error) {
    console.log(error);
  }
}

// Bài 3: Xử lý error — gọi fetchUserById(999) và handle error gracefully
async function exercise3() {
  console.log("3: ");
  try {
    const user = await fetchUserById(999);
    console.log(user);
  } catch (error) {
    console.log(error);
  }  
}
// Bài 4: Promise.all — fetch user 1 VÀ user 2 cùng lúc (song song)
// In ra: "Fetched 2 users in Xms" (đo thời gian bằng Date.now())
async function exercise4() {
  const parStart = Date.now();

  const [pUser1, pUser2] = await Promise.all([
    fetchUserById(1),
    fetchUserById(2),
  ]);

  const parTime = Date.now() - parStart;

  console.log("4: ", pUser1, pUser2);
  console.log(`Fetched 2 users in ${parTime}ms`);
}


// Bài 5: Promise.race — race giữa fetchUserById(1) và timeout 500ms
// Nếu fetch nhanh hơn 500ms → return user
// Nếu không → throw 'Request timed out'
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
    const user = await fetchWithTimeout(fetchUserById(1), 200);
    console.log(user);
  } catch (error) {
    console.log("5: Timeout:", error.message);
  }
}

// --- EXERCISE 2: Sequential vs Parallel ---

// Bài 6: Chạy tuần tự 3 lần fetchUserById (id 1, 2, 3) — đo thời gian
//         Chạy song song 3 lần fetchUserById — đo thời gian
//         So sánh tổng thời gian
async function exercise6() {
  const seqStart = Date.now();

  const user1 = await fetchUserById(1);
  const user2 = await fetchUserById(2);

  const seqTime = Date.now() - seqStart;

  console.log("6: sequential users:", user1, user2);

  const parStart = Date.now();

  const [pUser1, pUser2] = await Promise.all([
    fetchUserById(1),
    fetchUserById(2),
  ]);

  const parTime = Date.now() - parStart;

  console.log("6: parrallel:", pUser1, pUser2);
  console.log(`Sequential: ${seqTime}ms, Parallel: ${parTime}ms`);
}


// --- EXERCISE 3: Real error handling ---

// Bài 7: Viết function retryFetch(fn, maxRetries)
// Nếu fn() fail, retry tối đa maxRetries lần
// Nếu vẫn fail → throw error cuối cùng
async function retryFetch(fn, maxRetries = 3) {
  // Your code
  console.log("7: ");
let i = 0;
  while (i < maxRetries) {
    try {
      const result = await fn();
      return result;
    }
    catch (error) {
      i++;
      console.log("retrying...");
      if (i === maxRetries) {
        throw error;
      }
    }
  }
}
async function exercise7() {
  console.log("6: ");
  try {
    const result = await retryFetch(() => failedFetch('/api/data'), 5);
    console.log("success:", result);
  } catch (error) {
    console.log("error:", error.message);
  }
}



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