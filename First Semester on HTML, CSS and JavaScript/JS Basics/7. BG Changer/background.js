var botao = document.querySelector("button");
var body = document.querySelector("body");
var colors = ["Blue", "Green", "Gray", "Pink", "Purple", "Black", "White", "Orange", "Yellow", "Red"];

botao.addEventListener("click", randomColor);

function randomColor() {
    var i = Math.floor(Math.random() * colors.length);
    body.style.background = colors[i];
};