// © 2020, Salad King. All Rights Reserved
// ==UserScript==
// @name         SaladKeys Revisited

// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Controls: W = FEED ; SHIFT = QUADRUPLE ; Z = TRIPLESPLIT ; A = DOUBLESPLIT ; S =FREEZE CELL
// @author       Salad King
// @match        https://agar.io/*
// @match        http://agma.io/
// @match        http://gota.io/web/
// @run-at       document-end
// @grant        none
// ==/UserScript==

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
window.onload = function() {
window.saladAss = function(slot) {
    var bytes = [8, 1, 18, 7, 8, 124, 226, 7, 2, 8, slot];
    window.core.proxyMobileData(bytes);
}
}


var EjectDown = false;

var speed = 25; //in ms
function keydown(event) {
    if (event.keyCode == 87 && EjectDown === false) { // key W
        EjectDown = true;
        setTimeout(eject, speed);
    }
    if (event.keyCode == 65) { //key A
        split();
        setTimeout(split, speed);
    }
     if (event.keyCode == 90) { //key Z
        split();
        setTimeout(split, speed);
        setTimeout(split, speed*2);
    }
     if (event.keyCode == 16) { //key Shift
        split();
        setTimeout(split, speed);
        setTimeout(split, speed*2);
        setTimeout(split, speed*3);
     }
    if (event.keyCode == 83) { //key S
        X = window.innerWidth/2;
        Y = window.innerHeight/2;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
    }
    if(event.keyCode == 49) { //key 1
      window.saladAss(1);
    }
    if(event.keyCode == 50) { //key 2
      window.saladAss(2);
    }
    if(event.keyCode == 51) { //key 3
      window.saladAss(3);
    }
    if(event.keyCode == 52) { //key 4
      window.saladAss(1);
      window.saladAss(2);
      window.saladAss(3);
    }
}


function keyup(event) {
    if (event.keyCode == 87) { // key W
        EjectDown = false;
    }
}

function eject() {
    if (EjectDown) {
        window.onkeydown({keyCode: 87}); // key W
        window.onkeyup({keyCode: 87});
        setTimeout(eject, speed);
    }
}

function split() {
    $("body").trigger($.Event("keydown", { keyCode: 32})); //key space
    $("body").trigger($.Event("keyup", { keyCode: 32})); //jquery is required for split to work
}
//© 2020.