let arr =[1,2]
function test(array){
  array = [1,2,3]
}
test(arr)
console.log(arr)


// The answer is [1,2]. I know that after all the explanations on references, it seems weird. Still, there is a good reason for it, The = Operator creates a new reference, The array exist in the local scope and don't influence the global variables in this case.
// If the code was like:
// let arr =[1,2]
// function test(array){
//   arr = [1,2,3]
// }
// test(arr)
// console.log(arr)
// The answer was [1,2,3] because, in this case, we replaced the global variable (arr) with a new reference.