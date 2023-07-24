const emails = [
  "filetto@gmail.com",
  "fusillo@gmail.com",
  "fucile@gmail.com",
  "filino@gmail.com",
];
// Chiedo all'utente la mail
const userEmail = prompt("Inserisci la tua mail");
console.log(userEmail);

for (let i = 0; i < emails.length; i++) {
  console.log(emails[i]);
  if (userEmail == emails[i]) {
    alert("Accesso consentito");
  } else {
    alert("Accesso non consentito");
  }
}
