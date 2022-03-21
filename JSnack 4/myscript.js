//In un array sono contenuti i nomi degli invitati, chiedi all’utente il suo nome 
//Comunicagli se può partecipare o no alla festa 
//Interrompi il ciclo appena il nome è stato trovato.

let i = 0;
let lista = ["Aldo", "Domenico", "Pippo", "Giorgio", "Filippo", "Marco"];
let nome = prompt("Inserisci il tuo nome");
let accesso = false;

while (nome == lista[i] || i < lista.length) {
    if (nome == lista[i]) {
        accesso = true;
    }
    i++;
}

if(accesso == true){
    alert("Identificazione riuscita");
}else{
    alert("Identificazione non riuscita");
}

