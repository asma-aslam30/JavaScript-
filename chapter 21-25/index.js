// ==========================Question no # 01==============================================

var firstName = prompt("Enter Your First Name:")
var lastName = prompt("Enter Your last Name:")
var fullName = firstName + " " + lastName
document.writeln("Hello " + fullName + " Welcome to my website <br> <br>")

// ==========================Question no # 02==============================================
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var favouriteMobilePhoneModel = prompt("Enter Your favorite mobile phone model");
document.writeln("Your favorite mobile phone model is " + favouriteMobilePhoneModel + " and its length is " + favouriteMobilePhoneModel.length + " characters long.<br> <br>")

// ==========================Question no # 03==============================================
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var country = "Pakistani";
var index = country.indexOf("n");
document.writeln("String: " + country + "<br>Index of 'n': " + index + "<br> <br>")

// ==========================Question no # 04==============================================
var hellooo = "Hello World";
var index = hellooo.lastIndexOf("l");
document.writeln("String: " + hellooo + "<br>Index of 'n': " + index + "<br> <br>")

// ==========================Question no # 05==============================================
var country = "Pakistani";
var index = country.charAt(3);
document.writeln("String: " + country + "<br>Index of 3: " + index + "<br> <br>")

// ==========================Question no # 06==============================================
var firstName = prompt("Enter Your First Name:")
var lastName = prompt("Enter Your last Name:")
document.writeln(firstName.concat(lastName));

// ==========================Question no # 07==============================================
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
var city = "Hyderabad";
var index = city.indexOf("Hyder");
city = city.replace("Hyder", "Islam");
document.writeln("City: " + city + "<br> <br>")
// ==========================Question no # 08==============================================
// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var index = message.indexOf("and");
message = message.replace("and", "&");
document.writeln("Message: " + message + "<br> <br>")
// ==========================Question no # 09==============================================
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
var string = "472";
var number = parseInt(string);
document.writeln("Value: " + number + "<br> Type: " + typeof number + "<<br> <br>")

/* ==========================Question no # 10==============================================  */
// Write a program that takes user input. Convert and
// show the input in capital letters.
var input = prompt("Enter Your Name:")
var upperCase = input.toUpperCase();
document.writeln("User Input: " + input + "<br> Upper Case: " + upperCase+ "<br> <br>")
// ==========================Question no # 11==============================================
// Write a program that takes user input. Convert and
// show the input in title case.
var names=prompt("Enter any name:")
var titleCase=names.charAt(0).toUpperCase()+names.slice(1).toLowerCase()
document.write("User Input: "+names+"<br> Title Case: "+titleCase+"<br>")
// ==========================Question no # 12==============================================
// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
var string = num.toString();
var index = string.indexOf(".");
string = string.slice(0, index) + string.slice(index + 1);
document.writeln("Number: " + num + "<br> String: " + string + "<br> <br>")
// ==========================Question no # 13==============================================

// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// 
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
var username = prompt("Enter Your Name:")
var specialChar = "@,.!"
var index = specialChar.indexOf(username);
if (index > -1) {
    document.write("Please Enter Valid Username<br> <br>")
    } else {
        document.write("Valid Username<br> <br>")
        }
 // ==========================Question no # 14==============================================
//  You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
var array=["cake", "apple pie", "cookie", "chips", "patties"]
var search=prompt("Enter Your Search Item:")
var index = array.indexOf(search);
if (index > -1) {
    document.write("Search Item Found<br> <br>")
    } else {
        document.write("Search Item Not Found<br> <br>")
        }
// ==========================Question no # 15==============================================
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
var password = prompt("Enter Your Password:")
var password1 = /[a-z]/g;
var password2 = /[A-Z]/g;
var password3 = /[0-9]/g;
if (password1.test(password) && password2.test(password) && password3.test(password) &&
password.length >= 6 && password[0] != 0) {
    document.write("Valid Password<br> <br>")
    } else {
        document.write("Invalid Password<br> <br>")
        }
// ==========================Question no # 16==============================================
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.in one line only u is show next lin n then i and so on.
var university = "University of Karachi";
document.writeln(university.charAt(0) + "<br>")
document.writeln(university.charAt(1) + "<br>")
document.writeln(university.charAt(2) + "<br>")
document.writeln(university.charAt(3) + "<br>")
document.writeln(university.charAt(4) + "<br>")
document.writeln(university.charAt(5) + "<br>")
document.writeln(university.charAt(6) + "<br>")
document.writeln(university.charAt(7) + "<br>")
document.writeln(university.charAt(8) + "<br>")
document.writeln(university.charAt(9) + "<br>")
document.writeln(university.charAt(10) + "<br>")
document.writeln(university.charAt(11) + "<br>")
document.writeln(university.charAt(12) + "<br>")
document.writeln(university.charAt(13) + "<br>")
document.writeln(university.charAt(14) + "<br>")
document.writeln(university.charAt(15) + "<br>")
document.writeln(university.charAt(16) + "<br>")
document.writeln(university.charAt(17) + "<br>")
document.writeln(university.charAt(18) + "<br>")
document.writeln(university.charAt(19) + "<br>")
document.writeln(university.charAt(20) + "<br>")
document.writeln(university.charAt(21) + "<br>")
 
// ==========================Question no # 17==============================================
 
var userInput = "Pakistani";
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write("Last character is " + lastCharacter + "<br>");

// ==========================Question no # 18==============================================
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
var string = "The quick brown fox jumps over the lazy dog";
var count = 0;
for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "t" && string.charAt(i + 1) ==
    "h" && string.charAt(i + 2) == "e") {
        count++;
        }
        }
        document.write("The word the is repeated " + count + " times in the given string<br>");