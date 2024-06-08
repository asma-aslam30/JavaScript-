//========================Question no:01========================================

var character = prompt("Enter a single character: ");

if (character.length === 1) {
  var asciiValue = character.charCodeAt(0);
  var result;

  if (asciiValue >= 48 && asciiValue <= 57) {
    result = "Number";
  } else if (asciiValue >= 65 && asciiValue <= 90) {
    result = "Uppercase Letter";
  } else if (asciiValue >= 97 && asciiValue <= 122) {
    result = "Lowercase Letter";
  } else {
    result = "Special Character";
  }

  console.log("The character '" + character + "' is a " + result);
} else {
  console.log("Please enter a single character.");
}
//========================Question no:02========================================

var integer1 = +prompt("Enter first integer")
var integer2 = +prompt("Enter second integer")

if(integer1>integer2){
    console.log(`${integer1} is larger than ${integer2}`);
}
else if(integer1<integer2){
    console.log(`${integer2} is larger than ${integer1}`);
}
else if(integer1 == integer2){
    console.log(`${integer1} is equal to  ${integer2}`);
}

//========================Question no:03========================================
var userNumber= +prompt("Enter number ");

if(userNumber<0){
    console.log(`${userNumber} is negative`)
}
else if(userNumber>0){
    console.log(`${userNumber} is positive`)
}
else if(userNumber == 0){
    console.log(`${userNumber} is equal to 0`)
}
//========================Question no:04========================================

var userChar = prompt("Enter a Character");

if (userChar === "a" || userChar === "e" || userChar === "i" || userChar === "o" || userChar === "u" ||
    userChar === "A" || userChar === "E" || userChar === "I" || userChar === "O" || userChar === "U") {
    console.log(userChar + " is a vowel");
} else {
    console.log(userChar + " is not a vowel");
}

//========================Question no:05========================================

var correctPass = 1234;
var password= prompt("Enter your Passoward");
if(password == correctPass){
    console.log("Correct! The password you entered matches the original password")
}
else if(password == ""){
    console.log("Please Enter your Passoward")

}
else {
    console.log("Invalid Choice")
}
//========================Question no:06========================================
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
  console.log(greeting);
} else {
  greeting = "Good evening";
  console.log(greeting);
}

//========================Question no:07========================================

var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
time = Number(time);
var hours, minutes, period;

if (isNaN(time) || time < 0 || time > 2359 || time % 100 >= 60) {
    console.log("Invalid time format. Please enter a valid 24-hour time.");
} else {
    hours = Math.floor(time / 100);
    minutes = time % 100;

    if (hours >= 0 && hours < 12) {
        period = "AM";
        if (hours == 0) {
            hours = 12; // 0 hours is 12 AM in 12-hour format
        }
    } else {
        period = "PM";
        if (hours > 12) {
            hours -= 12; // Convert to 12-hour format
        }
    }

    console.log("Time in 12-hour format: " + hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + period);
}
