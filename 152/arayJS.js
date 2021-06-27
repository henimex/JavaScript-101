// JavaScript Document

document.write("<br/> <br/>" + "------------------------------------------------------" + "<br/>")
document.write("Array" + "<br/>")
document.write("------------------------------------------------------" + "<br/> <br/>")

var names = ["Ferhat" , "Dilek", "Esila" , "Ali Alp" , "Mustafa" , "Bahriye" , "Kemal" , "Hulya"];
document.write(names + "<br/> <br/>")


document.write("List of Names".bold().big().fixed() + "<br/>")
for(let data in names){
	document.write(names[data].fixed() + "<br/>")
}

document.write("Random Name".bold().big().fixed() + " : " + names[2] + "<br/>")