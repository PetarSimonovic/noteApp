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
        console.log("Fail");
      }
    },
  };
}

function pageHasContent(str) {
  if (document.documentElement.textContent.includes(str)) {
    console.log("page has content!");
  } else {
    console.log("page doesn't have content!");
  }
}

let page;
page = document.documentElement;

it("should add 2 + 2 to make 4", function () {
  expect(2 + 2).toEqual(4);
});

it("should add 2 + 3 to make 4", function () {
  expect(2 + 3).toEqual(4);
});

it("should have content that says pee block!", () => {
  pageHasContent("Pee block!!");
});

function clickButtonById(id) {
  document.getElementById(id).click(); // Click on the checkbox
}

function fillInContentById(id, content) {
  document.getElementById(id).value = content;
}

it("page should have content after filling in form and pressing button", () => {
  fillInContentById("addNote", "Note title");
  fillInContentById("addNoteField", "Note content blah blah blah");
  clickButtonById("addNoteButton");
  pageHasContent("Note content blah blah blah");
});
