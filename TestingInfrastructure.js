function it(label, callback) {
  console.log(label)
  callback()
};

function expect(expected) {
  return {
    toEqual(actual) {
    if (expected === actual) {
      console.log("Pass")
    }
    else {
      console.log("Fail")
    }
  }
  }
}

it('should add 2 + 2 to make 4', function (){
  expect(2+2).toEqual(4)
});


it('should add 2 + 3 to make 4', function (){
  expect(2+3).toEqual(4)
});
