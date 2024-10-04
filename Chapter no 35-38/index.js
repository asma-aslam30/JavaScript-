// =========================Questio no # 01=======================================
function displaDateAndTime() {
  var date = new Date();
  document.write(date);
}
displaDateAndTime();
document.write("<br>");
// =========================Questio no # 02=======================================
function greet() {
  var start = prompt("Enter your First name");
  var last = prompt("Enter your last name");
  document.write("Hello " + start + last + " good morning");
}
greet();

document.write("<br>");
// =========================Questio no # 03=======================================
function addition() {
  var num1 = +prompt("Enter first number");
  var num2 = +prompt("Enter second number");
  var sum = num1 + num2;
  document.write("Addition of two number is:" + sum);
}
addition();
document.write("<br>");
// =========================Questio no # 04=======================================

function calculator() {
  var num1 = prompt("Enter first number");
  var num2 = prompt("Enter second number");
  var opr = prompt("Enter operator");
  if (opr == "+") {
    document.write("Addition of" + num1 + "and" + num2 + "is:" + num1 + num2);
  } else if (opr == "-") {
    document.write(
      "Subtraction of" + num1 + "and" + num2 + "is:" + num1 - num2
    );
  } else if (opr == "/") {
    document.write("Division of" + num1 + "and" + num2 + "is:" + num1 / num2);
  } else if (opr == "*") {
    document.write(
      "Multiplication of" + num1 + "and" + num2 + "is:" + num1 * num2
    );
  } else {
    document.write("invlid choice");
  }
}
calculator();
document.write("<br>");
// =========================Questio no # 05=======================================
function square(num) {
  document.write(num * num);
}
square(5);
document.write("<br>");
// =========================Questio no # 06=======================================
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
document.write(factorial(7));
document.write("<br>");
// =========================Questio no # 07=======================================
function counting() {
  var start = parseInt(prompt("Starting from:"));
  var end = parseInt(prompt("End:"));

  if (start <= end) {
    for (var i = start; i <= end; i++) {
      document.write(i + " ");
    }
  } else {
    alert("The start value should be less than or equal to the end value.");
  }
}

counting();

// =========================Questio no # 08=======================================
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }
  var hypotenuse = Math.sqrt(
    calculateSquare(base) + calculateSquare(perpendicular)
  );

  return hypotenuse;
}
var base = parseFloat(prompt("Enter the base of the triangle:"));
var perpendicular = parseFloat(
  prompt("Enter the perpendicular of the triangle:")
);
var hypotenuse = calculateHypotenuse(base, perpendicular);
document.write("The hypotenuse of the triangle is: " + hypotenuse);
document.write("<br>")

// =========================Questio no # 09=======================================
function areaOfRectangle(width, height) {
    return width * height;
  }
  var area1 = areaOfRectangle(3, 3);
  document.write("Area of rectangle (using values): " + area1 + "<br>");
  areaOfRectangle()


  function areaOfRectangle(width, height) {
    return width * height;
  }
  var width = 5;
  var height = 4;
  var area2 = areaOfRectangle(width, height);
  document.write("Area of rectangle (using variables): " + area2);
  areaOfRectangle()
    
// =========================Questio no # 10=======================================
function palindrome() {
    var string = prompt("Enter a string to check if it's a palindrome:");
    var reversedString = string.split('').reverse().join('');
    if (string === reversedString) {
        alert("The string '" + string + "' is a palindrome.");
    } else {
        alert("The string '" + string + "' is not a palindrome.");
    }
}
palindrome();

// =========================Questio no # 11=======================================
 
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
// =========================Questio no # 02=======================================
