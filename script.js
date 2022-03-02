/*
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Lasciate perdere il cambiamento del colore della cella (serve una cosa che oggi non abbiamo visto). Qundi le celle saranno tutte dello stesso colore e non succede niente quando le clicchiamo.
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

// Appendo un elemento html con la griglia corretta in base alla scelta dell'utente
let container = document.querySelector(`main`);
let grid = document.createElement(`div`);
grid.className = "grid";
container.append(grid);

const btnPlay = document.getElementById(`play`);

btnPlay.addEventListener('click', play);

// function play() {
//     if ()
// }


// Genero la griglia di difficoltà 1
const grid1 = generateListNumsBetween(1, 100);

// Genero la griglia di difficoltà 2
// const grid2 = generateListNumsBetween(1, 81);

// Genero la griglia di difficoltà 3
// const grid3 = generateListNumsBetween(1, 49);





// FUNCTIONS:
function generateListNumsBetween(min, max) {
    for (let min = 1; min <= max; min++) {
        grid.innerHTML += `<div class="box box-${max}">${min}</div>`
    }
}

// function selectOption() {
//     var difficulty = getElementById(`difficulty`);
//     var displayText = difficulty.options[difficulty.selectedIndex].text;
    
// }