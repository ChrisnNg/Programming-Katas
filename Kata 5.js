/*
Kata 5
In this exercise, we will be given a normal string of words and turn it
into a percent-encoded string by replacing all whitespace with %20. *if the space is the first or last string, do not replace or add the space into the new string.
create a new string and return that instead of trying to edit the string
*/
const urlEncode = function(text) {
  // Put your solution here
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    (text[i] === " " && i > 0 && i < text.length - 1) ? newText += "%20" : (text[i] === " " && i === 0) ? true : newText += text[i];
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));//Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs "));//Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure"));//blue%20is%20greener%20than%20purple%20for%20sure