export function renderBookmarks(bookmarks) {
    const bookmarkList = document.querySelector(`#bookmarkList`);
    bookmarkList.innerHTML = ""

    bookmarks.forEach(b => {
        const li = document.createElement(`li`)
        li.dataset.id = b.id;

        const urlEl = document.createElement(`a`);
        urlEl.textContent = b.url;
        urlEl.href = b.url;
        urlEl.target = "_blank"

        const deleteBtn = document.createElement(`button`);
        deleteBtn.textContent = "✕"
        deleteBtn.classList.add("deleteBookmark-btn")

        li.append(urlEl, deleteBtn);
        bookmarkList.append(li)
    });
}
