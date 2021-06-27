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

var val4 = 61;

switch(val4){
	case 10:
	document.write(`${val4} is not enough to continue You have failed`.fontsize(5).fontcolor("red").bold().fixed());
	break;
	case 20:
	document.write(`${val4} is not enough to continue You have failed`.fontsize(5).fontcolor("red").bold().fixed());
	break;
	case 30:
	document.write(`${val4} is not enough to continue You have failed`.fontsize(5).fontcolor("red").bold().fixed());
	break;
	case 40:
	document.write(`${val4} is not enough to continue You have failed`.fontsize(5).fontcolor("red").bold().fixed());
	break;
	case 50:
	document.write(`${val4} is not enough to continue You have failed`.fontsize(5).fontcolor("red").bold().fixed());
	break;
	case 60:
	document.write(`${val4} is enough to continue. Welcome`.fontsize(5).fontcolor("green").bold().fixed());
	break;
	case 70:
	document.write(`${val4} is enough to continue. Welcome`.fontsize(5).fontcolor("green").bold().fixed());
	break;
	case 80:
	document.write(`${val4} is enough to continue. Welcome`.fontsize(5).fontcolor("green").bold().fixed());
	break;
	case 90:
	document.write(`${val4} is enough to continue. Welcome`.fontsize(5).fontcolor("green").bold().fixed());
	break;
	case 100:
	document.write(`${val4} is enough to continue. Welcome`.fontsize(5).fontcolor("green").bold().fixed());
	break;
	default:
	document.write(`${val4} is not in correct format Type 10x of your point`.fontsize(5).fontcolor("blue").bold().fixed());	
}

//123-Ternary

document.write( "<br/> <br/>" + "------------------------------------------------------" + "<br/>")
document.write( "Ternary" + "<br/>")
document.write( "------------------------------------------------------" + "<br/> <br/>")

var val5 = 36;
var val6 = 26;

var result1 = val5 < val6 ? "First Val is Smaller" : "First Val is Bigger";
document.write(result1);

//124-Try Catch Finally

document.write( "<br/> <br/>" + "------------------------------------------------------" + "<br/>")
document.write( "Try Catch Finally" + "<br/>")
document.write( "------------------------------------------------------" + "<br/> <br/>")

var val7 = 7;

try{
	document.write("Value A is" + val7 + "<br/>");
	document.write("Value B is" + val8 + "<br/>");
}catch(err){
	document.write("Error Name : " + err.name.fixed().fontcolor("red").big().bold() + "<br/>");
	document.write("Error Message : " + err.message.fixed().fontcolor("red").big() + "<br/>");
}finally{
	document.write("Process Ended.".fixed().fontcolor("green").big().bold() + "<br/>");
}


//
var val111 = 10;
while(val111 >= 20){
	document.write("while icinde");
	document.write(val111 + "<br/>");
	val111++;
	document.write("while sonunda");
}