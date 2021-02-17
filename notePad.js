let noteList = [];
let notePList = document.getElementById("notes");

function addNote() {
  let text = document.getElementById("addNoteField").value;
  noteList.push(text);
  createPara(text)
  document.getElementById("addNoteField").value = ""
}

function createPara(text)  {
  let pNode = document.createElement("p");
  let textNode = document.createTextNode(text);
  pNode.appendChild(textNode);
  notePList.appendChild(pNode);
}

let addNoteButton = document.getElementById("addNoteButton");
addNoteButton.addEventListener("click", addNote);
