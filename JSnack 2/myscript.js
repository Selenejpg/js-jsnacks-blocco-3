//Fai inserire un numero, che chiameremo N, all’utente.
let n = parseInt(prompt("Inserisci un numero"))
let i = 0;

//Genera N array
while (i < n) {
    let arr = []

    //Ognuno formato da 10 numeri casuali da 1 a 100
    for (let c = 0; c < 10; c++) {
        let numeroCasuale = Math.floor(Math.random() * 100) +1; 
        //Ogni volta che ne crei uno, stampalo.
        arr.push(numeroCasuale)
    }

    console.log(arr)
    i++;
    
}




