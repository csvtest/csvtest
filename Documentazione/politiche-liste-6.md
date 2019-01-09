# Descrizione

Il dataset riporta i risutati degli scrutini alle elezioni politiche per l'elezione alla Camera dei Deputati del 4.3.2018. I file dati sono estratti dal data entry dell'ufficio servizi elettorali del Comune di Bologna. 

In particolare, abbiamo utilizzato i risultati riguardanti le liste raccolti all'interno del Collegio 6 (Bologna - Zona Urbana Mazzini).

[A COSA CI E' SERVITO?]

# Analisi della qualità informativa

[NON SO COSA SCRIVERE PORCODDIO]

# Analisi giuridica

## Privacy

### Checklist giuridica

| **Privacy** | Domande | Sì/No |
| ----------- | --------| ------|
| | sono i dati liberi da ogni informazione                         personale che possa identificare in modo                        diretto l’individuo?| |
| | sono i dati liberi da ogni informazione indiretta che           possa identificare l’individuo? In caso negativo, queste        informazioni sono autorizzate per legge?| |
| | sono i dati liberi da ogni informazione sensibile che può essere ricondotta all’individuo? In caso negativo, queste informazioni sono autorizzate per legge? | |
| | sono i dati liberi da ogni informazione relativa al soggetto che incrociata con dati comunemente reperibili nel web possa identificare l’individuo? In caso negativo, queste informazioni sono autorizzate per legge? | |
| | sono i dati liberi da ogni record relativo a profughi, protetti di giustizia, vittime di violenze o in ogni caso categorie protette? | |
| | hai usato un tool per calcolare il rischio di de-anonimizzazione del tuo dataset prima di pubblicarlo? | |
| | esponi dei servizi di ricerca tali da poter filtrare i dati in modo da ottenere un solo record geolocalizzato? | |
| **Proprietà intellettuale della sorgente** | | |
| | avete creato voi i dati? | |
| | siete i proprietari dei dati anche se non li avete creati voi? | |
| | siete sicuri di non usare dati per i quali vi è una licenza o un brevetto di terzi? | |
| | se i dati non sono vostri avete un accordo o una licenza che vi autorizzi a pubblicarli? | |
| **Licenza di rilascio** | | |
| | rilasciate i dati di cui possedete la proprietà accompagnati da una licenza? | |
| | avete incluso anche la clausola di salvaguardia “In ogni caso, i dati non possono essere utilizzati al fine di identificare nuovamente gli interessati”? | |
| **Limite alla pubblicazione** | | |
| | hai verificato che non ci siano impedimenti di legge o contrattuali che impediscano la pubblicazione dei dati? | |
| **Segretezza** | | |
| | hai verificato se non ci sono motivi di ordine pubblico o di sicurezza nazionale che ti impediscono la pubblicazione dei dati? | |
| | hai verificato se non ci sono motivi legati al segreto d’ufficio che impediscono la pubblicazione dei dati? | |
| | hai verificato se non ci sono motivi legati al segreto di stato che impediscono la pubblicazione dei dati? | |
| **Condizioni economiche** | | |
| | hai verificato di poter rilasciare in modo gratuito i dati senza infrangere qualche norma di finanza pubblica? | |
| | se hai imposto condizioni economiche per l’utilizzo dei dati, sei sicuro di avere imposto un prezzo per coprire i soli costi marginali? | |
| **Temporalizzazione** | | |
| | i dati sono soggetti per legge a restrizioni temporali di pubblicazione? | |
| | i dati sono aggiornati frequentemente in modo da sanare eventuali informazioni lesive di persone o organizzazioni? | |
| | i dati hanno dei divieti di legge o giurisprudenziali che impediscono la loro indicizzazione da parte di motori di ricerca? | |
| **Trasparenza**| | | 
| | i dati rientrano nella lista dell’allegato A del d.lgs. 33/2013? | |
| | se sì, come sono stati trattati dal responsabile della trasparenza nel sito “Amministrazione trasparente”? | |
| | in che forma si possono creare sinergie tra il portale “Amministrazione trasparente” e il portal open data per minimizzare le inconsistenze e favorire la trasparenza del dato aperto? | | 

### Misure di de-identificazione

#### Revisione preliminare

[DIO CAMALEONTE]

#### De-identificazione

[MADONNA FUNZIONANTE]

## Licenze

![CC0 1.0 Universal (CC0 1.0) Donazione al Pubblico Dominio](cc0.jpg "CC0 1.0 Universal (CC0 1.0) Donazione al Pubblico Dominio")

E' presente un URL che descrive il diritto di riutilizzo del dataset (http://dati.comune.bologna.it/node/5). 

La licenza applicata al dataset è **CC0 1.0**. 

Il dataset è dedicato al pubblico dominio attraverso la rinuncia a tutti i diritti protetti dal diritto d'autore, nella misura consentita dalla legge: in questo modo è possibile copiare, modificare, distribuire ed eseguire il dataset, anche a fini commerciali, senza dover chiedere permessi. Ciò significa che tale licenza implica l'appartenenza del dato a *chiunque, senza distinzioni*: non vi è alcuna garanzia sul dataset stesso, e ogni responsabilità per qualsivoglia utilizzo del dataset nella misura consentita dalla legge è declinata.

## Finalità

# Analisi etica

## Data cleansing

La pulizia è stata effettuata per lo più con il programma **_Comma Chameleon_**, CSV editor che permette di aggiungere, eliminare e modificare file csv prodotto da ODI (Open Data Institute).

Le operazioni sono state le seguenti:
1. *Eliminazione di colonne*. In particolare sono state eliminate:

- le colonne che non servivano agli scopi del nostro lavoro;
- le colonne che comparivano più di una volta, con gli stessi valori, nello stesso dataset.

2. *Modifica delle stringhe d'intestazione*. In particolare:

- sono state uniformate le stringhe in modo tale da essere identiche nei due dataset politici (caratteri uppercase e lowercase);
- modificato i nomi dei partiti per farli corrispondere al nome vigente ufficiale del partito (precedentemente erano sigle o denominati in modo errato).

# Analisi tecnica

## Formati

## Metadati

## URI

## Provenance