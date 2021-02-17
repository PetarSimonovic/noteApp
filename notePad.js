let noteList = [];

let notePList = document.getElementById("notes");

function addNote() {
  noteList.push(document.getElementById("addNoteField").value);

  let pNode = document.createElement("p");
  let text = document.getElementById("addNoteField").value;
  let textNode = document.createTextNode(text);
  pNode.appendChild(textNode);
  notePList.appendChild(pNode);
}

let addNoteButton = document.getElementById("addNoteButton");
addNoteButton.addEventListener("click", addNote);
