import Handlebars from "handlebars";
import bookmarkTemplate from 'bundle-text:../templates/bookmark.hbs'
import contactTemplate from 'bundle-text:../templates/contact.hbs'

const bookmarkTemplateFn = Handlebars.compile(bookmarkTemplate);
const contactTemplateFn = Handlebars.compile(contactTemplate)

export function renderBookmarks(bookmarks) {
    const bookmarkList = document.querySelector(`#bookmarkList`);
    bookmarkList.innerHTML = bookmarkTemplateFn({bookmarks})
}

export function renderContacts(contacts) {
    const contactsList = document.querySelector(`#contactsList`);
    contactsList.innerHTML = contactTemplateFn({contacts});

}
