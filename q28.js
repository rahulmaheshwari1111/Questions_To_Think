var answer = 0;

const baseValue = value => multipleValue => value * multipleValue;

const multiple = baseValue(2);
answer = multiple(5);
console.log(answer);


//******************////
// The answer is 10. This question is about Closures. In simple words - Closures are functions that return another function, and the inner function has access to the outer variables function (You can read more here). We can look at Closures like Global scope (outer function) and Local scope (inner function) that leaves inside the local scope (baseValue). Like regular Scope in JavaScript, the Local scope has access to Global Scope. For that reason, the compiler can know what is value.
// FYI, This doesn't seem like a "conservative" Closure example because it's writing in ES5 syntax (arrow function). The "conservative" looks like:
// var answer = 0;

// function baseValue(value){
//    return function(multipleValue){
//       return value * multipleValue;
//    }
// }

// const multiple = baseValue(2);
// answer = multiple(5);
// console.log(answer);