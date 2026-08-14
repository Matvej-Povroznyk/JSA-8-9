import * as bookmark from "./bookmark";
import * as contact from "./contact";
import * as storage from "./storage";
import { renderBookmarks, renderContacts } from "./render";

const bookmarkList = document.querySelector(`#bookmarkList`);
const addBookmarkBtn = document.querySelector(`#addBookmarkBtn`);
const bookmarkInput = document.querySelector(`#bookmarkInput`);

function handleAddBookmark() {
  const url = bookmark.normalizeUrl(bookmarkInput.value);

  if (!url) {
    alert(`Please enter correct url.`);
    return;
  }

  const bookmarks = bookmark.addBookmark(url);
  renderBookmarks(bookmarks);

  bookmarkInput.value = "";
}

function handleDeleteBookmark(e) {
  if (e.target.classList.contains("deleteBookmark-btn")) {
    const id = e.target.closest(`li`).dataset.id;

    const bookmarks = bookmark.deleteBookmark(id);
    renderBookmarks(bookmarks);
  }
}

function handleSave() {
  const userData = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  storage.save(USER_STORAGE_KEY, userData);
}

addBookmarkBtn.addEventListener(`click`, handleAddBookmark);
bookmarkList.addEventListener(`click`, handleDeleteBookmark);

renderBookmarks(bookmark.getBookmarks());

const USER_STORAGE_KEY = "userData";

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");

const savedData = storage.load(USER_STORAGE_KEY);

if (savedData) {
  usernameInput.value = savedData.username;
  passwordInput.value = savedData.password;
}

saveBtn.addEventListener("click", handleSave);

const CONTACT_STORAGE_KEY = "contacts";

const contactsList = document.querySelector(`#contactsList`);
const addContactBtn = document.querySelector(`#addContactBtn`);

function handleAddContact() {
  const firstName = document.querySelector(`#firstName`);
  const lastName = document.querySelector(`#lastName`);
  const phone = document.querySelector(`#phone`);
  const email = document.querySelector(`#email`);

  if (!firstName.value.trim() || !phone.value.trim()) {
    alert("First Name and phone are required!");
    return;
  }

  const contacts = contact.addContact(
    firstName.value.trim(),
    lastName.value.trim(),
    phone.value.trim(),
    email.value.trim(),
  );

  renderContacts(contacts);

  firstName.value = "";
  lastName.value = "";
  phone.value = "";
  email.value = "";
}

function handleDeleteContact(e) {
  if (e.target.classList.contains("deleteContact-btn")) {
    const phone = e.target.closest(`li`).dataset.phone;

    const contacts = contact.deleteContact(phone);
    renderContacts(contacts);
  }
}

addContactBtn.addEventListener(`click`, handleAddContact);
contactsList.addEventListener(`click`, handleDeleteContact);

renderContacts(contact.getContacts());
