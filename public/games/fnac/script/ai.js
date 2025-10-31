//
// ai.js
// The JS for ai
//
// Last updated - 12/08/2015

/**
 * @file Code for AI operations
 * @author Sam Lynch
 * @version 1.0.0
 * @copyright (c) 2015 Amduat Games
 */

debuglog("Initializing ai.js...");

/**
 * @function getRoomState1a
 * @description Determines the correct image state for room 1a based on which animatronics are present
 * @returns {number} The room state (0-7) corresponding to which animatronics are in room 1a
 * 
 * Room 1a states (based on actual images):
 * 0 - Everyone (Freddy + Bonnie + Chica)
 * 1 - Empty
 * 2 - Chica + Freddy
 * 3 - Bonnie + Freddy
 * 4 - Bonnie + Chica
 * 5 - Bonnie only
 * 6 - Chica only
 * 7 - Freddy only
 */
function getRoomState1a() {
	var bonnieIn1a = (animatronicStates[1].currentRoom === "1a");
	var chicaIn1a = (animatronicStates[0].currentRoom === "1a");
	var freddyIn1a = (animatronicStates[2].currentRoom === "1a");

	debuglog("getRoomState1a: Bonnie=" + bonnieIn1a + " (" + animatronicStates[1].currentRoom + "), Chica=" + chicaIn1a + " (" + animatronicStates[0].currentRoom + "), Freddy=" + freddyIn1a + " (" + animatronicStates[2].currentRoom + ")");

	// Check all combinations
	if (freddyIn1a && bonnieIn1a && chicaIn1a) {
		debuglog("getRoomState1a returning 0 (Everyone)");
		return 0; // Everyone
	}
	if (freddyIn1a && bonnieIn1a && !chicaIn1a) {
		debuglog("getRoomState1a returning 3 (Bonnie + Freddy)");
		return 3; // Bonnie + Freddy
	}
	if (freddyIn1a && !bonnieIn1a && chicaIn1a) {
		debuglog("getRoomState1a returning 2 (Chica + Freddy)");
		return 2; // Chica + Freddy
	}
	if (!freddyIn1a && bonnieIn1a && chicaIn1a) {
		debuglog("getRoomState1a returning 4 (Bonnie + Chica)");
		return 4; // Bonnie + Chica
	}
	if (freddyIn1a && !bonnieIn1a && !chicaIn1a) {
		debuglog("getRoomState1a returning 7 (Freddy only)");
		return 7; // Freddy only
	}
	if (!freddyIn1a && !bonnieIn1a && chicaIn1a) {
		debuglog("getRoomState1a returning 6 (Chica only)");
		return 6; // Chica only
	}
	if (!freddyIn1a && bonnieIn1a && !chicaIn1a) {
		debuglog("getRoomState1a returning 5 (Bonnie only)");
		return 5; // Bonnie only
	}

	debuglog("getRoomState1a returning 1 (Empty)");
	return 1; // Empty
}

/**
 * @function getRoomState1b
 * @description Determines the correct image state for room 1b based on which animatronics are present
 * @returns {number} The room state (0-7) corresponding to which animatronics are in room 1b
 * 
 * Room 1b states (based on actual images):
 * 0 - Empty
 * 1 - Bonnie only
 * 2 - Chica only
 * 3 - Freddy only
 * 4 - Bonnie + Chica
 * 5 - Chica + Freddy
 * 6 - Bonnie + Freddy
 * 7 - All three (Freddy + Bonnie + Chica)
 */
function getRoomState1b() {
	var bonnieIn1b = (animatronicStates[1].currentRoom === "1b");
	var chicaIn1b = (animatronicStates[0].currentRoom === "1b");
	var freddyIn1b = (animatronicStates[2].currentRoom === "1b");

	// console.log("getRoomState1b: Bonnie=" + bonnieIn1b + ", Chica=" + chicaIn1b + ", Freddy=" + freddyIn1b);

	// Check all combinations
	if (freddyIn1b && bonnieIn1b && chicaIn1b) {
		// console.log("getRoomState1b returning 7 (All three)");
		return 7; // All three
	}
	if (freddyIn1b && bonnieIn1b && !chicaIn1b) {
		// console.log("getRoomState1b returning 6 (Bonnie + Freddy)");
		return 6; // Bonnie + Freddy
	}
	if (freddyIn1b && !bonnieIn1b && chicaIn1b) {
		// console.log("getRoomState1b returning 5 (Chica + Freddy)");
		return 5; // Chica + Freddy
	}
	if (!freddyIn1b && bonnieIn1b && chicaIn1b) {
		// console.log("getRoomState1b returning 4 (Bonnie + Chica)");
		return 4; // Bonnie + Chica
	}
	if (freddyIn1b && !bonnieIn1b && !chicaIn1b) {
		// console.log("getRoomState1b returning 3 (Freddy only)");
		return 3; // Freddy only
	}
	if (!freddyIn1b && !bonnieIn1b && chicaIn1b) {
		// console.log("getRoomState1b returning 2 (Chica only)");
		return 2; // Chica only
	}
	if (!freddyIn1b && bonnieIn1b && !chicaIn1b) {
		// console.log("getRoomState1b returning 1 (Bonnie only)");
		return 1; // Bonnie only
	}

	// console.log("getRoomState1b returning 0 (Empty)");
	return 0; // Empty
}

/**
 * @function getRoomState7
 * @description Determines the correct image state for room 7 based on which animatronics are present
 * @returns {number} The room state (0-3) corresponding to which animatronics are in room 7
 * 
 * Room 7 states (based on actual images):
 * 0 - Empty
 * 1 - Chica + Freddy
 * 2 - Chica only
 * 3 - Freddy only
 */
function getRoomState7() {
	var chicaIn7 = (animatronicStates[0].currentRoom === "7");
	var freddyIn7 = (animatronicStates[2].currentRoom === "7");

	// console.log("getRoomState7: Chica=" + chicaIn7 + ", Freddy=" + freddyIn7);

	// Check all combinations
	if (freddyIn7 && chicaIn7) {
		// console.log("getRoomState7 returning 1 (Chica + Freddy)");
		return 1; // Chica + Freddy
	}
	if (!freddyIn7 && chicaIn7) {
		// console.log("getRoomState7 returning 2 (Chica only)");
		return 2; // Chica only
	}
	if (freddyIn7 && !chicaIn7) {
		// console.log("getRoomState7 returning 3 (Freddy only)");
		return 3; // Freddy only
	}

	// console.log("getRoomState7 returning 0 (Empty)");
	return 0; // Empty
}

/**
 * @function getRoomState4a
 * @description Determines the correct image state for room 4a based on which animatronics are present
 * @returns {number} The room state (0-3) corresponding to which animatronics are in room 4a
 * 
 * Room 4a states (based on actual images):
 * 0 - Empty
 * 1 - Chica only
 * 2 - Freddy only
 * 3 - Chica + Freddy
 */
function getRoomState4a() {
	var chicaIn4a = (animatronicStates[0].currentRoom === "4a");
	var freddyIn4a = (animatronicStates[2].currentRoom === "4a");

	// console.log("getRoomState4a: Chica=" + chicaIn4a + ", Freddy=" + freddyIn4a);

	// Check all combinations
	if (freddyIn4a && chicaIn4a) {
		// console.log("getRoomState4a returning 3 (Chica + Freddy)");
		return 3; // Chica + Freddy
	}
	if (!freddyIn4a && chicaIn4a) {
		// console.log("getRoomState4a returning 1 (Chica only)");
		return 1; // Chica only
	}
	if (freddyIn4a && !chicaIn4a) {
		// console.log("getRoomState4a returning 2 (Freddy only)");
		return 2; // Freddy only
	}

	// console.log("getRoomState4a returning 0 (Empty)");
	return 0; // Empty
}

/**
 * @function getRoomState4b
 * @description Determines the correct image state for room 4b based on which animatronics are present
 * @returns {number} The room state (0-3) corresponding to which animatronics are in room 4b
 * 
 * Room 4b states (based on actual images):
 * 0 - Empty
 * 1 - Chica only
 * 2 - Freddy only
 * 3 - Chica + Freddy
 */
function getRoomState4b() {
	var chicaIn4b = (animatronicStates[0].currentRoom === "4b");
	var freddyIn4b = (animatronicStates[2].currentRoom === "4b");

	// console.log("getRoomState4b: Chica=" + chicaIn4b + ", Freddy=" + freddyIn4b);

	// Check all combinations
	if (freddyIn4b && chicaIn4b) {
		// console.log("getRoomState4b returning 3 (Chica + Freddy)");
		return 3; // Chica + Freddy
	}
	if (!freddyIn4b && chicaIn4b) {
		// console.log("getRoomState4b returning 1 (Chica only)");
		return 1; // Chica only
	}
	if (freddyIn4b && !chicaIn4b) {
		// console.log("getRoomState4b returning 2 (Freddy only)");
		return 2; // Freddy only
	}

	// console.log("getRoomState4b returning 0 (Empty)");
	return 0; // Empty
}

/** @function updateBunnyAI 
 * @description Updates AI of Bonnie
*/
function updateBunnyAI() {
	switch (animatronicStates[1].state) {
		case 0:  // unseen
			//	if(animatronicStates[1].currentRoom=="1b") return;
			bunnytimer++;
			debuglog("bunnytimer = " + bunnytimer);
			if (animatronicStates[1].currentRoomArray == 0) {
				if (leftlighton == true) {
					updateAIState(1, 1, false);
				} else {
					updateAIState(1, 3, false);
					return;
				};
			};
			if (bunnytimer >= bunnydifficultyarray[bunnydifficulty]) {
				//	updateRoomState(roomname,state,timeout);
				//	animatronicStates[1].state=2;
				updateAIState(1, 2);
			}
			break;
		case 1:  // seen
			if (currentRoom != animatronicStates[1].currentRoom || feedopen == false) {
				if (animatronicStates[1].currentRoomArray == 0 && leftlighton == true) {
					updateAIState(1, 1, false);
					return;
				} else {
					updateAIState(1, 0, false);
					return;
				};
			};
			break;
		case 2:  // moving
			debuglog("bunnytimer = " + bunnytimer);
			if ((animatronicStates[0].currentRoomArray) == 5) return;
			if (animatronicStates[1].currentRoomArray == 0) {
				updateAIState(1, 3);
				return;
			};
			//			if((Math.random()*100)<=bunnyChanceToMoveCloser[bunnydifficulty]){
			if (1 == 1) {
			// Store the old room before moving
			var oldBonnieRoom = roomClosenessBunny[animatronicStates[1].currentRoomArray].name;

			animatronicStates[1].currentRoomArray -= 1
			animatronicStates[1].currentRoom = roomClosenessBunny[animatronicStates[1].currentRoomArray].name

			// console.log("=== BONNIE MOVED ===");
			// console.log("Bonnie OLD position: " + oldBonnieRoom);
			// console.log("Bonnie NEW position: " + animatronicStates[1].currentRoom + " (array index: " + animatronicStates[1].currentRoomArray + ")");
			// console.log("Clearing " + oldBonnieRoom + " to state 0 (or recalculating if 1a)");

			// Clear the old room - special handling for rooms with multiple animatronics
				if (oldBonnieRoom === "1a") {
					updateRoomState("1a", getRoomState1a());
				} else if (oldBonnieRoom === "1b") {
					updateRoomState("1b", getRoomState1b());
				} else {
					// For other rooms, just clear Bonnie (set to 0)
					updateRoomState(oldBonnieRoom, 0);
				}

				// Set the new room state
				if (animatronicStates[1].currentRoomArray == 5) {
					// Room 1b - use helper function to determine correct state
					updateRoomState("1b", getRoomState1b());
				} else if (animatronicStates[1].currentRoomArray == 4) {
					// Room 5
					updateRoomState(roomClosenessBunny[animatronicStates[1].currentRoomArray].name, 2);
				} else {
					// All other rooms (2a, 3, 2b, etc.) - set state 2 for Bonnie
					updateRoomState(roomClosenessBunny[animatronicStates[1].currentRoomArray].name, 2);
				}
				animatronicStates[1].currentRoom = roomClosenessBunny[animatronicStates[1].currentRoomArray].name
				debuglog("closer!");
				if (currentRoom != animatronicStates[1].currentRoom || feedopen == false) {
					updateAIState(1, 0);
				} else {
					updateAIState(1, 1);
				};
				if (animatronicStates[1].currentRoom == "office") updateAIState(1, 3);
			};
			break;
		case 3:  // at office door
			bunnytimer++;
			debuglog("bunnytimer = " + bunnytimer);
			if (bunnytimer <= 9 && leftlighton == true) {
				updateAIState(1, 1, false);
			};
			if (bunnytimer <= 9 && leftdooropen == true) {
				//	currentPower-=(0.775);
			} else if (bunnytimer >= 9 && leftdooropen == false) {
				updateAIState(1, 4);
			} else if (bunnytimer >= 10 && leftdooropen == true) {
				// Bonnie retreats - clear the office and any rooms he was in
				updateRoomState("office", 0);
				updateRoomState("2b", 0);  // Clear room 2b (index 1)
				updateRoomState("3", 0);   // Clear room 3 (index 2)
				updateRoomState("2a", 0);  // Clear room 2a (index 3)
				
				if (animatronicStates[0].currentRoomArray != 5) {
					updateAIState(1, 0);
					animatronicStates[1].currentRoomArray = 5;
					animatronicStates[1].currentRoom = roomClosenessBunny[animatronicStates[1].currentRoomArray].name;
					updateRoomState("1b", getRoomState1b());
					debuglog("returning to room 1b");
				} else {
					updateAIState(1, 0);
					updateRoomState("5", 0);  // Also clear room 5 if going there
					animatronicStates[1].currentRoomArray = 4;
					animatronicStates[1].currentRoom = roomClosenessBunny[animatronicStates[1].currentRoomArray].name;
					updateRoomState(roomClosenessBunny[animatronicStates[1].currentRoomArray].name, 2);
					debuglog("returning to room 5");
				};
			};
			break;
		case 4:  // dead
			playfreddygameoveranimation("bonny");
			updateAIState(1, 1);
			break;
		default:
	}
};

/** @function updateChicaAI 
 * @description Updates AI of Chica
*/
function updateChicaAI() {
	switch (animatronicStates[0].state) {
		case 0:  // unseen
			//	if(animatronicStates[1].currentRoom=="1b") return;
			chicatimer++;
			debuglog("chicatimer = " + chicatimer);
			if (animatronicStates[0].currentRoomArray == 0) {
				if (leftlighton == true) {
					updateAIState(0, 1, false);
				} else {
					updateAIState(0, 3, false);
					return;
				};
			};
			if (chicatimer >= chicadifficultyarray[chicadifficulty]) {
				//	updateRoomState(roomname,state,timeout);
				//	animatronicStates[1].state=2;
				updateAIState(0, 2);
			};
			break;
		case 1:  // seen
			if (currentRoom != animatronicStates[0].currentRoom || feedopen == false) {
				if (animatronicStates[0].currentRoomArray == 0 && rightlighton == true) {
					updateAIState(0, 1, false);
					return;
				} else {
					updateAIState(0, 0, false);
					return;
				};
			};
			break;
		case 2:  // moving
			debuglog("chicatimer = " + chicatimer);
			//	if((animatronicStates[1].currentRoomArray)==5) return;
			if (animatronicStates[0].currentRoomArray == 0) {
				updateAIState(0, 3);
				return;
			};
			//			if((Math.random()*100)<=chicaChanceToMoveCloser[chicadifficulty]){
			if (1 == 1) {
				//		updateAIPosition(1,1,roomClosenessBunny[3].name,1,0)
			// Store the old room before moving
			var oldChicaRoom = roomClosenessChica[animatronicStates[0].currentRoomArray].name;

			animatronicStates[0].currentRoomArray -= 1
			animatronicStates[0].currentRoom = roomClosenessChica[animatronicStates[0].currentRoomArray].name

			// console.log("=== CHICA MOVED ===");
			// console.log("Chica OLD position: " + oldChicaRoom);
			// console.log("Chica NEW position: " + animatronicStates[0].currentRoom + " (array index: " + animatronicStates[0].currentRoomArray + ")");
			// console.log("Clearing " + oldChicaRoom + " to state 0 (or recalculating if 1a)");

			// Clear the old room - special handling for rooms with multiple animatronics
				if (oldChicaRoom === "1a") {
					updateRoomState("1a", getRoomState1a());
				} else if (oldChicaRoom === "1b") {
					updateRoomState("1b", getRoomState1b());
				} else if (oldChicaRoom === "7") {
					updateRoomState("7", getRoomState7());
				} else if (oldChicaRoom === "4a") {
					updateRoomState("4a", getRoomState4a());
				} else if (oldChicaRoom === "4b") {
					updateRoomState("4b", getRoomState4b());
				} else {
					// For other rooms, just clear Chica (set to 0)
					updateRoomState(oldChicaRoom, 0);
				}

				// Set the new room state
				if (animatronicStates[0].currentRoomArray == 5) {
					// Room 1b - use helper function to determine correct state
					updateRoomState("1b", getRoomState1b());
				} else if (animatronicStates[0].currentRoomArray == 4) {
					// Room 7 - use helper function to determine correct state
					updateRoomState("7", getRoomState7());
				} else if (animatronicStates[0].currentRoomArray == 2) {
					// Room 4a - use helper function to determine correct state
					updateRoomState("4a", getRoomState4a());
				} else if (animatronicStates[0].currentRoomArray == 1) {
					// Room 4b - use helper function to determine correct state
					updateRoomState("4b", getRoomState4b());
				} else {
					updateRoomState(roomClosenessChica[animatronicStates[0].currentRoomArray].name, 2);
				};
				animatronicStates[0].currentRoom = roomClosenessChica[animatronicStates[0].currentRoomArray].name
				debuglog("closer!");
				if (currentRoom != animatronicStates[0].currentRoom || feedopen == false) {
					updateAIState(0, 0);
				} else {
					updateAIState(0, 1);
				};
				if (animatronicStates[0].currentRoom == "office") updateAIState(0, 3);
				if (animatronicStates[0].currentRoom == "6") { sound.playSound("kitchen" + (randomIntFromInterval(1, 4)) + ".wav", 0.6); }
			};
			break;
		case 3:  // at office door
			chicatimer++;
			debuglog("chicatimer = " + chicatimer);
			if (chicatimer <= 9 && leftlighton == true) {
				updateAIState(1, 1, false);
			};
			if (chicatimer <= 9 && rightdooropen == true) {
				//	currentPower-=(0.775);
			} else if (chicatimer >= 9 && rightdooropen == false) {
				updateAIState(0, 4);
			} else if (chicatimer >= 10 && rightdooropen == true) {
				// Chica retreats - clear the office and any rooms she was in
				updateRoomState("office", 0);
				updateRoomState("4b", getRoomState4b());  // Clear room 4b using helper (index 1)
				updateRoomState("4a", getRoomState4a());  // Clear room 4a using helper (index 2)
				
				if (animatronicStates[1].currentRoomArray != 5) {
					updateAIState(0, 0);
					updateRoomState("6", 0);  // Clear room 6 if going to room 7
					animatronicStates[0].currentRoomArray = 4;
					animatronicStates[0].currentRoom = roomClosenessChica[animatronicStates[0].currentRoomArray].name;
					updateRoomState("7", getRoomState7());
					debuglog("returning to room 7");
				} else {
					updateAIState(0, 0);
					updateRoomState("7", getRoomState7());  // Clear room 7 using helper
					updateRoomState("6", 0);  // Clear room 6
					animatronicStates[0].currentRoomArray = 3;
					animatronicStates[0].currentRoom = roomClosenessChica[animatronicStates[0].currentRoomArray].name;
					updateRoomState(roomClosenessChica[animatronicStates[0].currentRoomArray].name, 2);
					debuglog("returning to room 6");
				};
			};
			break;
		case 4:  // dead
			playfreddygameoveranimation("chica");
			updateAIState(0, 1);
			break;
		default:
	}
};

/** @function updateFoxxyAI 
 * @description Updates AI of Foxxy
*/
function updateFoxxyAI() {
	switch (animatronicStates[3].state) {
		case 0:  // Stage 0 - Behind curtain, hasn't started moving yet
			foxxytimer++;
			// console.log("=== FOXY STATE 0 (Behind Curtain) === Timer: " + foxxytimer + "/" + foxydifficultyarray[foxydifficulty]);
			if (foxxytimer >= foxydifficultyarray[foxydifficulty]) {
				// 13% chance to advance to next state
				if (Math.random() <= 0.5) {
					// console.log("FOXY: 13% chance SUCCESS! Moving to State 1 (Peeking out)");
					updateAIState(3, 1);
					sound.playSound("pirate_song2.wav", 0.01);
				} else {
					// console.log("FOXY: 13% chance FAILED. Resetting timer and staying in State 0");
					foxxytimer = 0;
				}
			}
			break;
		case 1:  // Stage 1 - Peeking out
			foxxytimer++;
			// console.log("=== FOXY STATE 1 (Peeking Out) === Timer: " + foxxytimer + "/" + foxydifficultyarray[foxydifficulty]);
			if (foxxytimer >= foxydifficultyarray[foxydifficulty]) {
				// 13% chance to advance to next state
				if (Math.random() <= 0.3) {
					// console.log("FOXY: 13% chance SUCCESS! Moving to State 2 (Getting ready to run)");
					updateAIState(3, 2);
					sound.playSound("pirate_song2.wav", 0.01);
				} else {
					// console.log("FOXY: 13% chance FAILED. Resetting timer and staying in State 1");
					foxxytimer = 0;
				}
			};
			break;
		case 2:  // Stage 2 - Ready to run
			foxxytimer++;
			// console.log("=== FOXY STATE 2 (Ready to Run) === Timer: " + foxxytimer + "/" + foxydifficultyarray[foxydifficulty]);
			if (foxxytimer >= foxydifficultyarray[foxydifficulty]) {
				// 13% chance to advance to next state
				if (Math.random() <= 0.13) {
					// console.log("FOXY: 13% chance SUCCESS! Moving to State 3 (Running to office!)");
					updateAIState(3, 3);
					sound.playSound("pirate_song2.wav", 0.01);
				} else {
					// console.log("FOXY: 13% chance FAILED. Resetting timer and staying in State 2");
					foxxytimer = 0;
				}
			}
			break;
		case 3:  // Stage 3 - Running to office
			foxxytimer++;
			// console.log("=== FOXY STATE 3 (Running!) === Timer: " + foxxytimer + " | Left door open: " + leftdooropen);
			if (foxxytimer >= 6 && leftdooropen == false) {
				// console.log("FOXY: Door is OPEN and timer >= 6! ATTACKING!");
				if (feedopen == true) {
					OpenCloseFeed();
				};
				playfoxxyofficeanimation();
			} else if (foxxytimer < 5 && leftdooropen == true) {
				// console.log("FOXY: Door is CLOSED and timer < 5! Moving to State 4 (Draining power)");
				updateAIState(3, 4);
			};
			break;
		case 4:  // Stage 4 - At door, draining power or attacking
			foxxytimer++;
			// console.log("=== FOXY STATE 4 (At Door) === Timer: " + foxxytimer + " | Left door open: " + leftdooropen);
			if (foxxytimer <= 9 && leftdooropen == true) {
				// console.log("FOXY: Draining power... (-0.775)");
				currentPower -= (0.775);
			} else if (foxxytimer <= 9 && leftdooropen == false) {
				// console.log("FOXY: Door opened while at door! ATTACKING!");
				playfoxxyofficeanimation();
			} else if (foxxytimer >= 10 && leftdooropen == true) {
				// console.log("FOXY: Gave up after draining power. Returning to State 0 (Behind curtain)");
				updateAIState(3, 0);
			};
			break;
		default:
	}
};

/** @function updateFreddyAI 
 * @description Updates AI of Freddy
*/
function updateFreddyAI() {
	switch (animatronicStates[2].state) {
		case 0:  // unseen
			freddytimer++;
			debuglog("freddytimer = " + freddytimer);
			if (animatronicStates[2].currentRoomArray == 0) {
				debuglog("FREDDY HAS REACHED THE OFFICE");
			};
			if (freddytimer >= freddydifficultyarray[freddydifficulty]) {
				// Similar to Foxy, add a 15% chance to move
				if (Math.random() < 0.15) {
					// console.log("=== FREDDY MOVEMENT CHECK ===");
					// console.log("Timer reached: " + freddytimer + " (required: " + freddydifficultyarray[freddydifficulty] + ")");
					// console.log("Movement chance SUCCESS - Freddy will move");
					updateAIState(2, 2);
				} else {
					// console.log("=== FREDDY MOVEMENT CHECK ===");
					// console.log("Timer reached: " + freddytimer + " (required: " + freddydifficultyarray[freddydifficulty] + ")");
					// console.log("Movement chance FAILED - Freddy stays put, timer reset");
					freddytimer = 0;
				}
			};
			break;
		case 1:  // seen
			if (currentRoom != animatronicStates[2].currentRoom || feedopen == false) {
				//if(animatronicStates[2].currentRoomArray==0 && rightlighton==true) {
				updateAIState(2, 0, false);
				//return;
			} else {
				updateAIState(2, 1, false);
				//	return;
			};
			break;
		case 2:  // moving
			debuglog("freddytimer = " + freddytimer);
			if (animatronicStates[2].currentRoomArray == 1) {
				updateAIState(2, 3);
				debuglog("FREDDY HAS REACHED THE OFFICE");
				return;
			};
			if (1 == 1) {
			// Store the old room before moving
			var oldFreddyRoom = roomClosenessFreddy[animatronicStates[2].currentRoomArray].name;

			animatronicStates[2].currentRoomArray -= 1
			animatronicStates[2].currentRoom = roomClosenessFreddy[animatronicStates[2].currentRoomArray].name

			// console.log("=== FREDDY MOVED ===");
			// console.log("Freddy OLD position: " + oldFreddyRoom);
			// console.log("Freddy NEW position: " + animatronicStates[2].currentRoom + " (array index: " + animatronicStates[2].currentRoomArray + ")");
			// console.log("Clearing " + oldFreddyRoom + " to state 0 (or recalculating if 1a)");

			// Clear the old room - special handling for rooms with multiple animatronics
				if (oldFreddyRoom === "1a") {
					debuglog("FREDDY HAS LEFT THE STAGE");
					updateRoomState("1a", getRoomState1a());
				} else if (oldFreddyRoom === "1b") {
					updateRoomState("1b", getRoomState1b());
				} else if (oldFreddyRoom === "7") {
					updateRoomState("7", getRoomState7());
				} else if (oldFreddyRoom === "4a") {
					updateRoomState("4a", getRoomState4a());
				} else if (oldFreddyRoom === "4b") {
					updateRoomState("4b", getRoomState4b());
				} else {
					// For other rooms, just clear Freddy (set to 0)
					updateRoomState(oldFreddyRoom, 0);
				}

				// Set the appropriate room state based on where Freddy is now
				if (animatronicStates[2].currentRoomArray == 5) {  // Room 1b
					updateRoomState("1b", getRoomState1b());
				} else if (animatronicStates[2].currentRoomArray == 4) {  // Room 7
					updateRoomState("7", getRoomState7());
				} else if (animatronicStates[2].currentRoomArray == 2) {  // Room 4a
					updateRoomState("4a", getRoomState4a());
				} else if (animatronicStates[2].currentRoomArray == 1) {  // Room 4b
					updateRoomState("4b", getRoomState4b());
				} else {
					updateRoomState(roomClosenessFreddy[animatronicStates[2].currentRoomArray].name, 3);
				};
				animatronicStates[2].currentRoom = roomClosenessFreddy[animatronicStates[2].currentRoomArray].name
				debuglog("closer!");
				if (currentRoom != animatronicStates[2].currentRoom || feedopen == false) {
					updateAIState(2, 0);
				} else {
					updateAIState(2, 1);
				};
				if (animatronicStates[2].currentRoom == "4b") {
					updateAIState(2, 3);
				} else if (animatronicStates[2].currentRoom == "6") {
					sound.playSound("kitchen" + (randomIntFromInterval(1, 4)) + ".wav", 0.6);
				};
				if (Math.random() < 0.84) {
					// play a sound
					whatsound = randomIntFromInterval(1, 4);
					switch (whatsound) {
						case 1:
							sound.playSound("Laugh_Giggle_Girl_8d.wav", 0.5);
							break;
						case 2:
							sound.playSound("Laugh_Giggle_Girl_2d.wav", 0.5);
							break;
						case 3:
							sound.playSound("Laugh_Giggle_Girl_1d.wav", 0.5);
							break;
						case 4:
							sound.playSound("deep steps.wav", 0.5);
							break;
					};
				};
			};
			break;
		case 3:  // at door outside office
			freddytimer++;
			debuglog("freddytimer = " + freddytimer);
			if (freddytimer <= 7 && rightdooropen == true) {
				//keep the door closed for 7 seconds lest you get fucked
			} else if (freddytimer >= 7 && rightdooropen == false) {
				//door was not closed. Shame.
				updateRoomState(roomClosenessFreddy[animatronicStates[2].currentRoomArray].name, 0);
				animatronicStates[2].currentRoomArray = 0;
				updateAIState(2, 4);
			} else if (freddytimer >= 8 && rightdooropen == true) {
				//the door is shut so he stays at the door waiting - he will NOT leave until the night ends or you open the door
				debuglog("Freddy is waiting at the door...");
			};
			break;
		case 4:  // inside office/dead
			if (freddytimer == 0) {
				animatronicStates[2].currentRoomArray = 0;
				animatronicStates[2].currentRoom = roomClosenessFreddy[animatronicStates[2].currentRoomArray].name;
			};
			freddytimer++;
			debuglog("freddytimer = " + freddytimer);
			if (freddytimer >= 14) {
				//dead
				playfreddygameoveranimation("freddyoffice")
			};
			break;
		default:
	}
};