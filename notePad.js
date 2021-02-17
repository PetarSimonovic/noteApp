let noteList = [];

let notePList = document.getElementById("notes");

function addNote() {
  noteList.push(document.getElementById("addNoteField").value);

  notePList.innerText = `${noteList}`;
}

let addNoteButton = document.getElementById("addNoteButton");
addNoteButton.addEventListener("click", addNote);
