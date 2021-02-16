function it(label, callback) {
  console.log(`Test: ${label}`);
  callback();
}

function expect(a) {
  if (a == b) {
    console.log("Passed!");
  } else {
    console.log("Failed");
  }
}
