/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
var x=5;
var y=5;
if(x>y){
  document.write(x+" maggiore di " +y);
}
else if(x<y){
  document.write(y+" maggiore di " +x);
}
else{
  document.write("i due numeri sono uguali");
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
var x=6;
if(x!=5){
  console.log("not equal");
}
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
var x=15;
if(x%5==0){
  console.log("divisibile per 5");
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
var x=8;
var y=5;
if(x==8 || y==8){
  document.write("Uno dei due numeri è uguale a 8");
}
else if(x+y==8 || x-y==8 || y-x==8){
  document.write("la somma o la sottrazione dei sue numeri è uguale a 8");
}
else{
  document.write("ne i due numeri ne la loro somma/differenza è uguale a 8");
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
var totalShoppingCart=20;
if (totalShoppingCart>50){
  document.write("Spese di spedizione gratuite! Totale del carrello "+totalShoppingCart+"€");
}
else{
  document.write("Spese di spedizione 10€. Totale del carrello "+(totalShoppingCart+10)+"€");
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
var ShoppingCart=40;
var totalShoppingCart=ShoppingCart-(ShoppingCart*20/100);
if (totalShoppingCart>50){
  document.write("Spese di spedizione gratuite! Totale del carrello "+totalShoppingCart+"€");
}
else{
  document.write("Spese di spedizione 10€. Totale del carrello "+(totalShoppingCart+10)+"€");
}
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
var x=15;
var y=7;
var z=8;
if(x>y && y>z){
  console.log(x, y, z)
}
else if(x>z && z>y){
  console.log(x, z, y)
}
else if(y>x && x>z){
  console.log(y, x, z)
}
else if(y>z && z>x){
  console.log(y, z, x)
}
else if(z>x && x>y){
  console.log(z, y, x)
}
else if(z>y && y>x){
  console.log(z, x, y)
}
else{
  console.log()
}
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
var Valore="10";
var TipoDiValore= typeof Valore;
console.log(TipoDiValore);
if(TipoDiValore=="number"){
  console.log("variabile di tipo NUMBER")
}
else{
  console.log("variabile di tipo "+TipoDiValore)
}
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
var x=7;
if(x%2==0){
  document.write(x+" è pari");
}
else{
  document.write(x+" è dispari");
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.city='Toronto';
console.log(me);
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
delete me.lastName;
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
me.skills.pop;
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let myarray[];
myarray.push(1);
myarray.push(2);
myarray.push(3);
myarray.push(4);
myarray.push(5);
myarray.push(6);
myarray.push(7);
myarray.push(8);
myarray.push(9);
myarray.push(10);
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
myarray[9]=100;
*/
