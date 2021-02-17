let noteList = [];

function addNote() {
  noteList.push(document.getElementById("addNoteField").value)
}

let addNoteButton = document.getElementById("addNoteButton");
addNoteButton.addEventListener("click", addNote);
