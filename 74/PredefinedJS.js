//
		document.write("Slice & Substring & Substr & Concat & Repeat & ToString & String" + "<br/>")
		
		//Slice
		var name = "Joseph HenimeX github adress is : https://github.com/henimex";
		var newOne = name.slice(0,6);
		var newTwo = name.slice(7,14);
		var newThree = name.slice(34);
		var newFour = name.slice(25,9); //Slice hata verir
		
		document.write("<br/>" + "Slice" + "<br/>");
		document.write("----------------------" + "<br/>");
		document.write("Info 0 : " + name + "<br/>");
		document.write("Info 1 : " + newOne + "<br/>");
		document.write("Info 2 : " + newTwo + "<br/>");
		document.write("Info 3 : " + newThree + "<br/>");
		document.write("Info 4 : " + newFour + "<br/>");
		
		//Substring
		
		var nameSubbed1 = name.substring(0,6);
		var nameSubbed2 = name.substring(7,14); // 7 den basla 14. ü karaktere kadar al
		var nameSubbed3 = name.substring(34);
		var nameSubbed4 = name.substring(25,9); //Substring 9,25 olarak algılar yazdırır
		
		document.write("<br/>" + "Substring" + "<br/>");
		document.write("----------------------" + "<br/>");
		document.write("Info 0 : " + name + "<br/>");
		document.write("Info 1 : " + nameSubbed1 + "<br/>");
		document.write("Info 2 : " + nameSubbed2 + "<br/>");
		document.write("Info 3 : " + nameSubbed3 + "<br/>");
		document.write("Info 4 : " + nameSubbed4 + "<br/>");
		
		//Substr
		
		var nameSubStr1 = name.substr(0,6);
		var nameSubStr2 = name.substr(7,14); //7 den basla 14 karakter al
		var nameSubStr3 = name.substr(34);
		var nameSubStr4 = name.substr(25,9); 
		var nameSubStr5 = name.substr(-18,10); //Tersten sayma özellgi -18. karkatere gel 10 karakterini oku
		
		document.write("<br/>" + "Substr **" + "<br/>");
		document.write("----------------------" + "<br/>");
		document.write("Info 0 : " + name + "<br/>");
		document.write("Info 1 : " + nameSubStr1 + "<br/>");
		document.write("Info 2 : " + nameSubStr2 + "<br/>");
		document.write("Info 3 : " + nameSubStr3 + "<br/>");
		document.write("Info 4 : " + nameSubStr4 + "<br/>");
		document.write("Info 5 : " + nameSubStr5 + "<br/>");
		
		//Concat
		
		var randomString = nameSubStr1.concat(nameSubStr2, nameSubStr3, nameSubStr4, nameSubStr5) //adding sliced stripped subtracted values into one
		
		document.write("<br/>" + "Concat" + "<br/>");
		document.write("----------------------" + "<br/>");
		document.write("Concat : " + randomString + "<br/>"); 
		
		//Repeat
		
		var nameRepeat = newTwo.repeat(20)
		
		document.write("<br/>" + "Repeat" + "<br/>");
		document.write("----------------------" + "<br/>");
		document.write("Repeat : " + nameRepeat + "<br/>"); 
		
		//ToString
		
		var value1 = 5;
		var value2 = value1.toString();

		document.write("<br/>" + "ToString" + "<br/>");
		document.write("----------------------" + "<br/>");
		document.write("ToString V1 : " + value1 + "<br/>"); 
		document.write("ToString V2 : " + value2 + "<br/>"); 
		document.write("Value 1 Type : " + typeof value1 + "<br/>"); 
		document.write("Value 2 Type : " + typeof value2 + "<br/>"); 
		
		//String
		
		var strValue1 = Boolean(0);
		var strValue2 = Boolean(1);
		var strValue3 = 10;
		var strValue4 = 10.44;
		var strValue5 = ["Lorem", "Ipsum"];
		var strValue6 = new Date();
				

		document.write("<br/>" + "String" + "<br/>");
		document.write("----------------------" + "<br/>");
		document.write("Value 1 / Type : " + strValue1 + " " + typeof strValue1 + "<br/>"); 
		document.write("Value 2 / Type : " + strValue2 + " " + typeof strValue2 + "<br/>"); 
		document.write("Value 3 / Type : " + strValue3 + " " + typeof strValue3 + "<br/>"); 
		document.write("Value 4 / Type : " + strValue4 + " " + typeof strValue4 + "<br/>"); 
		document.write("Value 5 / Type : " + strValue5 + " " + typeof strValue5 + "<br/>"); 
		document.write("Value 6 / Type : " + strValue6 + " " + typeof strValue6 + "<br/>"); 
		
		var convertedStrValue1 = String(strValue1);
		var convertedStrValue2 = String(strValue2);
		var convertedStrValue3 = String(strValue3);
		var convertedStrValue4 = String(strValue4);
		var convertedStrValue5 = String(strValue5);
		var convertedStrValue6 = String(strValue6);
		
		document.write("----------------------" + "<br/>");
		document.write("Value 1 / Type : " + convertedStrValue1 + " " + typeof convertedStrValue1 + "<br/>"); 
		document.write("Value 2 / Type : " + convertedStrValue2 + " " + typeof convertedStrValue2 + "<br/>"); 
		document.write("Value 3 / Type : " + convertedStrValue3 + " " + typeof convertedStrValue3 + "<br/>"); 
		document.write("Value 4 / Type : " + convertedStrValue4 + " " + typeof convertedStrValue4 + "<br/>"); 
		document.write("Value 5 / Type : " + convertedStrValue5 + " " + typeof convertedStrValue5 + "<br/>"); 
		document.write("Value 6 / Type : " + convertedStrValue6 + " " + typeof convertedStrValue6 + "<br/>"); 