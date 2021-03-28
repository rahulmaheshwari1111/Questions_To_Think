//Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5




//Answer: 
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}

//explaination:
// In JavaScript, functions provide access to an arguments object which provides access to the actual arguments passed to a function. 
// This enables us to use the length property to determine at runtime the number of arguments passed to the function.

// If two arguments are passed, we simply add them together and return.

// Otherwise, we assume it was called in the form sum(2)(3), 
// so we return an anonymous function that adds together the argument passed to sum() (in this case 2) 
// and the argument passed to the anonymous function (in this case 3).