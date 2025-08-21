var botao = document.querySelector("button");
var body = document.querySelector("body");
var paragrafo = document.querySelector("p");
var taEscuro = false;

botao.addEventListener("click", modoNoturno);

function modoNoturno() {
    if (taEscuro) {
        body.style.background = "White";
        paragrafo.style.color = "Black";
        taEscuro = false;
    } else {
        body.style.background = "Black";
        paragrafo.style.color = "White";
        taEscuro = true;
    }
}