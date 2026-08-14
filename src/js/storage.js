export const save = (key, data) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (e) {
        console.error("Unable to save data to storage!", e);
    }
};

export const load = (key) => {
    try {
        const serializedData = localStorage.getItem(key);
        return serializedData ? JSON.parse(serializedData) : null
    } catch (e) {
        console.error("Unable to load data from storage!", e);
    };
};

export const remove = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error("Unable to remove data from storage!", e)
    }
}

export const clear = () => {
    try {
        localStorage.clear()
    } catch (e) {
        console.error("Unable to clear storage!", e)
    }
}
