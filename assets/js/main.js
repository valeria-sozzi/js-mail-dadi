
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

//creo le costanti per i bottoni play e stop
const btnPlay = document.getElementById('play') 
const btnStop = document.getElementById('stop') 

btnPlay.addEventListener('click',function(){
    
    //creo le costanti per generare i numeri random
    let myNut = Math.floor(Math.random()*6)+1;
    document.getElementById('my_nut').innerHTML = `Tu hai fatto : ${myNut}`
    let cpuNut = Math.floor(Math.random()*6)+1;
    document.getElementById('cpu_nut').innerHTML = `La cpu ha fatto : ${cpuNut}`

   

    if (myNut < cpuNut) {
       document.getElementById('result').innerHTML='Hai Perso!'
    } else if (myNut === cpuNut){
        document.getElementById('result').innerHTML='Hai Pareggiato!'
    } else {
        document.getElementById('result').innerHTML='Hai Vinto!'
    }
    
}
)

btnStop.addEventListener('click',function(){
    document.getElementById('result').innerHTML=''
    document.getElementById('my_nut').innerHTML=''
    document.getElementById('cpu_nut').innerHTML=''
})