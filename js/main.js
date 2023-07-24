// // Esercizio mail

// const emails = [
//   "filetto@gmail.com",
//   "fusillo@gmail.com",
//   "fucile@gmail.com",
//   "filino@gmail.com",
// ];
// // Chiedo all'utente la mail
// const userEmail = prompt("Inserisci la tua mail");
// console.log(userEmail);

// for (let i = 0; i < emails.length; i++) {
//   console.log(emails[i]);
//   if (userEmail == emails[i]) {
//     alert("Accesso consentito");
//   } else {
//     alert("Accesso non consentito");
//   }
// }

// Esercizio dadi

// Genero un numero random da 1 a 6, sia per me che per il computer

const giocatore = Math.floor(Math.random() * 6) + 1;
console.log("GIOCATORE", giocatore);
const computer = Math.floor(Math.random() * 6) + 1;
console.log("COMPUTER", computer);

// Vince il giocatore

if (giocatore > computer) {
  console.log("GIOCATORE WIN");
}

// Perde il giocatore
else if (computer > giocatore) {
  console.log("COMPUTER WIN");
} else {
  console.log("PAREGGIO");
}
