import { nanoid } from "nanoid";

const STORAGE_KEY = "bookmarks";
const bookmarks = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

function addBookmark(url) {
  const bookmark = {
    id: nanoid(),
    url,
  };
  bookmarks.push(bookmark);

  saveBookmarks();
  return bookmarks;
}

function deleteBookmark(id) {
  const index = bookmarks.findIndex((b) => b.id === id);
  if (index !== -1) {
    bookmarks.splice(index, 1);
    saveBookmarks();
  }
  return bookmarks;
}

function normalizeUrl(url) {
  url = url.trim();

  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    url = `https://${url}`;
  }

  const regex = /^https:?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

  if (!regex.test(url)) return null;

  return url;
}

function getBookmarks() {
    return bookmarks;
}

function saveBookmarks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
}

function loadBookmarks() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];

  return JSON.parse(data);
}

export {
  addBookmark,
  deleteBookmark,
    normalizeUrl,
  getBookmarks
};
