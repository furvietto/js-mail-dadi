// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?
// Consigli del giorno:
// Iniziate dalla parte base, se tutto funziona passiamo a fare dei check su casi limite, fatto questo passiamo a vedere se esistono dei metodi di JS che possono aiutarci.
// I bonus sono sempre da fare in cartella separata.

const mail = prompt("dammi la tua mail");

const mails = ["fulvio-94@gmail.com", "fulvio-94@gmails.it" , "thomas-23@teacher.it" , "elisabetta@-24teacher.it"]

let cond = false;

for (let i = 0; i < mails.length; i++) {
    if (mails[i] == mail) {
        cond = true;
    } 
}

if (cond == true) {
    console.log("puoi accedere");
} else {
    console.log("non puoi accedere");
}