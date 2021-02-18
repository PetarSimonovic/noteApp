let noteList = [];
let notePList = document.getElementById("noteListWrapper");
let addNoteButton = document.getElementById("addNoteButton");

addNoteButton.addEventListener("click", addNote);

notePList.addEventListener("click", e => {
  console.log(e.target);
  clickNote(e.target.id);
});

function addNote() {
  let text = document.getElementById("addNoteField").value;
  noteList.push(text);
  createListItem(text);
  document.getElementById("addNoteField").value = "";
}

function createListItem(text) {
  let liNode = document.createElement("li");
  let aNode = document.createElement("a");
  let textNode = document.createTextNode(text);
  aNode.appendChild(textNode);
  liNode.appendChild(aNode);
  notePList.appendChild(liNode);
  addAttributes(aNode);
}

function addAttributes(aNode) {
  index = noteList.length - 1;
  aNode.href = `#${index}`;
  aNode.id = `${index}`;
}

function openModal(note = '') {
  let modal = document.getElementById("modalWrapper");
  let para = document.getElementById("note-paragraph");
  modal.style.display = "block";
  para.innerHTML = note;
}

function closeModal() {
  let modal = document.getElementById("modalWrapper");
  modal.style.display = "none";
}

function clickNote(noteId) {
  note = noteList[noteId];
  openModal(note);
}
