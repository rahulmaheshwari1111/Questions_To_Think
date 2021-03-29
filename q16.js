// What will this output?
var a = [1, 2, 3];
console.log(a[6]);

// b) Here, a[6] will output undefined, but the slot still remains empty rather than filled with undefined. 
// This may be an important nuance in some cases. For example, when using map(), empty slots will remain empty in map()’s output, 
// but undefined slots will be remapped using the function passed to it: