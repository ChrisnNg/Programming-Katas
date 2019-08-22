/*
The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:
[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value.
Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of
values each set should be separated by a comma. If there is only one set of values then you should omit the comma.
psuedocode-
first create a for function that reads the arrays one by one
then create a second function that reads the inside of that array
then create a reptition of the initial array by adding it back to itself based on the second element of the inside array
the return should be a string

the first for function should give me the intial array containing the sub array.
the next for function will give me the sub arrays
the third for function will give me the numbers within the subarray
*/

const repeatNumbers = function(data) {
  // Put your solution here
  let result = [""];
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    //the intial array
    for (let x = 0; x < 1; x++) {
      // the subarray
      if (i >= 1) {
        result += ",";
      }
      for (let c = 0; c < data[i][1]; c++) {
        num  = data[i][x];
        num.toString();
        result = result + num;
      }
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


/* expected output
1111111111
11, 222
10101010, 343434343434, 9292
*/