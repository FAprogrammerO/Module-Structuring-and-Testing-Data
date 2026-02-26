// Implement a function getAngleType
//
// When given an angle in degrees, it should return a string indicating the type of angle:
// - "Acute angle" for angles greater than 0° and less than 90°
// - "Right angle" for exactly 90°
// - "Obtuse angle" for angles greater than 90° and less than 180°
// - "Straight angle" for exactly 180°
// - "Reflex angle" for angles greater than 180° and less than 360°
// - "Invalid angle" for angles outside the valid range.

// Assumption: The parameter is a valid number. (You do not need to handle non-numeric inputs.)

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

//function getAngleType(angle) {
  // TODO: Implement this function

// Implement a function getAngleType
function getAngleType(angle) {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle > 180 && angle < 360) {
    return "Reflex angle";
  } else {
    return "Invalid angle";
  }
}

// Export for use in other files / Jest tests
//module.exports = getAngleType;

// Helper function for assertions
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}


// The line below allows us to load the getAngleType function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
//module.exports = getAngleType;

// This helper function is written to make our assertions easier to read.
// If the actual output matches the target output, the test will pass
/*function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}*/

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles
// ===> TESTS

// Acute angles (0 < angle < 90)
console.log("Testing Acute angles...");
assertEquals(getAngleType(1), "Acute angle");
assertEquals(getAngleType(45), "Acute angle");
assertEquals(getAngleType(89), "Acute angle");
assertEquals(getAngleType(0.5), "Acute angle");

// Right angle (=90)
console.log("Testing Right angle...");
assertEquals(getAngleType(90), "Right angle");

// Obtuse angles (90 < angle < 180)
console.log("Testing Obtuse angles...");
assertEquals(getAngleType(91), "Obtuse angle");
assertEquals(getAngleType(135), "Obtuse angle");
assertEquals(getAngleType(179), "Obtuse angle");

// Straight angle (=180)
console.log("Testing Straight angle...");
assertEquals(getAngleType(180), "Straight angle");

// Reflex angles (180 < angle < 360)
console.log("Testing Reflex angles...");
assertEquals(getAngleType(181), "Reflex angle");
assertEquals(getAngleType(270), "Reflex angle");
assertEquals(getAngleType(359), "Reflex angle");
assertEquals(getAngleType(359.9), "Reflex angle");

// Invalid angles (angle <= 0 or angle >= 360)
console.log("Testing Invalid angles...");
assertEquals(getAngleType(0), "Invalid angle");
assertEquals(getAngleType(-1), "Invalid angle");
assertEquals(getAngleType(-45), "Invalid angle");
assertEquals(getAngleType(360), "Invalid angle");
assertEquals(getAngleType(361), "Invalid angle");
assertEquals(getAngleType(720), "Invalid angle");

console.log("\n✅ All tests completed successfully!");
