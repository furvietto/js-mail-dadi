// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?
// Consigli del giorno:
// Iniziate dalla parte base, se tutto funziona passiamo a fare dei check su casi limite, fatto questo passiamo a vedere se esistono dei metodi di JS che possono aiutarci.
// I bonus sono sempre da fare in cartella separata.

const button = document.getElementById("bottone");
const testo = document.querySelector(".testo");
const number = document.querySelector(".number");

button.addEventListener("click", function () {
    const user = Math.floor(Math.random() * 6) + 1;
    const computer = Math.floor(Math.random() * 6) + 1;
    // testo.innerHTML = "";
    number.innerHTML = `user ha fatto ${user} e il computer ${computer}`;  
     

   if (user > computer) {
    testo.innerHTML = "<h1> ha vinto l'utente </h1>";
   } else if(computer > user) {
    testo.innerHTML = "<h1> ha vinto il computer </h1>" ;
   } else {
       testo.innerHTML = "<h1> pareggio </h1>"
   }
//    if (user > computer) {
//        testo.append(" ha vinto l'utente");
//    } else {
//     testo.append("ha vinto il computer" );
//    }
})