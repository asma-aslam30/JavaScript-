//===========================Question no:01============================================

var cityName = prompt("Enter city name: ");
if (cityName == "Karachi") {
  document.write("Welcome to the city of lights. <br>");
}

//===========================Question no:02============================================
var userGender = prompt("Enter your gender: ");
if (userGender == "Male") {
  document.write("Good Morning! Sir <br>");
}
if (userGender == "Female") {
  document.write("Good Morning! Madam <br>");
}

//===========================Question no:03============================================

var trafficLight = prompt("Color of road traffic signal: ");
if (trafficLight == "red") {
  document.write("Must Stop <br>");
}
if (trafficLight == "green") {
  document.write("Move now <br>");
}
if (trafficLight == "yellow") {
  document.write("Ready to move <br>");
}
//===========================Question no:04============================================

var fuelCar = prompt("Enter  your current fuel in car (in litres)");
if (fuelCar < 0.25) {
  document.write("Please refill the fuel in your car <br>");
}

//===========================Question no:05============================================

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

//===========================Question no:06============================================

var engSubj = +prompt("Enter your English marks: ");
var urduSubj = +prompt("Enter your Urdu marks: ");
var mathSubj = +prompt("Enter your Math marks: ");

var totalMarks = 300;
var marksObtain = engSubj + mathSubj + urduSubj;
var percentage = (marksObtain / totalMarks) * 100;

document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtain + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

if (percentage >= 80) {
    document.write("Grade: A-One <br>");
    document.write("Remarks: Excellent <br>");
} else if (percentage >= 70) {
    document.write("Grade: A <br>");
    document.write("Remarks: Good <br>");
} else if (percentage >= 60) {
    document.write("Grade: B <br>");
    document.write("Remarks: You need to improve <br>");
} else {
    document.write("Grade: Fail <br>");
    document.write("Remarks: Sorry <br>");
}
//===========================Question no:07============================================

