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
 
var secretNumber = 7;
var userSecret= +prompt("Enter a secret Number")
if(userSecret===secretNumber){
document.write("Bingo! Correct answer <br>");
}
else if(userSecret + 1 ===secretNumber){
document.write("Close enough to the Correct answer <br>");
}
//===========================Question no:08============================================
var userInput =+prompt("Enter any Number")

if(userInput%3 == 0){
  document.write("Number is divisible by 3 <br>")
}
else{
  document.write("Not Divisible by 3 <br>")
}
//===========================Question no:09============================================
 
var userIn = +prompt("Enter any number:")
if(userIn%2 == 0){
  document.write("Number is even <br>")
}
else {
  document.write("Number is odd <br>")
}

//===========================Question no:10============================================
 
var input= +prompt("Enter Temperature:")

if(input>40){
  document.write("It is too hot outside.<br>")
}
else if(input>30){
  document.write("The Weather today is Normal.<br>")
}
else if(input>20){
  document.write("Today’s Weather is cool.<br>")
}
else if(input>10){
  document.write("OMG! Today’s weather is so Cool.<br>")
}

//===========================Question no:11============================================

var firstNumber= +prompt("Enter First Number");
var secondNumber= +prompt("Enter Second Number");
var op= prompt("Enter any operator(-,+,*,/,%)");

if(op == "+"){
  result=firstNumber+secondNumber;
  document.write(`Addition of ${firstNumber} and ${secondNumber} is ${result}`)
}
if(op == "-"){
  result=firstNumber-secondNumber;
  document.write(`Subtraction of ${firstNumber} and ${secondNumber} is ${result}`)
}
if(op == "*"){
  result=firstNumber*secondNumber;
  document.write(`Multiplication of ${firstNumber} and ${secondNumber} is ${result}`)
}
if(op == "/"){
  result=firstNumber/secondNumber;
  document.write(`Division of ${firstNumber} and ${secondNumber} is ${result}`)
}
if(op == "%"){
  result=firstNumber%secondNumber;
  document.write(`Modulus of ${firstNumber} and ${secondNumber} is ${result}`)
}