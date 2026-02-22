function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions
 // a) When formatTimeDisplay is called how many times will pad be called
 //  // =============> 3

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad is called for the first time?
// =============> "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> num=1
// Explanation: the third and final call to pad is with remainingSeconds, which equals 1 when the input is 61 seconds.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> "01"
// Explanation: the number 1 is converted to a string and padded to 2 digits, resulting in "01".
