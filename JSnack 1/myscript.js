//Crea un array vuoto
let arr = [];

let somma = 0;

//Chiedi all’utente un numero da inserire nell’array.

for (let i = 0; i < arr.length; i++) {
    somma += arr[i];
}

//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

while (somma > 50) {

    let numero = parseInt(prompt("Inserisci un numero"));

    arr.push(numero)
    console.log(arr) 
}