import {
  addBookmark,
  deleteBookmark,
  normalizeUrl,
  getBookmarks,
} from "./bookmark";
import { renderBookmarks } from "./render";

const bookmarkList = document.querySelector(`#bookmarkList`);
const addBookmarkBtn = document.querySelector(`#addBookmarkBtn`);
const bookmarkInput = document.querySelector(`#bookmarkInput`);

addBookmarkBtn.addEventListener(`click`, () => {
  const url = normalizeUrl(bookmarkInput.value);
  if (!url) return;

  const bookmarks = addBookmark(url);
  renderBookmarks(bookmarks);
  bookmarkInput.value = "";
});

bookmarkList.addEventListener(`click`, (e) => {
  if (e.target.classList.contains("deleteBookmark-btn")) {
    const id = e.target.closest(`li`).dataset.id;

    const bookmarks = deleteBookmark(id);
    renderBookmarks(bookmarks);
  }
});

renderBookmarks(getBookmarks());

const STORAGE_KEY = "userData";
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
  usernameInput.value = savedData.username;
  passwordInput.value = savedData.password;
}

saveBtn.addEventListener("click", () => {
  const userData = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
});
