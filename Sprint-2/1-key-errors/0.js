// Predict and explain first...
//  =============> When we call capitalise("hello"), it will throw an error instead of returning "Hello".

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// =============> "str" has already been declared, in JavaScript we can not redeclare a parameter using let inside the same scope.
// =============>

  function capitalise(str) {
 
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("hello")); 
