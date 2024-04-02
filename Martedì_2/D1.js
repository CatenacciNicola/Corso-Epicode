/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
Esistono 5 tipi di dati primitivi: stringhe, numeri, booleani, null e undefined.

Le stringhe sono delimitate da apici singoli o doppi.
I numeri si indicano senza apici e possono essere interi, decimali (si utilizza il punto invece che la virgola) e negativi.
I booleani hanno solo due valori possibili: true o false.
Null prevede un solo valore che è appunto null. Nn è ne una stringa ne un numero, è un valore nullo ma che esiste.
Undefined prevede solo il valore undefined e rappresenta un valore che non esiste. Non ha assegnato nessun valore, nemmeno null.

Esiste poi un tipo di dato complesso, gli oggetti. Qualsiasi altro elemento previsto nel linguaggio JavaScrips (array, funzioni) è un oggetto.
Negli oggetti possiamo inserire delle proprietà (coppie attributo/valore) e/o delle funzioni.

E' possibile cambiare il tipo di dato di una variabile più volte all'interno dello stesso blocco di codice perchè l'assegnazione di un particolare tipo di dato (tipizzazione) in JavaScript è debole.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


  const myName= 'Nicola';
  console.log(myName);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let x=12;
  let y=20;
  console.log((x+y));
}

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


  var x=12;
  console.log(x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*const myName='Catenacci';
console.log(myName);*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4-x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let name1='john';
  let name2='John';
  console.log(name1!=name2);
  console.log(name1==name2);
  console.log(name1==name2.toLowerCase());
}
