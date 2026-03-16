const API_BASE = "https://jsonplaceholder.typicode.com";

const searchInput = document.getElementById("searchInput");
const userGrid = document.getElementById("userGrid");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("errorBox");
const status = document.getElementById("status");

const listView = document.getElementById("listView");
const detailView = document.getElementById("detailView");
const backBtn = document.getElementById("backBtn");
const detailLoading = document.getElementById("detailLoading");
const detailError = document.getElementById("detailError");
const userDetail = document.getElementById("userDetail");

let allUsers = [];

async function fetchUsers() {
  loading.classList.remove("hidden");
  errorBox.classList.add("hidden");
  userGrid.innerHTML = "";

  try {
    const response = await fetch(`${API_BASE}/users`);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();
    allUsers = users;
    renderUsers(users);
  } catch (error) {
    errorBox.textContent = error.message;
    errorBox.classList.remove("hidden");
    status.textContent = "Could not load users.";
  } finally {
    loading.classList.add("hidden");
  }
}

function renderUsers(users) {
  status.textContent = `Showing ${users.length} user(s)`;

  if (users.length === 0) {
    userGrid.innerHTML = `<p>No users found.</p>`;
    return;
  }

  userGrid.innerHTML = users
    .map(
      (user) => `
      <article class="user-card" data-user-id="${user.id}">
        <h3>${user.name}</h3>
        <p><span class="label">Email:</span> ${user.email}</p>
        <p><span class="label">Company:</span> ${user.company.name}</p>
        <p><span class="label">City:</span> ${user.address.city}</p>
      </article>
    `
    )
    .join("");
}


function handleSearch(event) {
  const keyword = event.target.value.trim().toLowerCase();

  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(keyword)
  );

  renderUsers(filteredUsers);
}

async function showUserDetail(userId) {
  listView.classList.add("hidden");
  detailView.classList.remove("hidden");
  detailLoading.classList.remove("hidden");
  detailError.classList.add("hidden");
  userDetail.innerHTML = "";

  try {
    const [userResponse, postsResponse] = await Promise.all([
      fetch(`${API_BASE}/users/${userId}`),
      fetch(`${API_BASE}/posts?userId=${userId}`)
    ]);

    if (!userResponse.ok || !postsResponse.ok) {
      throw new Error("Failed to fetch user detail");
    }

    const [user, posts] = await Promise.all([
      userResponse.json(),
      postsResponse.json()
    ]);

    userDetail.innerHTML = `
      <div class="detail-section">
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
        <p><strong>Street:</strong> ${user.address.street}</p>
      </div>

      <div class="detail-section">
        <h3>Posts (${posts.length})</h3>
        <div class="post-list">
          ${posts
            .map(
              (post) => `
                <article class="post-item">
                  <h4>${post.title}</h4>
                  <p>${post.body}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  } catch (error) {
    detailError.textContent = error.message;
    detailError.classList.remove("hidden");
  } finally {
    detailLoading.classList.add("hidden");
  }
}


function showUserList() {
  detailView.classList.add("hidden");
  listView.classList.remove("hidden");
}

userGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".user-card");
  if (!card) return;

  const userId = card.dataset.userId;
  showUserDetail(userId);
});

searchInput.addEventListener("input", handleSearch);
backBtn.addEventListener("click", showUserList);


document.addEventListener("DOMContentLoaded", () => {
  fetchUsers();
});