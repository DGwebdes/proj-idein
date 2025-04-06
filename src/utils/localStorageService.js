const LOCAL_STORAGE_KEY = "idein_trial_notes";

export const localStorageService = {
    getNotes: () => {
        try {
            const notes = localStorage.getItem(LOCAL_STORAGE_KEY);
            return notes ? JSON.parse(notes) : [];
        } catch (error) {
            console.log("Error fetching notes: ", error.message);
            return [];
        }
    },

    addNote: (note) => {
        try {
            const notes = localStorageService.getNotes();
            const newNote = {
                ...note,
                id: `local_${Date.now()}`,
                timeStamp: new Date().toLocaleDateString(),
            };

            notes.push(newNote);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
            return newNote;
        } catch (error) {
            console.log("Error adding note: ", error);
            return null;
        }
    },

    deleteNote: (noteId) => {
        try {
            const notes = localStorageService.getNotes();
            const filterNotes = notes.filter((note) => note.id !== noteId);
            localStorage.setItem(
                LOCAL_STORAGE_KEY,
                JSON.stringify(filterNotes),
            );
            return true;
        } catch (error) {
            console.log("Could not delete note: ", error);
            return false;
        }
    },

    clearNotes: () => {
        try {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            return true;
        } catch (error) {
            console.log("Error clearing notes: ", error);
            return false;
        }
    },

    getStorageInfo: () => {
        try {
            const notes = localStorageService.getNotes();
            const notesCount = notes.length;
            const storageUsed = new Blob([JSON.stringify(notes)]).size;
            const storageLimit = 5 * 1024 * 1024; //5MB
            const percentUsed = (storageUsed / storageLimit) * 100;

            return {
                notesCount,
                storageUsed,
                storageLimit,
                percentUsed,
                formattedUsed: `${(storageUsed / 1024).toFixed(2)}kb`,
                formattedLimit: "5MB",
            };
        } catch (error) {
            console.log("Could not fetch localStorage Info: ", error);
            return {
                notesCount: 0,
                storageUsed: 0,
                storageLimit: 5 * 1024 * 1024,
                percentUsed: 0,
                formattedUsed: "0 kb",
                formattedLimit: "5MB",
            };
        }
    },
};
