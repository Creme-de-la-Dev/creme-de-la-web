//
// variables.js
// The JS for setting all variables prior to launch
//
// Last updated - 12/08/2015

/**
 * @file File housing all the variables, plus the reset function
 * @author Sam Lynch
 * @version 1.0.0
 * @copyright (c) 2015 Amduat Games
 */

debuglog("Initializing variables.js...");

/** @constant
		@type {int}
*/
var VERSION = 30;

var sineanimationtest;
var mainmenuanimInterval1;
var mainmenuanimInterval2;
var timer;
var night;
var difficulty20202020 = false;

// this array defines how close each room is to the office
// lower = closer
var roomClosenessBunny = [{ name: "office" },
{ name: "2b" },
{ name: "3" },
{ name: "2a" },
{ name: "5" },
{ name: "1b" },
{ name: "1a" }
];
var roomClosenessChica = [{ name: "office" },
{ name: "4b" },
{ name: "4a" },
{ name: "6" },
{ name: "7" },
{ name: "1b" },
{ name: "1a" }
];
var roomClosenessFreddy = [{ name: "office" },
{ name: "4b" },
{ name: "4a" },
{ name: "6" },
{ name: "7" },
{ name: "1b" },
{ name: "1a" }
];
var bunnytimer = 0;
var chicatimer = 0;
var freddytimer = 0;
var freddyanimationgameover = [];
var freddyofficeanimationgameover = [];
var bonnyanimationgameover = [];
var chicaanimationgameover = [];
var currentBunnyRoomArray = 4;

var baseFoxyTime = 50;  // Start high, will decrease with difficulty
var baseBonnyTime = 5;
var baseChicaTime = 5;
var baseFreddyTime = 5;
var foxydifficulty;
var bunnydifficulty;
var chicadifficulty;
var freddydifficulty;
var foxydifficultyarray = [];
var bunnydifficultyarray = [];
var chicadifficultyarray = [];
var freddydifficultyarray = [];

var bunnyChanceToMoveCloser = [];
var baseBunnyChanceToMoveCloser = 10;
var chicaChanceToMoveCloser = [];
var baseChicaChanceToMoveCloser = 10;
var freddyChanceToMoveCloser = [];
var baseFreddyChanceToMoveCloser = 10;
bunnyChanceToMoveCloser[1] = baseBunnyChanceToMoveCloser;
chicaChanceToMoveCloser[1] = baseChicaChanceToMoveCloser;
freddyChanceToMoveCloser[1] = baseFreddyChanceToMoveCloser;

for (x = 1; x <= 20; x++) {
	foxydifficultyarray[x] = (baseFoxyTime -= 2)
};
baseFoxyTime = 12; // Reset for next loop
for (x = 20; x >= 1; x--) {
	bunnydifficultyarray[x] = (baseBonnyTime += 2) //formerly 3 
};
for (x = 20; x >= 1; x--) {
	chicadifficultyarray[x] = (baseChicaTime += 2) //formerly 4 
};
for (x = 20; x >= 1; x--) {
	freddydifficultyarray[x] = (baseFreddyTime += 2) //formerly 4
};
for (x = 2; x <= 20; x++) {
	bunnyChanceToMoveCloser[x] = (baseBunnyChanceToMoveCloser += 4.5)
};
for (x = 2; x <= 20; x++) {
	chicaChanceToMoveCloser[x] = (baseChicaChanceToMoveCloser += 4.5)
};

var mainThreadID;
var play2aanimation = false;
var storedselectedroom;

var animatronicStates = [{ name: "Chica", currentRoom: "1a", state: 0, currentRoomArray: 6 },
{ name: "Bonnie", currentRoom: "1a", state: 0, currentRoomArray: 6 },
{ name: "Freddy", currentRoom: "1a", state: 0, currentRoomArray: 6 },
{ name: "Foxxy", currentRoom: "1c", state: 0, currentRoomArray: 2 }
];

var poweroutimg = [];
var MAINBODY = $("#mainbody");
var mainmenu = $("#mainmenu");
var amduatlogo = $("#amduatlogo");
var mainmenufazbearanimdiv = $("#mainmenufazbearanim");
var roomdiv = $("#room");
var staticdiv = $("#static");
var staticimgdiv = document.getElementById("staticimg");
var mainmenustaticimgdiv = document.getElementById("mainmenustaticimg");
var recorddiv = $("#record");
var doorleftdiv = $("#doorleft");
var doorrightdiv = $("#doorright");
var doorbuttonsleftdiv = $("#doorbuttonsleft");
var doorbuttonsrightdiv = $("#doorbuttonsright");
var doorbuttonsleft_lightdiv = $("#doorbuttonsleft_light");
var doorbuttonsleft_doordiv = $("#doorbuttonsleft_door");
var doorbuttonsright_doordiv = $("#doorbuttonsright_door");
var doorbuttonsright_lightdiv = $("#doorbuttonsright_light");
var camerafeeddiv = $("#camerafeed");
var nightover5div = $("#nightover5");
var nightover6div = $("#nightover6");
//var officediv = $("#office");
var officemaindiv = $("#officemain");

var windowwidth = $(document).width();
window.onresize = function (event) {
	windowwidth = $(document).width();
};

var transitionimages = [];

var fandiv = $("#fan");
var officecamerarightdiv = $("#officecameraright");
var officecameraleftdiv = $("#officecameraleft");
var numberonediv = $("#numberone");
var numbertwodiv = $("#numbertwo");
var numberthreediv = $("#numberthree");
var timehourdiv = $("#timehour");
var timehourextradiv = $("#timehourextra");
var powerusagediv = $("#powerusage");
var camerafeedanimationdiv = $("#camerafeedanimation");
var transitiondiv = document.getElementById("transistionanimation");
var officeX = 0
var officeXInterval;
var officeXOtherInterval;
var leftdooropen = false; // These two variables are actually "false = open"
var rightdooropen = false; // and "true = closed/locked"
var leftlighton = false;
var rightlighton = false;
var yArray = ["left", "right"];

var camerafeedanimationimage = [];
var doorleftanim = [];
var doorrightanim = [];
var powerusageimage = [];
var powerusagenumbersimage = [];
var timehourimage = [];
var room2aimage = [];
var room2afoxxyanim = [];
var mainmenufazbear = [];
var foxxyofficeanim = [];
var foxxyofficeanimtimeout = [];
var roomnameimages = [];

var officelightstates = [];
var officestates = [];
var buttonleftstates = [];
var buttonrightstates = [];

var button1adiv = $("#button-1a");
var button1bdiv = $("#button-1b");
var button1cdiv = $("#button-1c");
var button2adiv = $("#button-2a");
var button2bdiv = $("#button-2b");
var button5div = $("#button-5");
var button7div = $("#button-7");
var button3div = $("#button-3");
var button4adiv = $("#button-4a");
var button4bdiv = $("#button-4b");
var button6div = $("#button-6");
var buttonopenclosecameradiv = $("#openclosecamera");

var currentRoom = "1a";
var currentRoomID = 0;
var animatestatic = 0;
var showrecord = false;
var feedopen = false;
var fananim = [];
var currentPower = 100;
var currentPowerUsage = 0;
var currenthour = 0;
var hours = [];
var timeCounter = 0;
var foxxyrunning = false;
var foxxytimeout;
var foxxytimer = 0;
var playedfoxxyrunninganimation = false;
var foxxyrunninganimationtimeout = [];

var roomImages = [];


// roomstates: 0 = default, 1 = different, etc.
var currRoomStates = [{ name: "1a", roomstate: 0 },
{ name: "1b", roomstate: 0 },
{ name: "1c", roomstate: 0 },
{ name: "2a", roomstate: 0 },
{ name: "2b", roomstate: 0 },
{ name: "5", roomstate: 0, AIStates: [1, 2] },
{ name: "7", roomstate: 0 },
{ name: "3", roomstate: 0 },
{ name: "4a", roomstate: 0 },
{ name: "4b", roomstate: 0 },
{ name: "6", roomstate: 0 },
{ name: "office", roomstate: 0 }
];

var rooms = [{ name: "1a", movingcamera: true, leftadjustment: 0 },
{ name: "1b", movingcamera: true, leftadjustment: 12 },
{ name: "1c", movingcamera: true, leftadjustment: 17 },
{ name: "2a", movingcamera: true, leftadjustment: 22 },
{ name: "2b", movingcamera: true, leftadjustment: 13 },
{ name: "5", movingcamera: true, leftadjustment: 13 },
{ name: "7", movingcamera: true, leftadjustment: 22 },
{ name: "3", movingcamera: false, leftadjustment: 22 },
{ name: "4a", movingcamera: true, leftadjustment: 22 },
{ name: "4b", movingcamera: true, leftadjustment: 22 },
{ name: "6", movingcamera: false, leftadjustment: 0 }
];

// amountofimages is the amount of images, but the highest number will be 1 less than that number.
// so image 4 in an array will be amountofimages-1
var roomImagesIndex = [{ name: "1a", amountofImages: 8 },
{ name: "1b", amountofImages: 8 },
{ name: "1c", amountofImages: 4 },
{ name: "2a", amountofImages: 3 },
{ name: "2b", amountofImages: 3 },
{ name: "5", amountofImages: 3 },
{ name: "7", amountofImages: 4 },
{ name: "3", amountofImages: 3 },
{ name: "4a", amountofImages: 4 },
{ name: "4b", amountofImages: 4 }]

/** @function setVariables 
 * @description Resets variables to their default values for loading new levels
*/
setVariables = function () {
	for (x = 0; x < currRoomStates.length; x++) {
		currRoomStates[x].roomstate = 0;
	};

	currentBunnyRoomArray = 4;
	currentRoom = "1a";
	currentRoomID = 0;
	animatestatic = 0;
	showrecord = false;
	feedopen = false;
	currentPower = 100;
	currentPowerUsage = 0;
	currenthour = 0;
	timeCounter = 0;
	foxxyrunning = false;
	foxxytimer = 0;
	// Randomize initial timer values so animatronics don't all move at the same time
	// Each gets a random starting offset between 0 and half their difficulty threshold
	bunnytimer = Math.floor(Math.random() * (bunnydifficultyarray[bunnydifficulty] / 2));
	chicatimer = Math.floor(Math.random() * (chicadifficultyarray[chicadifficulty] / 2));
	freddytimer = Math.floor(Math.random() * (freddydifficultyarray[freddydifficulty] / 2));
	playedfoxxyrunninganimation = false;
	animatronicStates[0].state = 0;  // Reset Chica state
	animatronicStates[1].state = 0;  // Reset Bonnie state
	animatronicStates[2].state = 0;  // Reset Freddy state
	animatronicStates[3].state = 0;  // Reset Foxy state
	animatronicStates[2].currentRoomArray = 6;
	animatronicStates[1].currentRoomArray = 6;
	animatronicStates[0].currentRoomArray = 6;
	animatronicStates[2].currentRoom = "1a";
	animatronicStates[1].currentRoom = "1a";
	animatronicStates[0].currentRoom = "1a";

	// Reset time display to 12AM
	document.getElementById("timehour").style.display = "block";
	timehourextradiv.attr("src", "graphics/camera/ui/time2.png");

	officeX = 0
	document.getElementById("office").style.webkitTransform = "none";
	officeXInterval;
	officeXOtherInterval;
	leftdooropen = false;
	rightdooropen = false;
	leftlighton = false;
	rightlighton = false;
	play2aanimation = false;
	
	// Reset office background to default state (no lights, no effects)
	if (typeof officestates !== 'undefined' && officestates[0]) {
		officemaindiv.css("background-image", "url('" + officestates[0].src + "')");
	}
	
	// Reset door images to open state (frame 0 = open, frame 13 = closed)
	if (typeof doorleftanim !== 'undefined' && doorleftanim[0]) {
		doorleftdiv.attr("src", doorleftanim[0].src);
	}
	if (typeof doorrightanim !== 'undefined' && doorrightanim[0]) {
		doorrightdiv.attr("src", doorrightanim[0].src);
	}
	
	// Reset door button images to default state (doors open, lights off)
	if (typeof buttonleftstates !== 'undefined' && buttonleftstates[1]) {
		doorbuttonsleftdiv.css("background-image", "url('" + buttonleftstates[1].src + "')");
	}
	if (typeof buttonrightstates !== 'undefined' && buttonrightstates[1]) {
		doorbuttonsrightdiv.css("background-image", "url('" + buttonrightstates[1].src + "')");
	}
};