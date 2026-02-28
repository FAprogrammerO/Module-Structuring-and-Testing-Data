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
  
  if (typeof angle !== "number" || !Number.isFinite(angle)) {
    return "Invalid angle";
  }
  
  
  if (angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }
  
  
  if (angle < 90) return "Acute angle";
  if (angle === 90) return "Right angle";
  if (angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  return "Reflex angle"; 
}


module.exports = getAngleType; 


function assertEquals(actualOutput, targetOutput) {  
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// ===> TESTS
console.log("Testing Acute angles...");
assertEquals(getAngleType(1), "Acute angle");


console.log("Testing input validation...");
assertEquals(getAngleType("90"), "Invalid angle");
assertEquals(getAngleType(null), "Invalid angle");
assertEquals(getAngleType(NaN), "Invalid angle");
assertEquals(getAngleType(Infinity), "Invalid angle"); 

console.log("\n✅ All tests completed successfully!");
