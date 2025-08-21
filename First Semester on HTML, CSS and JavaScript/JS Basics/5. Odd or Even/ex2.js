let num = prompt("Digite um número");
verificaPar(num);





function verificaPar(num){
    if (num % 2 == 0){
        alert("Esse é um número par.");
    } else{
        alert("Não é um número par.");
    }
}