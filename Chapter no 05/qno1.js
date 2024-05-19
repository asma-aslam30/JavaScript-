// -----------Question no :01------------------

var a = 10;
document.writeln("Results:<br>")
document.writeln("The value of a is:" + a + "<br>");
document.writeln("----------------------------------------<br> <br>")

a = ++a;
document.writeln("The value of  ++a is:" + a + "<br>");
document.writeln("Now the value of a is:" + a + "<br><br> <br>");

a = a++;
document.writeln("The value of  a++ is:" + a++ + "<br>");
document.writeln("Now the value of a is:" + a++ + "<br> <br> <br>");

a = --a;
document.writeln("The value of  --a is:" + --a + "<br>");
document.writeln("Now the value of a is:" + a + "<br> <br> <br>");

// a=a--;
document.writeln("The value of  a-- is:" + a-- + "<br>");
document.writeln("Now the value of a is:" + a-- + "<br> <br> <br>");


// -----------Question no :02------------------
var b = 2;
var c = 1;
var result = --b - --c + ++c + c--;
document.writeln("Output of  <b> --b - --c + ++c + c-- is: " + result + "<br> <br>");

var b = 2;
var c = 1;

document.writeln("<br>Output of --b is: " + (--b));
document.writeln("<br>Output of --b - --c is: " + ((--b) - (--c)));
document.writeln("<br>Output of --b - --c + ++c is: " + ((--b) - (--c) + (++c)));
document.writeln("<br>Output of --b - --c + ++c + --c is: " + ((--b) - (--c) + (++c) + (--c)) + "<br>");
document.writeln("Value of a is" + a + "<br>");
document.writeln("Value of b is" + b + "<br>");
document.writeln("Value of result is" + result + "<br> <br>");


// ---------------Question no:03----------------------

var name = prompt("Please enter your name:");
var greetingMessage = "Hello, " + name + "! Good Morning";
alert(greetingMessage);

// ---------------Question no:03----------------------

var number = prompt("Please enter a number for the multiplication table:");

if (number === null || number.trim() === "") {
    number = 5;
} else {
    number = parseInt(number, 10);
}

// Create the multiplication table
var multiplicationTable = "Multiplication Table of " + number + ":\n <br>";
for (var i = 1; i <= 10; i++) {
    multiplicationTable += number + " x " + i + " = " + (number * i) + "\n ";
}
alert(multiplicationTable);

//-----------Question no:04-----------------------------
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
document.writeln("---------------------");
document.writeln("--Student Marksheet--");
document.writeln("---------------------");
document.writeln("Mathematics:" + mathematics);
document.writeln("English:" + english);
document.writeln("Computer Science:" + computerScience);
document.writeln("---------------------");
document.writeln("Total Marks:" + totalMarks);
document.writeln("Percentage is :" + percentage + "%");
document.writeln("Your Grade is:" + grade);
document.writeln("Congratulation! your percentage is " + percentage + " and your grade is " + grade + " 🎉🎊");


 