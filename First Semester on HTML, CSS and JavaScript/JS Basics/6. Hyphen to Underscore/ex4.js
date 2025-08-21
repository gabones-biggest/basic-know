let paragrafo = prompt("Digite uma frase em churrasquinho-case");

function churrasquinhoParaSnake(str){
    while(str.includes("-")){
        str = str.replace("-", "_");
    }
    alert(str);
}

churrasquinhoParaSnake(paragrafo);