document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");

const sec = 1000;

let tempTimeOut;

//Main character
const mainCharacter = document.getElementById("mainCharacter2");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

//Counter character
const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterPortrait = document.getElementById("counterCharacter");

//inventory
let inventory = [];
const inventoryList = document.getElementById("inventoryList");

function tweededeel () {
    setTimeout(function () {window.open("tweededeel.html")}, 3* sec);
}

function winscherm () {
    setTimeout(function () {window.open("win.html")}, 3* sec);
}

gameWindow.onclick = function (e) {
    if (counterSpeech.style.opacity == 0 && mainCharacterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        let currentX = mainCharacter.style.left;
        let currentY = mainCharacter.style.top;
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        console.log(e.target.id);

        switch (e.target.id) {
            case "door1":
                if (checkItem("old key")) {
                    showMessage(mainCharacterSpeech, characterAudio, "This key fits the door is open");
                    showMessage(mainCharacterSpeech, characterAudio, "wow there is a secret tunnel here. I wonder what it leads to");
                    tweededeel();
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "this door ia locked <br> maybe you need some sorth of key");

                }
                break;
            case "oldhouse":
                if (!checkItem("fishing rope")) {
                    getItem("fishing rope");
                    showMessage(mainCharacterSpeech, characterAudio, "Wow there is a fishing rope in this house wonder what i can use this for");
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "This house is empty ...");
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                }
                break;
            case "signToLeft":
                showMessage(mainCharacterSpeech, characterAudio, "Okay that house on the left<br>that's the house of the town wizard.");
                break;
            case "wisetree":
                counterPortrait.style.opacity = 1;
                showMessage(mainCharacterSpeech, characterAudio, "What is this tree why does it look so weird");
                setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Finaly someone to talk to");
                setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "What do you mean? Trees are not supose to talk");
                setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "To escape this place you should get to that boat on the other island..");
                setTimeout(function () { counterPortrait.style.opacity = 0; }, 16 * sec);
                setTimeout(showMessage, 16 * sec, mainCharacterSpeech, characterAudio, "Wait! What?");
                break;
            case "pond":
                if (checkItem("fishing rope")) {
                    getItem("old key");
                    showMessage(mainCharacterSpeech, characterAudio, "Wow I found a old key!<br>I wonder how long it has been in this pond");
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "I may need a fishing rope for this pond");
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                }
                break;

            case "water1":
                showMessage(mainCharacterSpeech, characterAudio, "i dont know how to swim... <br> there must be a different way to get to that island")
                mainCharacter.style.left = currentX;
                mainCharacter.style.top = currentY;
                break;
            case "water2":
                showMessage(mainCharacterSpeech, characterAudio, "i dont know how to swim... <br> there must be a different way to get to that island")
                mainCharacter.style.left = currentX;
                mainCharacter.style.top = currentY;
                break;
            case "water3":
                showMessage(mainCharacterSpeech, characterAudio, "i dont know how to swim... <br> there must be a different way to get to that island")
                mainCharacter.style.left = currentX;
                mainCharacter.style.top = currentY;
                break;
            case "water4":
                showMessage(mainCharacterSpeech, characterAudio, "i dont know how to swim... <br> and i probaly dont need that island anymore")
                mainCharacter.style.left = currentX;
                mainCharacter.style.top = currentY;
                break;
            case "water5":
                showMessage(mainCharacterSpeech, characterAudio, "i dont know how to swim... <br> and i probaly dont need that island anymore")
                mainCharacter.style.left = currentX;
                mainCharacter.style.top = currentY;
                break;
            case "house3":
                showMessage(mainCharacterSpeech, characterAudio, "Cool i found another key but what do i use this for..")
                if (!checkItem("key")) {
                    getItem("key");
                    showMessage(mainCharacterSpeech, characterAudio, "Cool i found another key but what do i use this for..")
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "This house is empty ...");
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                }
                break;

            case "house4":
                showMessage(mainCharacterSpeech, characterAudio, "This house has nothing in it");
                break;

            case "house5":
                if (checkItem("key")) {
                    getItem("wrench");
                    showMessage(mainCharacterSpeech, characterAudio, "Wow this house has a wrench maybe i can repair the boat with this..");
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "This house is locked ...");
                    setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
                }
                break;

            case "house5":
                showMessage(mainCharacterSpeech, characterAudio, "This is the house i just came from");
                break;

            case "boat":
                if(checkItem("wrench")) {
                    showMessage(mainCharacterSpeech, characterAudio, "Woohoo i repaired the boat");  
                    winscherm()
                } else {
                    showMessage(mainCharacterSpeech, characterAudio, "oh no this boat is broken");
                }
                break;
            default:
                // do something when it doesn't have a case
                hideMessage(mainCharacterSpeech, characterAudio);
                hideMessage(counterSpeech, counterAudio);
                break;
        }
    }
}

function showMessage(targetBalloon, targetSound, message) {
    targetSound.currentTime = 0;
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerHTML = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon, targetSound);
}

function hideMessage(targetBalloon, targetSound) {
    targetSound.pause();
    targetBalloon.style.opacity = "0";
    targetBalloon.innerHTML = "...";
}

function getItem(itemName, itemId) {
    if (!checkItem(itemName)) {
        inventory.push(itemName);
        showItem(itemName, itemId);
    }

}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {
    //Make a list item from scratch and store it in a variable
    let listItem = document.createElement("li");

    //Give List Item an ID name
    listItem.id = itemId;

    //fill that list item with value of inputfield
    listItem.appendChild(document.createTextNode(itemName));

    //find UL with id todoContainer and attach the list item to it.
    inventoryList.appendChild(listItem);
}

function removeItem(itemName, itemId) {
    //remove item in Array
    inventory = inventory.filter(function (newInventory) {
        return newInventory !== itemName;
    });
    //removes list element in HTML
    document.getElementById(itemId).remove();

}