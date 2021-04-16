// What will log to console the following code snippet:

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

// The first statement let count = 0 declares a variable count.

// immediate() is a closure that captures the count variable from the outer scope. Inside of the immediate() function scope count is 0.

// However, inside the conditional, another let count = 1 declares a local variable count, which overwrites count from outer the scope. 
// The first console.log(count) logs 1.

// The second console.log(count) logs 0, since here count variable is accessed from the outer scope.