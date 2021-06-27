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
document.write("CharCodeAt" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valCharCodeAt1 + "<br/>"); 
document.write("Var 2 : " + valCharCodeAt2 + "<br/>");

//97-FormCharCode

var valForm1 = "&#49;&#56;&#56;&#49;"
var valForm2 = String.fromCharCode(49,56,56,49)
	
document.write("<br/> <br/>");
document.write("FormCharCode" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valForm1 + "<br/>");
document.write("Var 2 : " + valForm2 + "<br/>");

//98 - Encode Decode Uri

var valEncode1 = "https://github.com/henimex?Proje/CIS/Index.asp";
var valEncode2 = "https://github.com/henimex?Proje/ÇİŞ/İndex.asp";
var valEncode3 = encodeURI(valEncode2);
var valEncode4 = decodeURI(valEncode3);
var valEncode5 = encodeURIComponent(valEncode1);
var valEncode6 = decodeURIComponent(valEncode5);
	
document.write("<br/> <br/>");
document.write("Encode Decode Uri" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valEncode1 + "<br/>");
document.write("Var 2 : " + valEncode2 + "<br/>");
document.write("Var 3 : " + valEncode3 + "<br/>");
document.write("Var 4 : " + valEncode4 + "<br/>");
document.write("Var 5 : " + valEncode5 + "<br/>");
document.write("Var 6 : " + valEncode6 + "<br/>");

//102-Escape

var valEscape1 = "\\'^+%&/()='";
var valEscape2 = escape(valEscape1);
var valEscape3 = unescape(valEscape2);

document.write("<br/> <br/>");
document.write("Escape" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valEscape1 + "<br/>");
document.write("Var 2 : " + valEscape2 + "<br/>");
document.write("Var 3 : " + valEscape3 + "<br/>");

//107-Locale Lower Upper

var valLocale1 = "ĞÜŞİÇÖ";
var valLocale2 = "üiğşçö";
var valLocale3 = valLocale1.toLocaleLowerCase();
var valLocale4 = valLocale2.toLocaleUpperCase();
var valLocale5 = "To Locale Methods Works From HTML with embeded JavaScript Code. But its not working direct from JS Sourced. TODO://Search JS ToLocale Turkish Char Problem"
	
document.write("<br/> <br/>");
document.write("Locale Lower Upper" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valLocale1 + "<br/>");
document.write("Var 2 : " + valLocale2 + "<br/>");
document.write("Var 3 : " + valLocale3 + "<br/>");
document.write("Var 3 : " + valLocale4 + "<br/>");
document.write("Var 3 : " + valLocale5 + "<br/>");

//108-Sub & Sup

var valSub1 = "H2O";
var valSub2 = valSub1.sub();
var valSub3 = valSub1.charAt(1).sub();
var valSub4 = valSub1.replace(2,valSub3);
var valSub5 = valSub1.replace(2,valSub1.charAt(1).sub());
var valSup1 = "15m2";
var valSup2 = String(valSup1.match(2)); // SUP method must be String !!
var valSup3 = valSup2.sup();
var valSup4 = valSup1.replace(valSup2,valSup3) 

document.write("<br/> <br/>");
document.write("Sub & Sup" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valSub1 + valSub2 + "<br/>");
document.write("Var 2 : " + valSub3 + "<br/>");
document.write("Var 3 : " + valSub4 + "<br/>");
document.write("Var 4 : " + valSub5 + "<br/>");
document.write("Var 5 : " + valSup1 + "<br/>");
document.write("Var 6 : " + valSup2 + "<br/>");
document.write("Var 7 : " + valSup3 + "<br/>");
document.write("Var 8 : " + valSup4 + "<br/>");

//110-Big-Small-Bold-Italic-Strike

var valBigBold1 = "Joseph Henimex";
var valBigBold2 = valBigBold1.small();
var valBigBold3 = valBigBold1.big();
var valBigBold4 = valBigBold1.bold();
var valBigBold5 = valBigBold1.italics();
var valBigBold6 = valBigBold1.strike();
var valBigBold7 = valBigBold1.fixed();
var valBigBold8 = valBigBold3.big();
var valBigBold9 = valBigBold3.big().big().bold().italics();
var valBigBold10 = valBigBold1.big().bold().italics().fontcolor("red");
var valBigBold11 = valBigBold1.big().bold().italics().fontcolor("#FF9900").fontsize(7); //Max Value:7
var valBigBold12 = valBigBold1.big().bold().italics().anchor("Anchor"); //HTML Acces <a name="Anchor"> Naming Area </a>
var valBigBold13 = valBigBold1.big().bold().italics().fontcolor("blue").fontsize(4).link("https://github.com/henimex");

document.write("<br/> <br/>");
document.write("Big-Small-Bold-Italic-Strike" + "<br/>");
document.write("----------------------" + "<br/>");
document.write("Var 1 : " + valBigBold1 + "<br/>");
document.write("Var 2 : " + valBigBold2 + "<br/>");
document.write("Var 3 : " + valBigBold3 + "<br/>");
document.write("Var 4 : " + valBigBold4 + "<br/>");
document.write("Var 5 : " + valBigBold5 + "<br/>");
document.write("Var 6 : " + valBigBold6 + "<br/>");
document.write("Var 7 : " + valBigBold7 + "<br/>");
document.write("Var 8 : " + valBigBold8 + "<br/>");
document.write("Var 9 : " + valBigBold9 + "<br/>");
document.write("Var 10 : " + valBigBold10 + "<br/>");
document.write("Var 11 : " + valBigBold11 + "<br/>");
document.write("Var 12 : " + valBigBold12 + "<br/>");
document.write("Var 13 : " + valBigBold13 + "<br/>");


dsadsa







