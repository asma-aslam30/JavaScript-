//  ======================Questio no# 01============================

var studentsName=[]
console.log(studentsName);
//  ======================Questio no# 02============================


var studentsName={}
console.log(studentsName);
//  ======================Questio no# 03============================

var stringArray=["Asma","daniyal","kubra"];
console.log(stringArray);
//  ======================Questio no# 04============================

var numberArray=[1,2,3,4,5];
console.log(numberArray);
//  ======================Questio no# 05============================

var booleanArray=[true,false,true,false,true];
console.log(booleanArray);
//  ======================Questio no# 06============================

var mixedArray=[1,"Asma",true,90,80];
console.log(mixedArray);

//  ======================Questio no# 07============================

var educationQualifications=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
console.log(educationQualifications);

//  ======================Questio no# 08============================
var studentsMarks=["Asma","daniyal","kubra"];
var scorenumber=[400,360,399];
var totalMarks=500;
for(var i=0;i<studentsMarks.length;i++){
    var percentage=(scorenumber[i]/totalMarks)*100;
    console.log("Student Name: "+studentsMarks[i]+" Score: "+scorenumber[i]+" Percentage"+percentage+"%");
        }

//  ======================Questio no# 09============================
var colorNames=["red","yellow","green","purple","brown","pink"];
document.write(colorNames +"<br><br>");

let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colorNames.unshift(colorToAddBeginning);
document.write(colorNames +"<br><br>");
var multiplecolorbeginning=prompt("Enter multiple color you want to add")
// document.write("<h2>After Adding Color to the Beginning:</h2>");
document.write(colorNames.join(", ") + "<br><br>");

document.write("<h2>After delete Color to the beginning:</h2>");
colorNames.shift(colorNames);
document.write(colorNames +"<br><br>");

document.write("<h2>After delete Color to the end:</h2>");
colorNames.pop(colorNames);
document.write(colorNames +"<br><br>");

let colorArray = ["Red", "Green", "Blue", "Yellow"];

document.write("<h2>Initial Color Array:</h2>");
document.write(colorArray.join(", ") + "<br><br>");

let addIndex = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAddAtIndex = prompt("Enter the color name to add at index " + addIndex + ":");
colorArray.splice(addIndex, 0, colorToAddAtIndex);
document.write("<h2>After Adding Color at Index " + addIndex + ":</h2>");
document.write(colorArray.join(", ") + "<br><br>");

let deleteIndex = parseInt(prompt("Enter the index from where you want to delete color(s):"));
let deleteCount = parseInt(prompt("Enter the number of colors you want to delete:"));
colorArray.splice(deleteIndex, deleteCount);
document.write("<h2>After Deleting " + deleteCount + " Color(s) from Index " + deleteIndex + ":</h2>");
document.write(colorArray.join(", ") + "<br><br>");

//  ======================Questio no# 10============================

var studentScores=[90,85,95,80,92];
document.write(studentScores.sort());
//  ======================Questio no# 11============================
 
var  cityName=["karachi","quetta","balochistan","islamabad","punjab","lahore","peshawar"]
document.write(cityName.slice(2,6)+"<br><br>");
//  ======================Questio no# 12============================
 
var stringN=["This","is","my","cat"]
document.write(stringN +"<br><br>");

var result=stringN.join(" ");
document.write(result+"<br><br>");
//  ======================Questio no# 13============================
//  ======================Questio no# 14============================
//  ======================Questio no# 15============================
 
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>');
for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}
document.write('</select>');

