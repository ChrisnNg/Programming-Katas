/*

Kata 4

In this exercise, we will be given a list of instructors and have to
determine which instructor has the longest name.
i want that in a true case, the testing condition remains constant
*/

const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longestName = instructors[0];
  for (let i = 0; i < instructors.length; i++) {
    if (longestName.name.length < instructors[i].name.length) {
      longestName = instructors[i];
    }
  }
  return longestName;
};
console.log(instructorWithLongestName([ //{name: "Jeremiah", course: "Web"}
  {name: "Samuel", course: "iOS"},//6
  {name: "Jeremiah", course: "Web"},//8
  {name: "Ophilia", course: "Web"},//7
  {name: "Donald", course: "Web"}//6
]));
console.log(instructorWithLongestName([ // {name: "Domascus", course: "Web"}
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

