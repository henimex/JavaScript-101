// JavaScript Document

//125-While

document.write("<br/> <br/>" + "------------------------------------------------------" + "<br/>");
document.write("125-While" + "<br/>");
document.write("------------------------------------------------------" + "<br/> <br/>");

var val1 = 10

while(val1 <= 20){
	document.write(val1 + "<br/>");
	val1++;
}

//126-Do While
document.write("<br/> <br/>" + "------------------------------------------------------" + "<br/>");
document.write("126-Do While" + "<br/>");
document.write("------------------------------------------------------" + "<br/> <br/>");


var val2 = 1;
do{
	document.write("Loop Started"+ "<br/>");
	val2+= 3;
	document.write(val2 + "<br/>");
}while(val2 <= 10){
	val2++;
	document.write(val2 + "<br/>");
}

//127-For
document.write("<br/> <br/>" + "------------------------------------------------------" + "<br/>");
document.write("127-For" + "<br/>");
document.write("------------------------------------------------------" + "<br/> <br/>");


for(var i = 0; i<=10; i++){
	document.write(i + "<br/>");
}

document.write("------------------------------------------------------" + "<br/>");

var vals1 = ["Dilek","Ferhat","Esila","Ali Alp"];

for(let data in vals1){
	document.write(vals1[data] + "<br/>");
	if(vals1[data]=="Ferhat"){
		document.write("Hi Boss".italics().small()+ "<br/>");
		continue; //Breaks the line returns to head of code line !!
		break; //Unreachable
	}
	
}
document.write("If you want to break loops u can use break in anywhere anytime.".bold().italics());

//127-Functions
document.write("<br/> <br/>" + "------------------------------------------------------" + "<br/>");
document.write("127-Functions" + "<br/>");
document.write("------------------------------------------------------" + "<br/> <br/>");






















