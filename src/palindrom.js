'use strict';
function isPalindrome(word) {
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
}
console.log(isPalindrome("level")); 
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 
console.log(isPalindrome("довод")); 

