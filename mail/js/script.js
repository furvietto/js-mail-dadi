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

// const mail = prompt("dammi la tua mail");
const input = document.querySelector("input");
const container = document.querySelector(".container");
const mails = ["fulvio-94@gmail.com", "fulvio-94@gmails.it" , "thomas-23@teacher.it" , "elisabetta@-24teacher.it"]
const button = document.querySelector("button"); 
const remove = document.querySelector(".remove") 
let cond = false;

remove.addEventListener("click" , function () {
    container.innerHTML = "";
    input.value = "";
})



button.addEventListener("click" , function() {
    if (input.value == "") {

        alert("scrivi qualcosa prima");

    } else {

        for (let i = 0; i < mails.length; i++) {
            if (mails[i] == input.value) {
                cond = true;
            } 
        }
        
        if (cond == true) {
            container.innerHTML = "<h1> puoi accedere bello </h1>"
        } else {
            container.innerHTML = "<h1>non puoi accedere bello </h1>"
        }
    }

    
})
