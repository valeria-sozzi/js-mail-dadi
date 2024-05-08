
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//creo l'array con la lista delle email che hanno accesso
const listEmail = ['valeria@gmail.com','roberto@gmail.com','piero@gmail.com','pina@gmail.com','giorgia@gmail.com']

//creo la costante per il bottone vai e reset
const btnVai = document.getElementById('btn_vai') 
const btnReset = document.getElementById('btn_reset') 

//creo la funzione al click del bottone vai 
btnVai.addEventListener('click',function(){
       
        //prendo l'email che ha inserito l'utente 
        let nameEmail = document.getElementById('email').value

        for (let i = 0; i < listEmail.length; i++){

            if (nameEmail === listEmail[i]) {
               return document.getElementById('validation').innerHTML='Bentornato'
            } else {
                document.getElementById('validation').innerHTML='Accesso negato'
            }
        }

    }
)

btnReset.addEventListener('click',function(){
    document.getElementById('email').value=''
    document.getElementById('validation').innerHTML=''
})

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto

