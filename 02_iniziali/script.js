/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function extractInitial(nomi) {
    //dichiaro un array da riempire con le iniziali
    const initialArr=[];
    console.log(initialArr);
    
    //scorro l'array ricevuto come parametro
    for (let i=0; i<nomi.length; i++){
        const thisName =nomi[i];
        //salvo in una variabile l'iniziale (ovvero l'elemento della stringa in posizione 0)
        const thisInitial = thisName [0];
        //aggiorno l'array delle iniziali
        initialArr.push(thisInitial);
    }
    return  initialArr;
}

// Invoca la funzione qui e stampa il risultato in console

const InitialsArray= extractInitial(names);
console.log(InitialsArray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]