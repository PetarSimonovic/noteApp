function it(label, callback) {
  console.log(label);
  callback();
}

function expect(expected) {
  return {
    toEqual(actual) {
      if (expected === actual) {
        console.log("Pass");
      } else {
        console.warn("Fail");
      }
    },
  };
}

function pageHasContent(str) {
  if (document.documentElement.textContent.includes(str)) {
    console.log("page has content!");
  } else {
    console.warn("page doesn't have content!");
  }
}

let page;
page = document.documentElement;

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

function fillInContentById(id, content) {
  document.getElementById(id).value = content;
}

it("page should have content after filling in form and pressing button", () => {
  fillInContentById("addNoteField", "Note content blah blah blah");
  addNote();
  expect(noteList[0]).toEqual("Note content blah blah blah");
});
