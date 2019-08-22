/*In this exercise, we will be building an advanced case maker that can convert strings into all different kinds of case styles; like camel, pascal, snake, or even kebab.

This an extension to the previous Case Maker kata. Create a new file (and gist) for this kata instead of updating the one from your Case Maker submission.

Case Maker II
We will still be given an input string to convert. However, this time,
we'll also be given a casing style to work with. The following code block will describe all the casing styles to support.
We may also receive an array of casing styles, and each of these should be applied.
*/
const makeCase = function(input, style) {
  // Put your solution here
  let output = "";
  if (Array.isArray(style)) {
    // Casing style prescedenter
    output = input;
    for (let i = 0; i < style.length; i++) {
      if (style[i] === "camel") {
        style.splice(i, 1);
        style.push("camel");
      }
      if (style[i] === "pascal") {
        style.splice(i, 1);
        style.push("pascal");
      }
      if (style[i] === "snake") {
        style.splice(i, 1);
        style.push("snake");
      }
      if (style[i] === "kebab") {
        style.splice(i, 1);
        style.push("kebab");
      }
      if (style[i] === "title") {
        style.splice(i, 1);
        style.push("title");
      }
      if (style[i] === "vowel") {
        style.splice(i, 1);
        style.push("vowel");
      }
      if (style[i] === "consonant") {
        style.splice(i, 1);
        style.push("consonant");
      }
      if (style[i] === "upper") {
        style.splice(i, 1);
        style.push("upper");
      }
    }
    for (let i = 0; i < style.length; i++) {
      if (style[i] === "camel") {
        for (let i = 0; i < output.length; i++) {
          if (output[i - 1] === " ") {
            output = output.replace(output[i], output[i].toUpperCase());
          } else if (output[i] === " ") {
            output = output.replace(output[i], "");
          }
        }
      } else if (style[i] === "pascal") {
        output = output.replace(output[0], output[0].toUpperCase());
        for (let i = 1; i < output.length; i++) {
          if (output[i - 1] === " ") {
            output = output.replace(output[i], output[i].toUpperCase());
          } else if (output[i] === " ") {
            output = output.replace(output[i], "");
          }
        }
      } else if (style[i] === "snake") {
        for (let i = 0; i < output.length; i++) {
          if (output[i] === " ") {
            output = output.replace(output[i], "_");
          }
        }
      } else if (style[i] === "kebab") {
        for (let i = 0; i < output.length; i++) {
          if (output[i] === " ") {
            output = output.replace(output[i], "-");
          }
        }
      } else if (style[i] === "title") {
        output = output.replace(output[0], output[0].toUpperCase());
        for (let i = 1; i < output.length; i++) {
          if (output[i - 1] === " ") {
            output = output.replace(output[i], output[i].toUpperCase());
          }
        }
      } else if (style[i] === "vowel") {
        for (let i = 0; i < output.length; i++) {
          if (output[i] === 'a' ||  output[i] === 'e' || output[i] === 'i' || output[i] === 'o' || output[i] === 'u') {
            output = output.replace(output[i], output[i].toUpperCase());
          }
        }
      } else if (style[i] === "consonant") {
        for (let i = 0; i < output.length; i++) {
          if (output[i] === 'a' ||  output[i] === 'e' || output[i] === 'i' || output[i] === 'o' || output[i] === 'u') {
            true;
          } else output = output.replace(output[i], output[i].toUpperCase());
        }
      } else if (style[i] === "upper") {
        for (let i = 0; i < output.length; i++) {
          output = output.replace(output[i], output[i].toUpperCase());
        }
      }
    } return output;
    // start of single styles below
  } else if (style === "camel") {
    for (let i = 0; i < input.length; i++) {
      if (input[i - 1] === " ") {
        output += input[i].toUpperCase();
      } else if (input[i] === " ") {
        true;
      } else output += input[i];
    }
  } else if (style === "pascal") {
    output += input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (input[i - 1] === " ") {
        output += input[i].toUpperCase();
      } else if (input[i] === " ") {
        true;
      } else output += input[i];
    }
  } else if (style === "snake") {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        output += "_";
      } else output += input[i];
    }
  } else if (style === "kebab") {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        output += "-";
      } else output += input[i];
    }
  } else if (style === "title") {
    output += input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (input[i - 1] === " ") {
        output += input[i].toUpperCase();
      } else output += input[i];
    }
  } else if (style === "vowel") {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'a' ||  input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        output += input[i].toUpperCase();
      } else output += input[i];
    }
  } else if (style === "consonant") {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'a' ||  input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        output += input[i];
      } else output += input[i].toUpperCase();
    }
  } else if (style === "upper") {
    for (let i = 0; i < input.length; i++) {
      output += input[i].toUpperCase();
    }
  }
  return output;
};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));// (upper camel case) first letter is also capitalized
console.log(makeCase("this is a string", "snake"));//Punctuation is removed and spaces are replaced by single underscores.
console.log(makeCase("this is a string", "kebab"));// snake but hypens instead of underscore
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));//!vowel
console.log(makeCase("this is a string", ["upper", "snake"]));

//additional tests
console.log(makeCase("this is a string", ["upper", "kebab"]));
console.log(makeCase("this is a string", ["vowel", "camel"]));
console.log(makeCase("this is a string", ["consonant", "pascal"]));
console.log(makeCase("this is a string", ["title", "snake"]));

/*
Expected Output
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.
*/