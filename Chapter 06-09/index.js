// -----------------Question no:01--------------------------
var a = 10;
var b = 20;
var c = a + b;
document.writeln("Value of a is:" + a + "<br>");
document.writeln("Value of b is:" + b + "<br>");
document.writeln("Addition of " + a + " and " + b + " is: " + c + "<br><br> <br> <br>");

// -----------------Question no:02--------------------------
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
document.writeln("Value of a is:" + a + "<br>");
document.writeln("Value of b is:" + b + "<br>");
document.writeln("Addition of " + a + " and " + b + " is: " + c + "<br>");
document.writeln("Subtraction of " + a + " and " + b + " is: " + d + "<br>");
document.writeln("Multiplication of " + a + " and " + b + " is: " + e + "<br>");
document.writeln("Division of " + a + " and " + b + " is: " + f + "<br>");
document.writeln("Modulus of " + a + " and " + b + " is: " + g + "<br><br><br> <br> <br>");
//-----------------Question no:03-----------------------------


var myVariable;
document.write("Value after variable declaration is: " + myVariable + "<br>");
myVariable = 5;
document.write("Initial value: " + myVariable + "<br>");
myVariable++;
document.write("Value after increment is: " + myVariable + "<br>");
myVariable += 7;
document.write("Value after addition is: " + myVariable + "<br>");
myVariable--;
document.write("Value after decrement is: " + myVariable + "<br>");
var remainder = myVariable % 3;
document.write("The remainder is: " + remainder + "<br> <br> <br>");


//--------------------Question no:04----------------------------
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR");

//--------------------Question no:05----------------------------

        var number = prompt("Enter a number to display its multiplication table:");
        number = parseInt(number);
        document.write("<h1>Multiplication Table of " + number + "</h1>");
        document.write("<table border='1'>");
        for (var i = 1; i <= 10; i++) {
            document.write("<tr>");
            document.write("<td>" + number + " x " + i + "</td>");
            document.write("<td>=</td>");
            document.write("<td>" + (number * i) + "</td>");
            document.write("</tr>");
        }
        document.write("</table>");

//--------------------Question no:06----------------------------
var celsiusTemperature = 30;
var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
document.writeln(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br><br>");
var fahrenheitTemp = 86;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
document.writeln(fahrenheitTemp + "°F is " + celsiusTemp + "°C<br><br>");

//--------------------Question no:07----------------------------

var priceItem1 = 50;
var priceItem2 = 70;
var quantityItem1 = 2;
var quantityItem2 = 3;
var shippingCharges = 20;
var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;
var subtotal = totalCostItem1 + totalCostItem2;
var totalCost = subtotal + shippingCharges;
document.writeln("Price of Item 1: $" + priceItem1 + "<br>");
document.writeln("Price of Item 2: $" + priceItem2 + "<br>");
document.writeln("Ordered Quantity of Item 1: " + quantityItem1 + "<br>");
document.writeln("Ordered Quantity of Item 2: " + quantityItem2 + "<br>");
document.writeln("Shipping Charges: $" + shippingCharges + "<br>");
document.writeln("-----------------------<br>");
document.writeln("Total Cost of Item 1: $" + totalCostItem1 + "<br>");
document.writeln("Total Cost of Item 2: $" + totalCostItem2 + "<br>");
document.writeln("Subtotal: $" + subtotal + "<br>");
document.writeln("Total Cost including Shipping Charges: $" + totalCost + "<br><br><br>");

//--------------------Question no:08----------------------------

var totalmarks=500;
var marksobtained=379;
var percentage=(marksobtained/totalmarks)*100;


document.writeln("<h1>MARKSHEET</h1>");
document.writeln("Total marks is: "+totalmarks + "<br>");
document.writeln("Marks Obtained: "+marksobtained + "<br>");
document.writeln( "Your Percentage is: "+percentage + "%<br>");

//--------------------Question no:09----------------------------

var usDollars = 10;
var saudiRiyals = 25;
var exchangeRateUSDToPKR = 104.80;
var exchangeRateSARToPKR = 28.00;
var totalPKR = (usDollars * exchangeRateUSDToPKR) + (saudiRiyals * exchangeRateSARToPKR);
document.writeln("<h1>Currency in PKR</h1>" );
document.writeln("Total Currency in PKR: " + totalPKR + "<br> <br>");

//--------------------Question no:10----------------------------


var numberr=4;
var result= (((numberr+5)*10)/2);
document.writeln("<h1>Perform all calculation in a single expression</h1>");
document.writeln("Result is: " + result + "<br> <br>");

//--------------------Question no:11----------------------------

 
var currentYear=2024;
var birthYear= +prompt("Enter Your Birth Year");
var yourAge=currentYear-birthYear;
document.writeln("<h1>AGE CALCULATOR</h1>");
document.writeln("Your Age is: " + yourAge);


//--------------------Question no:12----------------------------

var radius=10;
var circumference=2*3.142*radius;
document.writeln("<h1>The Geometrizer</h1>")
document.writeln("Circumference of circle is: " + circumference + "<br>");
var area=3.142*radius*radius;
document.writeln("Area of circle is: " + area);

//--------------------Question no:13----------------------------

var favouriteSnakee="Kurkury";
var currentAge=19;
var maxAge=60;
var estimateAmount=3;
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacks = daysRemaining * estimateAmount;
document.writeln("<h1>The life time Supply CAlculator</h1>");
document.writeln("My favourite snack is: "+ favouriteSnakee+"<br>");
document.writeln("My Current age is: "+ currentAge+"<br>");
document.writeln("Maximum age is: "+ maxAge+"<br>");
document.writeln("Amount of  snack per day: "+ estimateAmount+"<br>");
document.writeln("You will need : "+ totalSnacks+" "+  favouriteSnakee+ "  you last to until the ripe old age of "+maxAge+"<br>");

