
/*
In this exercise, we will be converting a normal string into camelCase text.
Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.
Submit Your Work
*/

const camelCase = function(input) {
  // Your code here
  let camel = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === " ") {
      camel += input[i].toUpperCase();
    } else if (input[i] === " ") {
      true;
    } else camel += input[i];
  } return camel;
};

console.log(camelCase("this is a string")); //thisIsAString
console.log(camelCase("loopy lighthouse")); // loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious