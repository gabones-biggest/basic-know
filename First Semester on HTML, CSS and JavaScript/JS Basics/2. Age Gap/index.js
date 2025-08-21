let idade = prompt("Digite a sua idade.")

if (idade < 16){
    alert("Não pode entrar no evento.")
    console.log("Não pode entrar no evento.")
} else if (idade >= 16 && idade < 18){
    alert("Pode entrar no evento, porém não pode beber.")
    console.log("Pode entrar no evento, porém não pode beber.")
} else{
    alert("Pode entrar no evento e beber.")
    alert("Se beber não dirija!")
    console.log("Pode entrar no evento e beber.")
    console.log("Se beber não dirija!")
}