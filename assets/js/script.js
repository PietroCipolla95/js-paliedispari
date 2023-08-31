/* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.

*/

// due prompt utente per pari e dispari e numero

const userChoose  = prompt('choose pari o dispari');
const userNumber = Number(prompt('type a number between 1 and 5'));

console.log('hai scelto  ' + userChoose + ' e il tuo numero è  ' + userNumber);
document.getElementById('user_info').innerHTML = 'hai scelto  ' + userChoose + ' e il tuo numero è  ' + userNumber

// generiamo un numero random per il pc(funzione)

function randomPc() {

    let pcNumber = Math.floor((Math.random() * 5) + 1);
    console.log('il numero generato dal pc è' + '  ' + pcNumber);
    document.getElementById('pc_info').innerHTML = 'il numero generato dal pc è' + '  ' + pcNumber
    return pcNumber;
    
}

let pcNumber = Number(randomPc());

//user number + pc number

let sum = userNumber + pcNumber;
console.log('la somma dei due numeri è  ' + sum);
document.getElementById('sum_both').innerHTML = 'la somma dei due numeri è  ' + sum

//stabiliamo se la somma è pari o dispari(funzione)

function isEven() {

    let verifier;

    if (sum % 2 === 0) {

        return verifier = 'pari';              
           
    } 

    return verifier = 'dispari';
    
}

//who wins?

if (isEven() === userChoose) {

    console.log('Il giocatore vince');
    document.getElementById('winner').innerHTML = 'Il giocatore vince'

} else {

    console.log('il pc vince');
    document.getElementById('winner').innerHTML = 'Il pc vince'

}


/* 

Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma

*/

const userWord = prompt('type a word').toLowerCase();

document.getElementById('word_choice').innerHTML = 'la parola scelta è ' + userWord;

function reverseStr(userWord) {

    let reverse = userWord.split('').reverse('').join('');

    let wordCheck;

    if (reverse === userWord) {

        return wordCheck = true;        

    } 

    return wordCheck = false;

}

if (reverseStr(userWord)) {

    document.getElementById('outcome').innerHTML = 'la parola è palindroma';

} else {

    document.getElementById('outcome').innerHTML = 'la parola non è palindroma';

}









 






