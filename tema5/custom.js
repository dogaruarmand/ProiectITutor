function changeFrameStatus() {  
	document.getElementById('frame').style.display = 'block';
}
function showName(){
	var name = "Dogaru Armand";
	document.getElementById('nameParagraph').innerHTML = name;
}
// multiplication 
	var amul = 202;
	var bmul = 10;
	var xmul = amul * bmul;
	document.getElementById('mutiplication').innerHTML = xmul;	
	// sum
	var asum = 202;
	var bsum = 10;
	var xsum = asum + bsum;
	document.getElementById('sum').innerHTML = xsum;
	// division
	var adiv = 202;
	var bdiv = 10;
	var xdiv = adiv / bdiv;
	document.getElementById('division').innerHTML = xdiv;
	// concatenate strings
	var string1 = "Hello";
	var string2 = "World";
	var string3 = "!";
	document.getElementById('concatenateStrings').innerHTML = string1 + " " + string2 + string3;
	// concatenate digit and letter	
	var result = 5 + "a";
	document.getElementById('digitLetter').innerHTML = result;
	// concatenate letter and digit	
	var result2 = "a" + 5;
	document.getElementById('letterDigit').innerHTML = result2;
	// add digit, digit and letter
	var result3 = 5 + 3 + "abc";
	document.getElementById('digitDigitLetter').innerHTML = result3;

	document.innerHTML = "test";