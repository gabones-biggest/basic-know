let random = Math.floor((Math.random() * 10) + 1);
let choice = prompt("Escolha um número entre 1 e 10.");
let streak = 0;

for (let count = 0 ; count < 5 ; count++){
    streak++;
    if (choice == random){
        count = 5;
        alert("Parabéns! Você acertou.");
        if (streak == 1){
            alert("Você precisou de " + streak + " tentativa para acertar.");
        } else{
            alert("Você precisou de " + streak + " tentativas para acertar.");
        }
    } else if (count == 4){
        alert("Você perdeu.")
    } else if (choice > random){
        choice = prompt("Muito alto. Tente de novo!");
    } else if (choice < random){
        choice = prompt("Muito baixo. Tente de novo!");
    }
}

