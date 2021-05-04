function outerFunc(outerParam) {
    function innerFunc(innerParam) {
       outerParam["b"] = innerParam;
    }
    return innerFunc;
  }
  
  const obj = {a:1}
  const example = outerFunc(obj);
  const answer = example(2)
  console.log(obj);

  

//   The answer is {a: 1,b: 2}. After the previous question, we can recognize it's a Closure, but this question is also about References. In JavaScript, there are two kinds of variables types: primitives variables (strings, numbers, and booleans) and References variables (arrays and objects). Primitives variables save in memory in their values, and references save in memory as virtual id. For that reason, when we pass the object from function to function, we actually pass the virtual id. In our case, the compiler saved the obj and saw we call the reference again by outerParam["b"] = innerParam. Hence, he added to the object key b and value 2 (value of innerParam).
// In the case of primitives variables like:
// function outerFunc(outerParam) {
//   function innerFunc(innerParam) {
//      outerParam = innerParam;
//   }
//   return innerFunc;
// }

// const num = 1
// const example = outerFunc(num);
// const answer = example(2)
// console.log(num);
// The num will still be 1 (but the outerParam will be 2).

