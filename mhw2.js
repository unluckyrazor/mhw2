function onHover() {
    
    console.log("hoverato");
    const article = document.querySelector("#flex_item_article_middle");
    
    //prende la data segnata nell'articolo e la appende all'articolo

    
    console.log("hoverato");
    
    flex_item_article_middle.appendChild(date);
    date.textContent=article.dataset.date;
    header_middle.removeEventListener("mouseover", onHover);
   


}

function onLeave(){
    // quando tolgo il mouse sparisce la data 
    date.remove();
    header_middle.addEventListener("mouseover", onHover);


}

function cambiaMidImage() {
    console.log("cliccato");
    midImage.src="imgs/mario.png";
}

function Mostra() {
    const cont_middle = document.querySelector('.middle-flex-cont'); 
    console.log("mostrando");
    cont_middle.classList.add('flex')
    const item_middle = document.querySelectorAll('.mid_flex_article'); 
    
    for (let i of item_middle) {
    console.log("mostrando");
    i.classList.add('block');
    }

    button_altro.remove();

    // poi questo dovrebbe caricare un tot di articoli 
}


function favItem() { 
    star_fav.classList.add('fav');  
}

function provaAccedi(){
    flex_item_article_middle.remove();
    const accedi = document.createElement('input');
    flex_container_middle.appendChild(accedi);
    button_altro.remove();
    bottone.remove();
}

// pulsante che mostra altri articoi
const button_altro = document.querySelector("#mostra-altro")
button_altro.addEventListener("click", Mostra);




//questa è una prova di ascoltare il mouse che va sopra ad una immagine e cambiava l'immagine l'ho tolto
//const mid_image_container = document.querySelector(".mid_image_container");
// mid_image_container.addEventListener("mouseover", onHover);

// voglio una arrow in overlay sul'articolo principlae che mi cambia immagine 
// e testo al massimo . 
const arrow_button = document.querySelector(".arrow");
const midImage = document.querySelector(".big_article_image_middle")
arrow_button.addEventListener("click", cambiaMidImage);;

//pulsante preferito cambia colore quando lo clicco

const star_fav = document.querySelector(".star");
star_fav.addEventListener("click", favItem);

// mettera delle caselle di testo 
const bottone =  document.querySelector(".accedi");
bottone.addEventListener("click", provaAccedi)

//hover su titolo dell'articolo mid e spunta la data passata come data-* in html
// quando tolgo il mouse toglie la data

const date = document.createElement('span');
date.classList="data";
const header_middle= document.querySelector(".middle_article_header");

header_middle.addEventListener("mouseover", onHover);
header_middle.addEventListener("mouseleave", onLeave);


/* Mini-homework 2

usare document.createElement() per creare dinamicamente oggetti HTML a partire da contenuti definiti in JavaScript; ok 
modificare dinamicamente l’URL di un’immagine tramite l’attributo src; ok
modificare dinamicamente la classe degli elementi agendo sulla proprietà classList; ok
mostrare o nascondere dinamicamente parti della pagina assegnando o rimuovendo classi CSS che modificano la proprietà display; ok
utilizzare attributi data-*. ok




Alcuni esempi di funzionalità che potete aggiungere sono le seguenti:

pulsante “leggi di più”, che mostra o nasconde dinamicamente alcuni elementi;
cambiare una o più immagini della pagina quando l’utente clicca o si muove sopra certi elementi;
aggiungere una classe “preferito” (con conseguenti modifiche estetiche definite in CSS) quando l’utente clicca su certi elementi della pagina;
conservare informazioni negli attributi data-*, da usare per mostrare dati aggiuntivi quando l’utente clicca o si muove sopra certi elementi.
*/