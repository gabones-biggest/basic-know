let word = prompt("Digite uma palavra.");
let drow = word[word.length-1];

for (let i = 2 ; i <= word.length ; i++){
    drow += word[word.length-i];
}

alert(drow);

let compDrow = drow.toLowerCase();
let compWord = word.toLowerCase();

if (compDrow == compWord){
    alert("A palavra é um palíndro.");
}