// ==================Question no # 01===============================
var multidimensionalArrray = [[, , , []]];
// ==================Question no # 02===============================
var multidimensionalArrray = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
for (var i = 0; i < multidimensionalArrray.length; i++) {
  document.write(multidimensionalArrray[i] + "<br>");
}

// ==================Question no # 03===============================
for (var i = 1; i < 11; i++) {
  document.write(i + "<br>");
}
// ==================Question no # 04===============================
var multiplicantNumber = prompt("Enter the Number you want");
var length = prompt("Enter the lenght of the multiplication table");
for (var i = 1; i <= length; i++) {
  document.write(
    multiplicantNumber + " * " + i + " = " + multiplicantNumber * i + "<br>"
  );
}

// ==================Question no # 05===============================

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  document.write("Element at index " + i + " is " + fruits[i] + " <br>");
}
// ==================Question no # 06===============================
 
for (var i = 1; i <= 15; i++) {
  document.write(i + " ");
}
document.write("<br>");
for (var i = 15; i >= 1; i--) {
  document.write(i + " ");
}
document.write("<br>");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + " ");
}
document.write("<br>");
for (var i = 1; i < 20; i += 2) {
  document.write(i + " ");
}
document.write("<br>");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + " k");
}
document.write("<br>");
// ==================Question no # 07===============================
var array = ["cake", "apple pie", "cookie", "chips", "patties"]
var search=prompt("Search...").trim();
var found = false;  
    
for (var i = 0; i < array.length; i++) {
  if (search.toLowerCase() === array[i].toLowerCase()) {
    document.write("At index " + i + " found " + array[i] + "<br>");
    found = true;  
  }
}
if (!found) {
  document.write("Item not found.<br>");
}

// ==================Question no # 08===============================
var array = [24, 53, 78, 91, 12]
var maxValue=Math.max(...array)
document.write(maxValue)
document.write("<br>")
// ==================Question no # 09===============================
var array = [24, 53, 78, 91, 12]
var minValue=Math.min(...array)
document.write(minValue)
document.write("<br>")

// ==================Question no # 10===============================
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      document.write(i + "<br>");  
    }
  }
 
