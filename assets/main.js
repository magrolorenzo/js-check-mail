// Creare un array con un insieme di indirizzi email.
// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)

var email = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];
var controllo = 0;

var user_mail = prompt('Qual è la tua mail?');

console.log(user_mail);

for (var i = 0; i < email.length; i++) {
    if ( user_mail == email[i]) {
        controllo = 1;
        i = email.length;
    }
}

if ( controllo == 0){
    email.push(user_mail);
    alert(' La mail è stata inserita');
    console.log(email);
} else {
    alert(' La mail è già presente nel Array');
}
