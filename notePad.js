// Variables
let noteList = [];
let notePList = document.getElementById("noteListWrapper");
let addNoteButton = document.getElementById("addNoteButton");
let pageStorage = window.localStorage;

// Check if pageStorage exists
if (pageStorage.length !==0) {
  noteList = pageStorage.notes.split(',');
}

// event listeners
addNoteButton.addEventListener("click", addNote);

notePList.addEventListener("click", (e) => {
  clickNote(e.target.id);
});

// Functions
function addNoteListToStorage() {
  if(development === true){
    pageStorage.setItem('notes', noteList);
  }
}

function addNote() {
  let text = document.getElementById("addNoteField").value;
  noteList.push(text);
  addNoteListToStorage();
  let index = noteList.length - 1;
  createListItem(text, index);
  document.getElementById("addNoteField").value = "";
}

function emojifiText(message) {
  let data = { text: message };
  fetch("https://makers-emojify.herokuapp.com", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {

      let emojifiedText = data.emojified_text;
      openModal(emojifiedText);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  // console.log(emojifiedText);

  // return data.emojified_text;
}

function createListItem(text, index) {
  let liNode = document.createElement("li");
  let aNode = document.createElement("a");
  let textNode = document.createTextNode(text);
  aNode.appendChild(textNode);
  liNode.appendChild(aNode);
  notePList.appendChild(liNode);
  addAttributes(aNode, index);
}

function addAttributes(aNode, index) {
  aNode.href = `#${index}`;
  aNode.id = `${index}`;
}

function openModal(note = "") {
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
  note2 = emojifiText(note);
}
