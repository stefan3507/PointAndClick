document.getElementById("mainTitle").appendChild(document.createTextNode("hello world"));
document.getElementById("mainTitle").style.textAlign = "center";

const mainCharacter = document.getElementById("MainCharacter")
const gameWindow = document.getElementById("gameWindow")
const offsetCharacter = 11;


gameWindow.onclick = function(e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";
    //console.log(x);
}