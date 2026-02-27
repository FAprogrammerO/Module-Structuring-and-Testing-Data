const getAngleType = require("../implement/1-get-angle-type");

// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle < 90)`, () => {
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
test(`should return "Right angle" when (angle === 90)`, () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 3: Obtuse angles
test(`should return "Obtuse angle" when (90 < angle < 180)`, () => {
  expect(getAngleType(91.0)).toEqual("Obtuse angle");
  expect(getAngleType(100)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

// Case 4: Straight angle
test(`should return "Straight angle" when (angle === 180)`, () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Reflex angles
test(`should return "Reflex angle" when (180 < angle < 360)`, () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(200)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

// Case 6: Invalid angles
test(`should return "Invalid angle" when angle doesn't lie between 0-360 exclusive`, () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
  expect(getAngleType(500)).toEqual("Invalid angle");
  expect(getAngleType(-200)).toEqual("Invalid angle");
  expect(getAngleType("")).toEqual("Invalid angle");
  expect(getAngleType("ten degrees")).toEqual("Invalid angle");
  expect(getAngleType(true)).toEqual("Invalid angle");
});