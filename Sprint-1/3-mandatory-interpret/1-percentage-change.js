let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",",""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below
// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 3 function (lines 4,5, and 10)
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// line 5, the replaceAll method is missing a comma between its arguments.
// c) Identify all the lines that are variable reassignment statements
// 4 and 5)
// d) Identify all the lines that are variable declarations
// 1, 2, 7, and 8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/*The expression Number(carPrice.replaceAll(",", "")) first removes the commas from the string value of carPrice.
After that, it converts the cleaned string into a number.
The purpose is to make sure the value can be used in mathematical calculations.*/