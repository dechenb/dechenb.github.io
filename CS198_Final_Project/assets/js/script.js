function unhideTextbox(textboxID) {
    document.getElementById(textboxID).classList.remove('hidden');
}


function unhideHead() {
    unhideTextbox("head-text");
}


function unhideFlipper() {
    unhideTextbox("flipper-text");
}

function unhideTail() {
    unhideTextbox("tail-text");
}

document.getElementById("head").onmouseover = unhideHead;

document.getElementById("flipper1").onmouseover = unhideFlipper;

document.getElementById("flipper2").onmouseover = unhideFlipper;

document.getElementById("tail").onmouseover = unhideTail;





function hideTextbox(textboxID) {
    document.getElementById(textboxID).classList.add('hidden');
}

function hideHead() {
    hideTextbox("head-text");
}

function hideFlipper() {
    hideTextbox("flipper-text");
}

function hideTail() {
    hideTextbox("tail-text");
}

document.getElementById("head").onmouseleave = hideHead;

document.getElementById("flipper1").onmouseleave = hideFlipper;

document.getElementById("flipper2").onmouseleave = hideFlipper;

document.getElementById("tail").onmouseleave = hideTail;

