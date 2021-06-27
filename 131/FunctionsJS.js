// JavaScript Document
document.write ("JS File Initialized" + "<br/>")

document.write( "<br/> <br/>" + "------------------------------------------------------" + "<br/>")
document.write( "Functions" + "<br/>")
document.write( "------------------------------------------------------" + "<br/> <br/>")

test("Ferhat" + "<br/>");
document.write(calc(6,4) + "<br/>");


function test(name){
	document.write("Function Test Called" + "<br/>");
	document.write(`Hello ${name}`);
}

function calc(x,y){
	return x+y;
}

var operation1 = calc(51,16);
document.write(operation1 + "<br/>");

document.write( "<br/> <br/>" + "------------------------------------------------------" + "<br/>")
document.write( "Functions Caller" + "<br/>")
document.write( "------------------------------------------------------" + "<br/> <br/>")

pation(21,12);

function pation(num1, num2){
	let result = (calc(num1,num2)*2/100);
	document.write(result);
}

for(let i=0; i<= pation.caller.arguments.length; i++){
	document.write("arguman test");
}


