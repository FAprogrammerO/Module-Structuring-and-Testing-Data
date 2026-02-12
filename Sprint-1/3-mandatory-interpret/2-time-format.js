const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable
// b) How many function calls are there?
// There is 1 function call in the program: console.log(result)
// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This line removes the leftover seconds from the total movie length and then divides the result by 60 to convert the remaining time into whole minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result stores the movie length formatted
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will work correctly for positive whole numbers representing seconds.