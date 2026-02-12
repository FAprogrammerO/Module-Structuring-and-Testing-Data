const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
Math.floor() //removes decimal part and returns whole number
Math.random() //needs to values between minimum and maximum to generate a random number
console.log(maximum - minimum + 1 ) + minimum; // this is same as 100 - 1 + 1 = 100 
console.log(`The random number is ${num}`);