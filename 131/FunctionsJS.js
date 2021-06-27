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

var operation1 = calc(5,6);
document.write(operation1 + "<br/>");

document.write( "<br/> <br/>" + "------------------------------------------------------" + "<br/>")
document.write( "Try Catch Finally" + "<br/>")
document.write( "------------------------------------------------------" + "<br/> <br/>")