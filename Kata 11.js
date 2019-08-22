/*In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors]
}

*/


const organizeInstructors = function(instructors) {
  // Put your solution here
  let courseInstructors = {
    iOS: [],
    Web: [],
    Blockchain: []
  };

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].course === "iOS") {
      courseInstructors.iOS.splice(0, 0, instructors[i].name);
    } else if (instructors[i].course === "Web") {
      courseInstructors.Web.splice(0, 0, instructors[i].name);
    } else courseInstructors.Blockchain.splice(0, 0, instructors[i].name);
  } if (courseInstructors.Blockchain.length === 0) {
    delete courseInstructors.Blockchain;
  } if (courseInstructors.Web.length === 0) {
    delete courseInstructors.Web;
  } if (courseInstructors.iOS.length === 0) {
    delete courseInstructors.iOS;
  } return courseInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));



/*
Output
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/
