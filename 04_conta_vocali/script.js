console.log("snack 4");

/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascriptaeiou';


// Dichiara la funzione qui.
function countVocal(wordA){
    //inizializzo il contatore delle vocali
    let numVocals=0;
    for(let i=0; i<wordA.length; i++){
        const thisChar=wordA[i];
        //usa "switch" per fare un controllo su "thisChar" e vedere se si tratta di una vocale
        switch(thisChar) {
            case "a":
                // code block
                numVocals +=1;
                break;
            case "e":
                // code block
                numVocals +=1;
                break;
            case "i":
                // code block
                numVocals +=1;
                break;
            case "o":
                // code block
                numVocals +=1;
                break;
            case "u":
                // code block
                numVocals +=1;
                break;
            /* default:
                // code block */
        }
    }
    //restituisco il contatore
    return numVocals;
}


// Invoca la funzione qui e stampa il risultato in console
const vocals=countVocal(word);
console.log(vocals);




//Risultato atteso se si passa 'javascript': 3 (a, a, i)