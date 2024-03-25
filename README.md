Descrizione:
Creare la nostra prima app utilizzando Vue.js
Usiamo vue dalla cdn, usate le slide per aitutarvi o la documentazione: https://vuejs.org/guide/quick-start.html#using-vue-from-cdn
MILESTONE 1:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
MILESTONE 2:
Leggete queste due pagine della documentazione, dall’inizio alla fine:
Introduction: https://vuejs.org/guide/introduction.html
Template Syntax: https://vuejs.org/guide/essentials/template-syntax.html
Poi aggiungete un file README.md alla repo e in questo file scrivete, per ognuna di queste due pagine un breve testo (7/8 righe ciascuno, circa 100 parole per ogni testo)
In questi testi potete scrivere quello che volete, per esempio:
fare un riassunto di quello che avete capito
segnare le cose che avete letto e che non avete capito
scrivere un elenco di domande che vi sono venute in mente da chiedermi domani a lezione
oppure un elenco di link che avete trovato per approfondire alcune delle cose che avete letto in queste pagine…
appunti sulle funzionalità che avete letto
…
Insomma scrivete qualsiasi cosa possa esservi di aiuto per accompagnarvi nello studio di queste due paginette.
Buon lavoro
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

## Introduction
Vue-js è un framework nato per facilitare la gestione dei contenuti e della logica lato front-end. Utilizza dei file sfc ossia "single file components" detti anche Vue files, questi sono file che raccchiudono html, css e javaScript in un unico file.
Le caratteristiche principale di Vue sono il rendering dichiarativo(non ho capito cos'è) e la reattività : vue cambia all'istante il risultato in html elaborando la logica molto velocemente.
Vue-js si divide in due modi di utilizzo, l'option Api e ilcomposition Api, in linea di massima l'option è il più semplice per chi è ancora inesperto, richiama come linguaggio la creazioni di oggetti oop e ha una struttura ordinata per scrivere, i componenti usano un oggetto di opzioni come i data, le funzioni(method) e il mount (montaggio), grazie a quetst'ultimo è possibile visualizzare in html la logica in js.
La composition Api è più complessa, più libera, consente di fare cose piu complesse e per questo rihiede una maggiore conoscenza di vue e di jssi scrive con il tag "script setup" e definisce la logica di un componente utilizzando funzioni importate(poco chiaro!)
## Essential template
Vue usa una sintassi basata su quella del'html, in modo da poter associare al dom i dati del componente, Vue in pratica esgue del codice javaScript molto ottimizzato ed è in grado di capire il nuemro minimo da sottoporre a rendering quando lo stato dell'app cambia(non chiaro)
la sintassi per interpolare del testo si chiama moustache(baffi) e consiste nelle doppie parentesi graffe con dentro il nome della proprietà corrispondente {{proprietà}}, se invece devo scrivere il codice html "grezzo"va utilizzata la direttiva v-html="proprietà". Le direttive sono attributi speciali tutti preceduti da V- che sta a sottolineare che sono specifici di Vue, anche se con v-html è possibile creare codice Html vue non è adatto alla creazioni di interi template basati su stringhe, va bene invece per singoli componenti. La sintassi mustache non si può utilizzare negli attributi html, si usa la direttiva v-bind, se però il valore associato è null o undefined, la direttiva verrà rimossa dall'elemento posto a rendering ha anche una sintassi abbreviata che consiste nell'uso dei due punti es v-bind:id =>:id. Nel caso in cui attributo e valore js siano scritti uguale si può ulteriormente abbreviare, es :id="id" => :id, quest'ultima funzionalità valida solo dalla versione 3.4. Con V-bind posso anche richiamare un intero elemento scrivento nel valore dell'attributo il nome dell'elemento
Non ho capito le proprietà globali.
v-bind viene usato davanti a href per aggiornare in modo reattivo i l dom, in questo caso il link, v-on è l'equivalente dell'event listener e si abbrevia con la chiocciola es: v-on:click="" => @click="".
si possono usare come espressioni js  degli argomenti dinamici (non ho capito)
meglio non utilizzare il camelcase perchè in html riporterà tutto minuscolo e non funzionerà (ma a me funzione quibdi probabile che non ho capito)