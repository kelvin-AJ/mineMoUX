const usernameEl = document.querySelector("#username");
const params = new URLSearchParams(window.location.search);
username = params.get("user");
usernameEl.textContent = `Welcome, ${username}!`;