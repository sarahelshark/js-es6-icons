/* CONSEGNA
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

BONUS
1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2 - popolare le options della select della milestone 3 dinamicamente.

Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome.
Solamente quando la parte logica è completa, ci dedichiamo al css.
NB: L'esercizio My Team con array di oggetti e questo sulle icone sono due esercizi chiave per poter svolgere la milestone che incombe. Dedicateci del tempo e approfondite gli argometi trattati.

*/
/*********************************DYNAMIC SELECT OPTION*****************************************/
//seleziono luogo dove genero le mie select e racchiudo in costante
const containerSelectEl = document.querySelector('.container.mt-4');

 //creo il div per inserire i miei select, template literal
 const selectMarkup = `
  <div class="mb-3">
       <label for="iconTypeSelect" class="form-label">Seleziona il tipo di icona</label>
       <select id="iconTypeSelect" class="form-select">
          <option value="all">Tutte</option>
          <option value="animal">Animali</option>
          <option value="vegetable">Vegetali</option>
          <option value="user">User</option>
       </select>
  </div>
  `
  containerSelectEl.insertAdjacentHTML('beforeend', selectMarkup); //aggiungo le card al luogo deciso precedentemente

/*********************************STRUTTURE DATI************************************************/
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const iconsImgs = [
    `<i class="fa-solid fa-cat"></i>`,
    `<i class="fa-solid fa-crow"></i>`,
    `<i class="fa-solid fa-dog"></i>`,
    `<i class="fa-solid fa-dove"></i>`,
    `<i class="fa-solid fa-dragon"></i>`,
    `<i class="fa-solid fa-horse"></i>`,
    `<i class="fa-solid fa-hippo"></i>`,
    `<i class="fa-solid fa-fish"></i>`,
    `<i class="fa-solid fa-carrot"></i>`,
    `<i class="fa-solid fa-apple-alt"></i>`,
    `<i class="fa-solid fa-lemon"></i>`,
    `<i class="fa-solid fa-pepper-hot"></i>`,
    `<i class="fa-solid fa-user-astronaut"></i>`,
    `<i class="fa-solid fa-user-graduate"></i>`,
    `<i class="fa-solid fa-user-ninja"></i>`,
    `<i class="fa-solid fa-user-secret"></i>`,

];

/*****************************FUNZIONE CAMBIO COLORE*********************************************/
function getRandomColor() {
    // tecnica per generare colori casuali: hashtag davanti concatenato alla cifra autogenerata con math random, moltiplicata per il numero massimo ottenibile con sei cifre esadecimali e convertito con tostring
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor; 
}

// modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico:  per ciascun oggetto nell'array, con forEach__BONUS 1
icons.forEach(icon => {
    icon.color = getRandomColor();
});

/********************************GENERARE LE CARD************************************************/

//seleziono luogo dove genero le mie icon e racchiudo in costante
const iconsRowEl = document.querySelector('.container>.row');

//creo un ciclo dove inserisco i miei 16 oggetti
for(let i = 0; i < icons.length, i<iconsImgs.length; i++ ){
    const icon = icons[i];
    
    const imgs = iconsImgs[i];
    
    // creo un identificatore per poter dopo nascondere le card in pagina
    const cardId = `card-${i}`;
    
    //creo il div per inserire i miei oggetti, template literal
    const iconsMarkup = `
    <div id="${cardId}" class="col-4">

        <div class="card p-5 m-3 ratio ratio-1x1 shadow" style="background-color:${icon.color};height: 80%;">
            <div class="card-bod d-flex flex-column align-items-center justify-content-center;" >
              <div>${imgs}</div>
              <h3> ${icon.name}</h3>
            </div>
        </div>
    </div> 
    `
     iconsRowEl.insertAdjacentHTML('beforeend', iconsMarkup); //aggiungo le card al luogo deciso precedentemente
}

/******************************FUNZIONE FILTRO CARD*************************************************/
function filterIcons() {
    //creo costante per estrapolare value che utilizzero in filter() (voglio filtrare il mio array di oggetti)
    const selectedType = iconTypeSelect.value;

    //Soluzione più semplice
    // Ciclo attraverso tutte le card e nascondo quelle che non corrispondono al tipo selezionato
    for (let i = 0; i < icons.length; i++) {
      const cardId = `card-${i}`;
      const card = document.getElementById(cardId);

      if (selectedType === 'all' || icons[i].type === selectedType) {
        card.style.display = 'block';  // mostra la card se la situazione è quella di default con tutte le carte e/o se le icone sono del tipo selezionato
      } else {
        card.style.display = 'none';  // nascondi la card se la situazione è contraria alla situazione descritta sopra
      }

     }

}

/*******************************TRIGGERO CAMBIAMENTO************************************************/

//variabile + event listener al 'change'
const iconTypeSelect = document.getElementById('iconTypeSelect');
//gestire il cambiamento della select direttamente con la mia funzione 
 iconTypeSelect.addEventListener('change', filterIcons);




