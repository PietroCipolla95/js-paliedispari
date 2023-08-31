/* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/

// due prompt utente per pari e dispari e numero

const userChoose  = prompt('choose pari o dispari');
const userNumber = prompt('type a number between 1 and 5');

console.log(userChoose + userNumber);

// generiamo un numero random per il pc(funzione)

function randomPc() {

    let pcNumber = Math.floor((Math.random() * 5) + 1);
    console.log('il numero generato dal pc è' + '  ' + pcNumber);
    return pcNumber;
    
}

let pcNumber = randomPc();
console.log(pcNumber);

//user number + pc number





//stabiliamo se la somma è pari o dispari(funzione)

//who wins?