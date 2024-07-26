document.addEventListener("DOMContentLoaded", () => {
    try {
        loadNotes();
        const addNoteButton = document.getElementById("addNoteButton");
        if (addNoteButton) {
            addNoteButton.addEventListener("click", addNote);
        } else {
            console.error("Element with ID 'addNoteButton' not found.");
        }
    } catch (error) {
        console.error("Error during initialization:", error);
    }
});

function loadNotes() {
    try {
        let notesContainer = document.getElementById("notesContainer");
        if (!notesContainer) throw new Error("Element with ID 'notesContainer' not found.");

        notesContainer.innerHTML = ""; 

        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.forEach((note, index) => {
            let noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.textContent = note.content;

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Sil";
            deleteButton.addEventListener("click", () => deleteNote(index));

            noteElement.appendChild(deleteButton);
            notesContainer.appendChild(noteElement);
        });
    } catch (error) {
        console.error("Error in loadNotes function:", error);
    }
}

function addNote() {
    try {
        let noteContent = document.getElementById("noteContent").value;
        if (!noteContent) {
            alert("Lütfen notunuzu yazın.");
            return;
        }

        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push({ content: noteContent });
        localStorage.setItem("notes", JSON.stringify(notes));

        document.getElementById("noteContent").value = ""; // Alanı temizle
        loadNotes();
    } catch (error) {
        console.error("Error in addNote function:", error);
    }
}

function deleteNote(index) {
    try {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        loadNotes();
    } catch (error) {
        console.error("Error in deleteNote function:", error);
    }
}
