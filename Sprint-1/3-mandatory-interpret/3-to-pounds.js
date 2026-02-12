const penceString = "399p";
// initialises a string variable with the value "399p"
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// Removes the final character ("p") from the string, leaving only the numeric part of the price.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// Ensures the string has at least three characters by adding leading zeros if necessary.
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  //Takes the last two digits as the pence part and ensures it is exactly two characters long.
  

console.log(`£${pounds}.${pence}`);
// Combines the pounds and pence into a formatted currency string and outputs the final result in pounds (£)

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
