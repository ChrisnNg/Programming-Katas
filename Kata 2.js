/*
Kata 2
For this kata, we'll be adding only the numbers in the array which match
the given condition.
Input
*/

const conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === "even") {
      if (values[i] % 2 === 0) {
        sum = sum + values[i];
      }
    } else (values[i] % 2 === 0) ? true : sum = sum + values[i];
  }  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));// 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));// 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));// 144
console.log(conditionalSum([], "odd"));// 0