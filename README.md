Milestone 3 nome repo 2: vite-boolfolio
Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios. Colleghiamo questo progetto ad una repo separata.
Milestone 4
Nel componente principale della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel (milestone 1) e recuperiamo tutti i progetti dal nostro back-end. Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.

Milestone 5
Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.
:+1: Bonus:
Gestire la paginazione dei risultati


## Parte 2 ##
leggi le nuove slide su vue router
leggi la documentazione (https://router.vuejs.org/guide/)
inizia ad implementare il sistema di rotte lato vue, creando quattro rotte: home,  about, projects e contacts.
crea i componenti pagina da associare alle quattro rotte: AppHome, AppAbout, AppProjects, AppContacts.
trasferisci la logica usata ieri per il recupero dei progetti nel componente dedicato AppProjects che hai servito tramite la rotta projects