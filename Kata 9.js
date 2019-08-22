/*
In this activity, we will be converting date strings like "2016/12/02", into more English friendly date strings like December 2nd, 2016.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

expectancies
st - 1, 21, 31
nd - 2, 22
rd - 3, 23
th - all else

set a var for each month
*/



const talkingCalendar = function(date) {
  // Your code here
  let theDate = "";
  // month
  if (date[5] === "0") {
    if (date[6] === "1") {
      theDate += "January";
    } else if (date[6] === "2") {
      theDate += "Feburary";
    } else if (date[6] === "3") {
      theDate += "March";
    } else if (date[6] === "4") {
      theDate += "April";
    } else if (date[6] === "5") {
      theDate += "May";
    } else if (date[6] === "6") {
      theDate += "June";
    } else if (date[6] === "7") {
      theDate += "July";
    } else if (date[6] === "8") {
      theDate += "August";
    } else theDate += "September";
  } else if (date[6] === "0") {
    theDate += "October";
  } else if (date[6] === "1") {
    theDate += "November";
  } else theDate += "December";
  //day
  if (date[8] === "0") {
    theDate += " " + date[9];
  } else  theDate += " " + date[8] + date[9];
  //suffix
  if (date[8] + date[9] === "01" || date[8] + date[9] === "21" || date[8] + date[9] === "31") {
    theDate += "st,";
  } else if (date[8] + date[9] === "02" || date[8] + date[9] === "22") {
    theDate += "nd,";
  } else if (date[8] + date[9] === "03" || date[8] + date[9] === "23") {
    theDate += "rd,";
  } else theDate += "th,";
  //year
  theDate += " ";
  for (let i = 0; i < 4; i++) {
    theDate += date[i];
  }
  return theDate;
};

console.log(talkingCalendar("2016/12/02")); // December 2nd, 2016
console.log(talkingCalendar("2006/11/11")); // November 11th, 2006
console.log(talkingCalendar("1986/08/24")); // August 24th, 1986
