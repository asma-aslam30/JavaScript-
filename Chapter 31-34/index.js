// =========================Question no# 01==================================
var date = new Date();
document.write(date);
document.write("<br>");

// =========================Question no# 02==================================

var date = new Date();
var month = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

var currentMonth = date.getMonth();
document.write(month[currentMonth]);
document.write("<br>");

// =========================Question no# 03==================================
var today = date.getDay();
var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
document.write(days[today]);
document.write("<br>");
// =========================Question no# 04==================================
if (days === "sun" || "sat") {
  document.write("It's Funday");
}
document.write("<br>");
// =========================Question no# 05==================================
var dates = date.getDate();
if (dates <= 15) {
  document.write("First Fifteen dyas of the month");
} else {
  document.write("Last days of the month");
}
document.write("<br>");
// =========================Question no# 06==================================
document.write("Current Date:" + date);
document.write("<br>");
document.write("Elapased millisecond since january 1,1970:" + date.getTime());
document.write("<br>");
document.write(
  "Elapased minutes since january 1,1970:" + date.getTime() / 6000000
);
document.write("<br>");
// =========================Question no# 07==================================
var date = new Date();
var currenthour = date.getHours();
if (currenthour > 11) {
  document.write("It's PM");
} else {
  document.write("It's AM");
}
document.write("<br>");
// =========================Question no# 08==================================

document.write("<br>");
var date = new Date("thursday december 31,2020");
document.write(date);
document.write("<br>");
// =========================Question no# 09==================================
var ramadanStartDate = new Date(2025, 1, 28);
var currentDate = new Date();
var differenceInMilliseconds = currentDate - ramadanStartDate;
var millisecondsInADay = 1000 * 60 * 60 * 24;
var differenceInDays = Math.floor(
  differenceInMilliseconds / millisecondsInADay
);
document.write(differenceInDays + "days have passed since 1st ramazan 2025");
document.write("<br>");
// =========================Question no# 10==================================
var referenceDate = new Date(); // Use any specific date by replacing new Date() with new Date(year, month, day)
var startOf2025 = new Date(2025, 0, 1); // January 1, 2025 (month is 0-based index, so 0 is January)
var differenceInMilliseconds = startOf2025 - referenceDate;
var differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
document.write(
  "Seconds elapsed between the reference date and the beginning of 2025: " +
    differenceInSeconds
);
document.write("<br>");
// =========================Question no# 11==================================
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Updated Date and Time: " + currentDate);
document.write("<br>");
// =========================Question no# 12==================================
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
document.write("The date 100 years back was: " + currentDate);
document.write("<br>");
// =========================Question no# 13==================================

var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("You were born in the year: " + birthYear);
document.write("<br>");
// =========================Question no# 14==================================
var customerName = "John Doe";
var numberOfUnits = 350;
var chargesPerUnit = 15.75;
var latePaymentSurcharge = 250;

// Calculate the current month
var currentDate = new Date();
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var currentMonth = monthNames[currentDate.getMonth()];
var netAmountPayable = numberOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);
document.write("Customer Name:"+customerName)
document.write("<br>");
document.write("Month:"+currentMonth)
document.write("<br>");
document.write("charge perunit:"+chargesPerUnit)
document.write("<br>");
document.write("Net amount payable(before due date):"+netAmountPayable);
document.write("<br>");
document.write("Late payment recharge:"+latePaymentSurcharge)
document.write("<br>");
document.write("Gross amount payment (After due date):"+grossAmountPayable);
document.write("<br>");
