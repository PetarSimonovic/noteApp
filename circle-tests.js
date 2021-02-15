function testCircleRadiusDefaultsTo10() {
  let circle;

  circle = new Circle();

  assert.isTrue(circle.radius === 10, "circle has radius 10");
}

testCircleRadiusDefaultsTo10();
