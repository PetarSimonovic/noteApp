//practice test 1
// it("should add 2 + 2 to make 4", function () {
//   expect(2 + 2).toEqual(4);
// });

// practice test 2
// it("should add 2 + 3 to make 4", function () {
//   expect(2 + 3).toEqual(4);
// });

it("should have content that says NotePad!", () => {
  pageHasContent("NotePad");
});

// Commented out for now
// function clickButtonById(id) {
//   document.getElementById(id).click(); // Click on the checkbox
// }

it("page should have content after filling in form and pressing button", () => {
  clear();
  fillInContentById("addNoteField", "Note content blah blah blah");
  addNote();
  expect(noteList[0]).toEqual("Note content blah blah blah");
  clear();
});

it("page should have note on it after adding a note", () => {
  clear();
  fillInContentById("addNoteField", "Other note content blah blah blah");
  addNote();
  pageHasContent("Other note content blah blah blah");
  clear();
});

it("page should show two notes when adding two notes", () => {
  clear();
  fillInContentById("addNoteField", "1");
  addNote();
  fillInContentById("addNoteField", "2");
  addNote();
  pageHasContent("1");
  pageHasContent("2");
  clear();
});

it("should clear the NotePad after a note has been added", () => {
  clear();
  fillInContentById("addNoteField", "This text should not be in NotePad");
  addNote();
  expect(document.getElementById("addNoteField").value).toEqual("");
  clear();
});

it("should be able to identify a note and its href", () => {
  clear();
  fillInContentById("addNoteField", "This is a note to test link function");
  addNote();
  expect(document.getElementById("0")).toNotEqual(null);
  clear();
});

it("can open a Modal", () => {
  clear();
  openModal();
  expect(document.getElementById("modalWrapper").style.display).toEqual(
    "block"
  );
  closeModal();
  clear();
});

it("can close a modal", () => {
  clear();
  openModal();
  closeModal();
  expect(document.getElementById("modalWrapper").style.display).toEqual("none");
  clear();
});

it("will display the full note within the model", () =>{
  clear();
  openModal("A note");
  expect(document.getElementById("note-paragraph").innerHTML).toEqual("A note");
  closeModal();
  clear();
});

it("will display the full note when a href is clicked", () => {
  clear();
  fillInContentById("addNoteField", "A really long note is what I keep teling people");
  addNote();
  clickNote("0");
  expect(document.getElementById("note-paragraph").innerHTML).toEqual("A really long note is what I keep teling people");
  clear();
  closeModal();
});

console.log("Tests complete");
