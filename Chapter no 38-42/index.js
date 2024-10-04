
// =========================Question no # 01===========================
// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
document.write(power(5,8));  
// =========================Question no # 02===========================
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;   
    } else {
        return false;  
    }
}
let year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// =========================Question no # 03===========================
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calculateArea(a, b, c) {
    let S = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
let a = 5;
let b = 6;
let c = 7;
let area = calculateArea(a, b, c);
console.log("The area of the triangle is: " + area.toFixed(2));

// =========================Question no # 04===========================
// Function to calculate the average of marks
function calculateAverage(marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total / marks.length;
}

// Function to calculate the percentage of marks
function calculatePercentage(marks, totalMarksPerSubject) {
    var obtainedMarks = 0;
    for (var i = 0; i < marks.length; i++) {
        obtainedMarks += marks[i];
    }
    var totalMarks = marks.length * totalMarksPerSubject;
    return (obtainedMarks / totalMarks) * 100;
}

// Main function to calculate and display the average and percentage
function mainFunction(marks, totalMarksPerSubject) {
    var average = calculateAverage(marks);
    var percentage = calculatePercentage(marks, totalMarksPerSubject);

    console.log("Average Marks: " + average.toFixed(2));
    console.log("Percentage: " + percentage.toFixed(2) + "%");
}

// Example usage:
var marks = [85, 90, 78]; // Marks in 3 subjects
var totalMarksPerSubject = 100; // Assume each subject is out of 100 marks
mainFunction(marks, totalMarksPerSubject);

// =========================Question no # 05===========================

// =========================Question no # 01===========================
// =========================Question no # 01===========================
// =========================Question no # 01===========================
// =========================Question no # 01===========================
// =========================Question no # 01===========================
// =========================Question no # 01===========================
// =========================Question no # 01===========================
// =========================Question no # 01===========================
// =========================Question no # 01===========================
// =========================Question no # 01===========================
// =========================Question no # 01===========================
