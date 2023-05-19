'use strict';
//debugger
// function factorial(n){
// if (n === 1){
//   return n;
// } else {
//   return n * factorial(n - 1);
// }
// }
// console.log(factorial(5));

function factorial(n){
  return (n === 1) ? n : (n * factorial(n -1));
}
console.log(factorial(6));