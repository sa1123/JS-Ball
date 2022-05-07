var ball = document.getElementById("ball");

ball.style.left = ball.offsetLeft + "px";
ball.style.top = ball.offsetTop + "px";

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;

function setValue(value) {
    return value + "px";
}

function keyCode(keyPress) {

    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    //W
    if (keyPress === 119 || keyPress === 87) {
        if(top > 5) {
            ball.style.top = setValue(top - 5);
        }
    }
    //A
    if (keyPress === 97 || keyPress === 65){
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }
    //S
    if (keyPress === 115 || keyPress === 83){
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }
    //D
    if (keyPress === 100 || keyPress === 68){
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }
}

window.addEventListener("keypress", function(event){
    keyCode(event.keyCode);
})