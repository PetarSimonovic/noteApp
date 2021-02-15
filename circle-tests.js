function testCircleRadiusDefaultsTo10() {
  let circle;
  
  circle = new Circle();

  if (circle.radius !== 10) {
    throw new Error("Circle size is not 10");
  } else {
    console.log("Test passed!")
  }
};

testCircleRadiusDefaultsTo10();