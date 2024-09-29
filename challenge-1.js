// added the prompt-sync module to get input from the user
const prompt = require("prompt-sync")();
//Function to determine the students grade based on their marks
function checkStudentMarks(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 49 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks < 49) {
    return "D";
  } else {
    return "E";
  }
}
//Allows the user to enter a certain marks

let marks = prompt("Enter the students marks ");
//ensures the number entered by the user is an integer

marks = parseInt(marks);

if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid input!");
} else {
  console.log(`Your grade is : ${checkStudentMarks(marks)}`);
}
