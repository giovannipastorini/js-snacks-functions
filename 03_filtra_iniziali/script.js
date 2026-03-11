/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

//dichiaro la lettera (l'iniziale)
const letter="M";

// Dichiara la funzione qui.
function initialFilter (arrNames, initialLetter){
    //dichiaro l'array che conterrà le parole filtrate per iniziale
    const filteredArr=[];
    console.log( filteredArr);

    //scorro l'array ricevuto come parametro
    for (let i=0; i<arrNames.length; i++){
        //salvo l'elemento dell'array
        const thisName=arrNames[i];
        //Confronto l'iniziale del nome thisName (elemento posizione 0) con la lettera ricevuta come parametro
        if (thisName[0] ===initialLetter ){
            //aggiungo l'elemento all'array
            filteredArr.push(thisName);
        }
    }
    return filteredArr;  
}



// Invoca la funzione qui e stampa il risultato in console
const arrayFiltered= initialFilter (names, letter);
console.log(arrayFiltered);




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]