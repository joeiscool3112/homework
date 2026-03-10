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

// Bài 1: Dùng .then().catch() chain
// Lấy user id=1 → posts → comments của post đầu tiên → console.log
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

// Bài 2: Viết lại Bài 1 bằng async/await + try/catch

// Bài 3: Xử lý error — gọi fetchUserById(999) và handle error gracefully

// Bài 4: Promise.all — fetch user 1 VÀ user 2 cùng lúc (song song)
// In ra: "Fetched 2 users in Xms" (đo thời gian bằng Date.now())

// Bài 5: Promise.race — race giữa fetchUserById(1) và timeout 500ms
// Nếu fetch nhanh hơn 500ms → return user
// Nếu không → throw 'Request timed out'

// --- EXERCISE 2: Sequential vs Parallel ---

// Bài 6: Chạy tuần tự 3 lần fetchUserById (id 1, 2, 3) — đo thời gian
//         Chạy song song 3 lần fetchUserById — đo thời gian
//         So sánh tổng thời gian

// --- EXERCISE 3: Real error handling ---

// Bài 7: Viết function retryFetch(fn, maxRetries)
// Nếu fn() fail, retry tối đa maxRetries lần
// Nếu vẫn fail → throw error cuối cùng
async function retryFetch(fn, maxRetries = 3) {
  // Your code
}