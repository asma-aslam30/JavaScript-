//---------------------------------------------------------------//
//--------------Student Marksheet----------------//
//---------------------------------------------------------------//



// Define marks for each subject
var mathematics = 85;
var computerScience = 95;
var english = 75;

// Calculate total marks
var totalMarks = mathematics + english + computerScience;

// Calculate percentage
var totalSubjects = 3;
var percentage = (totalMarks / (totalSubjects * 100)) * 100;

// Assign grade
let grade = "Fail";
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
}

// Display marksheet
console.log("---------------------");
console.log("--Student Marksheet--");
console.log("---------------------");
console.log("Mathematics:" + mathematics);
console.log("English:" + english);
console.log("Computer Science:" + computerScience);
console.log("---------------------");
console.log("Total Marks:" + totalMarks);
console.log("Percentage is :" + percentage + "%");
console.log("Your Grade is:" + grade);
console.log("Congratulation! your percentage is " + percentage + " and your grade is " + grade + " 🎉🎊");