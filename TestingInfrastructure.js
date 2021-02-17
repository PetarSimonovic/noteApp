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
