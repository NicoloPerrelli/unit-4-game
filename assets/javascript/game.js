
var pictureSlots = [0,1,2,3];
var TrueNumber = 0;
var Racer = 0;

var pictureHolder = [
	{picture: "assets/images/1.jpg", value: 2},
	{picture: "assets/images/2.jpg", value: 3},
	{picture: "assets/images/3.jpg", value: 5},
	{picture: "assets/images/4.jpg", value: 7}
]

function scramble() {
	var ticket = Math.floor(Math.random() * 24) + 1;
	switch (ticket){
		case 1:
			pictureSlots = [0,1,2,3];
			break;
		case 2:
			pictureSlots = [0,1,3,2];
			break;
		case 3:
			pictureSlots = [0,2,1,3];
			break;
		case 4:
			pictureSlots = [0,2,3,1];
			break;
		case 5:
			pictureSlots = [0,3,2,1];
			break;
		case 6:
			pictureSlots = [0,3,1,2];
			break;
		case 7:
			pictureSlots = [1,0,2,3];
			break;
		case 8:
			pictureSlots = [1,0,3,2];
			break;
		case 9:
			pictureSlots = [1,2,0,3];
			break;
		case 10:
			pictureSlots = [1,2,3,0];
			break;
		case 11:
			pictureSlots = [1,3,0,2];
			break;
		case 12:
			pictureSlots = [1,3,2,0];
			break;
		case 13:
			pictureSlots = [2,0,1,3];
			break;
		case 14:
			pictureSlots = [2,0,3,1];
			break;
		case 15:
			pictureSlots = [2,1,0,3];
			break;
		case 16:
			pictureSlots = [2,1,3,0];
			break;
		case 17:
			pictureSlots = [2,3,0,1];
			break;
		case 18:
			pictureSlots = [2,3,1,0];
			break;
		case 19:
			pictureSlots = [3,0,1,2];
			break;
		case 20:
			pictureSlots = [3,0,2,1];
			break;
		case 21:
			pictureSlots = [3,1,0,2];
			break;
		case 22:
			pictureSlots = [3,1,2,0];
			break;
		case 23:
			pictureSlots = [3,2,0,1];
			break;
		case 24:
			pictureSlots = [3,2,1,0];
			break;
	}
	setGems();
	newNumber();
}

function makeButton(stuff) {
	var btn = document.createElement("BUTTON");
	btn.innerHTML = '<img src="'+(stuff).picture+'" />';
	btn.value = (stuff).value;
	btn.addEventListener("click", function() {addGem(stuff.value)})
	return btn;
}

function setGems() {
	for (var i = 0; i < 4; i++) {
		var btn = makeButton(pictureHolder[pictureSlots[i]])
		$("#CystalBox").append(btn);
	}
}

function newNumber() {
	Racer = 0;
	$("#Racer").html("Curent Number: " + Racer);
	TrueNumber = Math.floor(Math.random() * 85) + 25;
	$("#TrueNumber").html("Number to Reach: " + TrueNumber);
}

function addGem(asdf) {
	Racer += asdf;
	$("#Racer").html("Curent Number: " + Racer);
	checkWL();
}

function checkWL() {
	if(Racer == TrueNumber){
		alert("You Win");
		$("#CystalBox").empty();
		scramble();
		newNumber()
	}
	else if (Racer > TrueNumber){
		alert("BUST You Lost")
		$("#CystalBox").empty();
		scramble();
		newNumber()
	}
}

$("#newGameButton").on("click", function() {
	$("#CystalBox").empty();
	scramble();
});

scramble();
