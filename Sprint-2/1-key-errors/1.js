// Predict and explain first...

// Why will an error occur when this program runs?
// =============> 'decimalNumber' has already been declared.


// Try playing computer with the example to work out what is going on
 
// =============>The variable in line 9 "decimalNumber" is declared as a parameter passed to the function
// but in line 10 the variable redeclared again.
// Finally, correct the code to fix the problem
// =============> write your new code here

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
 
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
