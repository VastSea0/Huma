// todo
document.addEventListener("DOMContentLoaded", () => {
    loadNotes();
    document.getElementById("addNoteButton").addEventListener("click", addNote);
});

//------------------------------------------------------------------

function loadNotes() {
    let notesContainer = document.getElementById("notesContainer");
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
}

function addNote() {
    let noteContent = document.getElementById("noteContent").value;

    if (noteContent) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push({ content: noteContent });
        localStorage.setItem("notes", JSON.stringify(notes));

        document.getElementById("noteContent").value = ""; // Alanı temizle
        loadNotes();
    } else {
        alert("Lütfen notunuzu yazın.");
    }
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
 
