var myBike={
	brand: "Canyon",
	model: "grand canyon SLX",
	color: "lime",
	equipment: "shimano",
	name: function(){
		return this.brand +" "+ this.model;
	}
}
document.getElementById("bikeDetails").innerHTML = 
	"I have a" + " " + myBike.color + " " + myBike.name() + " " + " equipped with " + myBike.equipment + ".";
function showTime(){
	document.getElementById("time").innerHTML = Date();
}
function changeStyle(){
	document.getElementById("eventTester").style = 
		"background-color: yellow; color: blue; border: 2px grey solid; width: 30%; display: block-inline; margin-top: 5px; padding: 5px;";
}
var str = "I am a mentee at ITutor PHP!";
var arr = str.split(" ");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  text += arr[i] + "<br>"
}
document.getElementById("text").innerHTML = text;