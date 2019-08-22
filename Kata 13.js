/*
In this exercise, we will be given a url encoded string of key-value pairs, and we will have to turn it into a JavaScript object.

URL Encoded Strings
To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the
following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
So the following URL encoded string:

city=Vancouver&weather=lots%20of%20rain
Could be converted to the following JavaScript object:

{
  city: "Vancouver",
  weather: "lots of rain"
}

find the i of when there is a equal sign
and when there is a &
before the equal sign = name
after = content
*/

const urlDecode = function(text) {
  // Put your solution here
  let object = {};
  let name = "";
  let content = "";
  let equal = [];
  let nametwo = "";
  //change %20 into a space
  text = text.replace("%20", " ")
  //find the position of the equal sign(s)
  for(let i = 0; i < text.length; i++){
    if(text[i] === "="){
      equal.push(i);
    }
  }
  //name based on left position of last equal

    for(let x = 0; x < equal[0]; x++){
      name += text[x];
    }
  //content creation
    for(let y = equal[0] + 1; y < text.length; y++){
      content += text[y];
    }

  //seperate names based on &
  for(let i = 0; i < text.length; i++){
    if(text[i] === "&"){
      name += text[i];
    }
  }

object[name] = content;

console.log("equal is " + equal);
return object;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
Expected Output
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.
*/
