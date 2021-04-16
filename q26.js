// What will log to console the following code snippet:

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}





// The code snippet executes in 2 phases.

// Phase 1

// for() iterating 3 times. During each iteration a new function log() is created, which captures the variable i. 
// setTimout() schedules log() for execution after 1000ms.
// When for() cycle completes, i variable has value 3.
// Phase 2

// The second phase happens after 1000ms:

// setTimeout() executes the scheduled log() functions. log() reads the current value of variable i, which is 3, and logs to console 3.
// That’s why 3, 3, 3 is logged to the console.