import * as storage from './storage';

const STORAGE_KEY = "contacts";
const contacts = storage.load(STORAGE_KEY) || [];

function addContact(firstName, lastName, phone, email) {
    const contact = {
        firstName,
        lastName,
        phone,
        email
    }
    contacts.push(contact);
    saveContacts();
    return contacts;
}

function deleteContact(phone) {
    const index = contacts.findIndex((c) => c.phone === phone);
    if (index !== -1) {
        contacts.splice(index, 1);
        saveContacts();
    }

    return contacts;
}

function getContacts() {
    return contacts;
}

function saveContacts() {
    storage.save(STORAGE_KEY, contacts);
}

function loadContacts() {
    storage.load(STORAGE_KEY);
}

export {
    addContact,
    deleteContact,
    getContacts
}
