function reset(){
	document.getElementById('reset_button').click();
}
// declare variables that count the numbers of push buttons for every person
var BobClick = 0;
var JhonClick = 0;
var MikeClick = 0;
var persons = ["Sarah", "Nicole", "Mary", "Sophye"];
personsLength = persons.length;
text = "";
separator = "";
// showing the array with "," betwen the elements and "." at the end
for (i = 0; i < personsLength; i++) {
	if (i == personsLength-1) {
		separator = ".";
	}else {
		separator = ",";
	}
	text +=" " + persons[i] + separator;
}
document.getElementById("arrayContent").innerHTML = text;
function asc(){
	// sort the array ascending and showing it in html page
	persons.sort();
	personsLength = persons.length;
	text = "";
	separator = "";
	for (i = 0; i < personsLength; i++) {
		if (i == personsLength-1) {
			separator = ".";
		}else {
			separator = ",";
		}
	text +=" " + persons[i] + separator;
	}
	document.getElementById("arrayContent").innerHTML = text;
}
function desc(){
	// sort the array descending and showing it in html page
	persons.reverse();
	personsLength = persons.length;
	text = "";
	separator = "";
	for (i = 0; i < personsLength; i++) {
		if (i == personsLength-1) {
			separator = ".";
		}else {
			separator = ",";
		}
	text +=" " + persons[i] + separator;
	}
	document.getElementById("arrayContent").innerHTML = text;
}
function pushBob(){
	// add element Bob in array and showing the array in the html page
	persons.push("Bob");
	personsLength = persons.length;
	// creating a new message
	text = '<span class="label">the new array is: </span>';
	separator = "";
	for (j = 0; j < personsLength; j++) {
		if (j == personsLength-1) {
			separator = ".";
		}else {
			separator = ",";
		}
	text +=" " + persons[j] + separator;
	}
	text += "<br/>the array have " + personsLength + " elements!";
	document.getElementById("arrayBob").innerHTML = text;
	// incremeting by 1 every click Bob button 
	BobClick ++;
	// after clicking Bob push button making visibile pop Bob button
	document.getElementById("popBob").style.display = "inline";
}
function pushJhon(){
	// add element Jhon in array and showing the array in the html page
	persons.push("Jhon");
	personsLength = persons.length;
	text = '<span class="label">the new array is: </span>';
	separator = "";
	for (j = 0; j < personsLength; j++) {
		if (j == personsLength-1) {
			separator = ".";
		}else {
			separator = ",";
		}
	text +=" " + persons[j] + separator;
	}
	text += "<br/>the array have " + personsLength + " elements!";
	document.getElementById("arrayJhon").innerHTML = text;
	// incremeting by 1 every click Jhon button
	JhonClick ++;
	// after clicking Jhon push button making visibile pop Jhon button
	document.getElementById("popJhon").style.display = "inline";
}
function pushMike(){
	// add element Mike in array and showing the array in the html page
	persons.push("Mike");
	personsLength = persons.length;
	text = '<span class="label">the new array is: </span>';
	separator = "";
	for (j = 0; j < personsLength; j++) {
		if (j == personsLength-1) {
			separator = ".";
		}else {
			separator = ",";
		}
	text +=" " + persons[j] + separator;
	}
	text += "<br/>the array have " + personsLength + " elements!";
	document.getElementById("arrayMike").innerHTML = text;
	// incremeting by 1 every click Mike button
	MikeClick ++;
	// after clicking Mike push button making visibile pop Mike button
	document.getElementById("popMike").style.display = "inline";
}
function popBob(){
	// pop up Bob from array
	persons.pop();	
	// every time the pop Bob pop button is clicked the click times for Bob is decremented by 1
	BobClick --;
	personsLength = persons.length;
	text = '<span class="label">the new array is: </span>';
	separator = "";
	for (j = 0; j < personsLength; j++) {
		if (j == personsLength-1) {
			separator = ".";
		}else {
			separator = ",";
		}
	text +=" " + persons[j] + separator;
	}
	text += "<br/>the array have " + personsLength + " elements!";
	document.getElementById("arrayBob").innerHTML = text;
	// the click numbers is checked, if is 0 means the Bob was pop it out from array entirely and the pop Bob button is made invisible
	//  else the button pop Bob remains visible
	if (BobClick == 0 ){
		document.getElementById("popBob").style.display = "none";	
	}else {
		document.getElementById("popBob").style.display = "inline";
	}	
}
function popJhon(){
	// remove Jhon from array
	persons.pop();
	// every time the pop Jhon pop button is clicked the click times for Jhon is decremented by 1
	JhonClick --;
	personsLength = persons.length;
	text = '<span class="label">the new array is: </span>';
	separator = "";
	for (j = 0; j < personsLength; j++) {
		if (j == personsLength-1) {
			separator = ".";
		}else {
			separator = ",";
		}
	text +=" " + persons[j] + separator;
	}
	text += "<br/>the array have " + personsLength + " elements!";
	document.getElementById("arrayJhon").innerHTML = text;
	// the click numbers is checked, if is 0 means the Jhon was pop it out from array entirely and the pop Jhon button is made invisible
	//  else the button pop Jhon remains visible
	if (JhonClick == 0) {
		document.getElementById("popJhon").style.display = "none";
	}else{
		document.getElementById("popJhon").style.display = "inline";
	}
	
}
function popMike(){
	// remove Mike from arrray
	persons.pop();
	// every time the pop Mike pop button is clicked the click times for Mike is decremented by 1
	MikeClick --;
	personsLength = persons.length;
	text = '<span class="label">the new array is: </span>';
	separator = "";
	for (j = 0; j < personsLength; j++) {
		if (j == personsLength-1) {
			separator = ".";
		}else {
			separator = ",";
		}
	text +=" " + persons[j] + separator;
	}
	text += "<br/>the array have " + personsLength + " elements!";
	document.getElementById("arrayMike").innerHTML = text;
	// the click numbers is checked, if is 0 means the Mike was pop it out from array entirely and the pop Mike button is made invisible
	//  else the button pop Mike remains visible
	if (MikeClick == 0) {
		document.getElementById("popMike").style.display = "none";
	}else{
		document.getElementById("popMike").style.display = "inline";
	}
	
}