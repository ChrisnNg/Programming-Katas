/*
Kata 3

In this exercise, we will be counting the number of vowels that appear in
a given string. For this exercise, consider the following to be vowels:
a, e, i, o, and u.
*/

const numberOfVowels = function(data) {
// Put your solution here
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' ||  data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      sum = sum + 1;
    }
  }
  return sum;
};




console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou"));// 5

