// JavaScript Document

//120-If Else Else If

var val1 = 40;
var val2 = 60;
var val3 = 24;

document.write( "<br/>" + "------------------------------------------------------" + "<br/>")
document.write( "If Else Condistions" + "<br/>")
document.write( "------------------------------------------------------" + "<br/> <br/>")

if (val1 > val2){
	let result = `Condition A1: 1.  Deger ${val1} Buyuktur 2. Degerden ${val2}`;
	document.write("<br/>" + result.bold().big().fontcolor("red"));
} else if (val1 > val3){
	let result = `Condition A2: 1.  Deger ${val1} Buyuktur 3. Degerden ${val3}`;
	document.write("<br/>" + result.bold().fontsize(3).fontcolor("brown"));
} else {
	let result =`Condition A3: 1. Deger ${val1} hepsinden kucuktur Deger 2: ${val2} Deger 3: ${val3}`;
	document.write("<br/>" + result.bold().fontcolor("gray").small());
}

if (val1 > val2 && val1 > val3){
	let result = `Condition B1: 1.  Deger ${val1} Buyuktur 2. ve 3. Degerden ${val2} ${val3}`;
	document.write("<br/>" + result.bold().big().fontcolor("red"));
} else if (val2 > val3 && val2 > val1){
	let result = `Condition B2: 2.  Deger ${val2} Buyuktur 1. ve 3. Degerden ${val1} ${val3}`;
	document.write("<br/>" + result.bold().fontsize(3).fontcolor("brown"));
} else {
	let result =`Condition B3: 1. Deger ${val3} hepsinden buyuktur. Deger 1: ${val1} Deger 2: ${val2}`;
	document.write("<br/>" + result.bold().fontcolor("gray").small());
}

//122-Switch, Case, Default
document.write( "<br/> <br/>" + "------------------------------------------------------" + "<br/>")
document.write( "Switch, Case, Default" + "<br/>")
document.write( "------------------------------------------------------" + "<br/> <br/>")


