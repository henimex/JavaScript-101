//JS Document

//91-Match
var valMatch1 = "Joseph HenimeX Github adress is : https://github.com/henimex";
var valMatch2 = valMatch1.match(/github/gi);
var valMatch3 = "Match returns all values of matched string with g tag";
var valMatch4 = valMatch1.match("Github");
var valMatch5 = "g: complate search on text i: ignores case sensitive"

document.write("<br/> <br/>");
document.write("Match" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valMatch1 + "<br/>"); 
document.write("Var 2 : " + valMatch2 + "<br/>");
document.write("Var 3 : " + valMatch3 + "<br/>");
document.write("Var 4 : " + valMatch4 + "<br/>");
document.write("Var 5 : " + valMatch5 + "<br/>");

//92-Replace

var valReplace1 = "Joseph HenimeX Github adress is : https://github.com/henimex";
var valReplace2 = valReplace1.replace("Joseph HenimeX", "J.Henimex");
var valReplace3 = valReplace1.replace("https://github.com/henimex", "CONFIDENTIAL");

document.write("<br/> <br/>");
document.write("Replace" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valReplace1 + "<br/>"); 
document.write("Var 2 : " + valReplace2 + "<br/>");
document.write("Var 3 : " + valReplace3 + "<br/>");
document.write("Var 4 : " + valReplace1 + "<br/>");
document.write("Var 5 : " + valReplace1 + "<br/>");

//93-Split

var valSplit1 = "Joseph HenimeX Github adress is : https://github.com/henimex";
var valSplit2 = valSplit1.split("");
var valSplit3 = valSplit1.split(" ",7); // 7= limit
var valSplit4 = valSplit1.split("s");
var valSplit5 = "Converts String to an array and could be usable as an array member with [x]";
var valSplit6 = valSplit3[1]


document.write("<br/> <br/>");
document.write("Split" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valSplit1 + "<br/>"); 
document.write("Var 2 : " + valSplit2 + "<br/>");
document.write("Var 3 : " + valSplit3 + "<br/>");
document.write("Var 4 : " + valSplit4 + "<br/>");
document.write("Var 5 : " + valSplit5 + "<br/>");
document.write("Var 6 : " + valSplit6 + "<br/>");

//94-LocaleCompare

var valLocaleCompare1 = "Joseph HenimeX Github adress is : https://github.com/henimex";
var valLocaleCompare2 = valLocaleCompare1.localeCompare("HenimeX");
var valLocaleCompare3 = valLocaleCompare1.localeCompare("testr");
var valLocaleCompare4 = "iki icerik karsilastirilarak unicode ları alinir eger icerik degeri once ise -1 sonra ise 1 esit ise 0 gelir"; 
var valLocaleCompare5 = valLocaleCompare1.localeCompare("Joseph HenimeX Github adress is : https://github.com/henimex");
var valLocaleCompare6; 


document.write("<br/> <br/>");
document.write("LocaleCompare" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valLocaleCompare1 + "<br/>"); 
document.write("Var 2 : " + valLocaleCompare2 + "<br/>");
document.write("Var 3 : " + valLocaleCompare3 + "<br/>");
document.write("Var 4 : " + valLocaleCompare4 + "<br/>");
document.write("Var 5 : " + valLocaleCompare5 + "<br/>");
document.write("Var 6 : " + valLocaleCompare6 + "<br/>");

//95-CharAt

var valCharAt1 = "Joseph HenimeX Github adress is : https://github.com/henimex";
var valCharAt2 = valCharAt1.charAt(13);

document.write("<br/> <br/>");
document.write("CharAt" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valCharAt1 + "<br/>"); 
document.write("Var 2 : " + valCharAt2 + "<br/>");

//96-CharCodeAt

var valCharCodeAt1 = "Joseph HenimeX Github adress is : https://github.com/henimex";
var valCharCodeAt2 = valCharCodeAt1.charCodeAt(13);

document.write("<br/> <br/>");
document.write("CharAt" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valCharCodeAt1 + "<br/>"); 
document.write("Var 2 : " + valCharCodeAt2 + "<br/>");



























