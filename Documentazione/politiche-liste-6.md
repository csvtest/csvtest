# Descrizione

Il dataset riporta i risutati degli scrutini alle elezioni politiche per l'elezione alla Camera dei Deputati del 4.3.2018. I file dati sono estratti dal data entry dell'ufficio servizi elettorali del Comune di Bologna. 

In particolare, abbiamo utilizzato i risultati riguardanti le liste raccolti all'interno del Collegio 6 (Bologna - Zona Urbana Mazzini).

[A COSA CI E' SERVITO?]

# Analisi della qualità informativa

## Data cleansing

La pulizia è stata effettuata per lo più con il programma **_Comma Chameleon_**, CSV editor che permette di aggiungere, eliminare e modificare file csv prodotto da ODI (Open Data Institute).

Le operazioni sono state le seguenti:
1. *Eliminazione di colonne*. In particolare sono state eliminate:

- le colonne che non servivano agli scopi del nostro lavoro;
- le colonne che comparivano più di una volta, con gli stessi valori, nello stesso dataset.

2. *Modifica delle stringhe d'intestazione*. In particolare:

- sono state uniformate le stringhe in modo tale da essere identiche nei due dataset politici (caratteri uppercase e lowercase);
- modificato i nomi dei partiti per farli corrispondere al nome vigente ufficiale del partito (precedentemente erano sigle o denominati in modo errato).

# Analisi giuridica

## Privacy

### Checklist giuridica

| **Privacy** | Domande | Sì/No |
| ----------- | --------| ------|
| | sono i dati liberi da ogni informazione                         personale che possa identificare in modo                        diretto l’individuo?| sì |
| | sono i dati liberi da ogni informazione indiretta che           possa identificare l’individuo? In caso negativo, queste        informazioni sono autorizzate per legge?| sì |
| | sono i dati liberi da ogni informazione sensibile che può essere ricondotta all’individuo? In caso negativo, queste informazioni sono autorizzate per legge? | sì |
| | sono i dati liberi da ogni informazione relativa al soggetto che incrociata con dati comunemente reperibili nel web possa identificare l’individuo? In caso negativo, queste informazioni sono autorizzate per legge? | sì |
| | sono i dati liberi da ogni record relativo a profughi, protetti di giustizia, vittime di violenze o in ogni caso categorie protette? | sì |
| | hai usato un tool per calcolare il rischio di de-anonimizzazione del tuo dataset prima di pubblicarlo? | no |
| | esponi dei servizi di ricerca tali da poter filtrare i dati in modo da ottenere un solo record geolocalizzato? | no |
| **Proprietà intellettuale della sorgente** | | |
| | avete creato voi i dati? | no |
| | siete i proprietari dei dati anche se non li avete creati voi? | sì |
| | siete sicuri di non usare dati per i quali vi è una licenza o un brevetto di terzi? | sì |
| | se i dati non sono vostri avete un accordo o una licenza che vi autorizzi a pubblicarli? | - |
| **Licenza di rilascio** | | |
| | rilasciate i dati di cui possedete la proprietà accompagnati da una licenza? | sì |
| | avete incluso anche la clausola di salvaguardia “In ogni caso, i dati non possono essere utilizzati al fine di identificare nuovamente gli interessati”? | no |
| **Limite alla pubblicazione** | | |
| | hai verificato che non ci siano impedimenti di legge o contrattuali che impediscano la pubblicazione dei dati? | ? |
| **Segretezza** | | |
| | hai verificato se non ci sono motivi di ordine pubblico o di sicurezza nazionale che ti impediscono la pubblicazione dei dati? | ? |
| | hai verificato se non ci sono motivi legati al segreto d’ufficio che impediscono la pubblicazione dei dati? | ? |
| | hai verificato se non ci sono motivi legati al segreto di stato che impediscono la pubblicazione dei dati? | ? |
| **Condizioni economiche** | | |
| | hai verificato di poter rilasciare in modo gratuito i dati senza infrangere qualche norma di finanza pubblica? | ? |
| | se hai imposto condizioni economiche per l’utilizzo dei dati, sei sicuro di avere imposto un prezzo per coprire i soli costi marginali? | - |
| **Temporalizzazione** | | |
| | i dati sono soggetti per legge a restrizioni temporali di pubblicazione? | ? |
| | i dati sono aggiornati frequentemente in modo da sanare eventuali informazioni lesive di persone o organizzazioni? | no |
| | i dati hanno dei divieti di legge o giurisprudenziali che impediscono la loro indicizzazione da parte di motori di ricerca? | ? |
| **Trasparenza**| | | 
| | i dati rientrano nella lista dell’allegato A del d.lgs. 33/2013? | ? |
| | se sì, come sono stati trattati dal responsabile della trasparenza nel sito “Amministrazione trasparente”? | ? |
| | in che forma si possono creare sinergie tra il portale “Amministrazione trasparente” e il portal open data per minimizzare le inconsistenze e favorire la trasparenza del dato aperto? | ? | 

[COMPLETARE RISPOSTE]


### Misure di de-identificazione

#### Revisione preliminare

I dati all'interno del dataset sono adeguatamente trattati. I dati riconducibili a categorizzazioni geografiche (*Sezione elettorale*, *Quartiere*, *Vecchia denominazione quartiere* e *Zona*) hanno valori mappati secondo sistemi di numerazione interni e non immediatamente identificabili. L'ordine di disposizione delle righe segue una numerazione ascendente della *Sezione elettorale*.

| Sezione elettorale | Quartiere | Vecchia denominazione quartiere | Zona |
| -------------------| --------- | ---------------------| -----------------|
| 1 | 3 | 8 | 10 |
| 2 | 3 | 8 | 10 |
| 3 | 3 | 8 | 10 |
| ... | ... | ... | ... |
| 84 | 5 | 7 | 8 |
| 85 | 5 | 7 | 8 |
| 86 | 5 | 7 | 8 |
| ... | ... | ... | ... |

Per quanto riguarda gli *Iscritti* e il *Totale votanti*, è possibile notare come la distribuzione dei valori sia piuttosto stabile a livello quantitativo. All'interno dei vari conteggi di voto (*Totale voti validi*, *Totale voti non validi*, *Totale schede nulle*, *Totale schede bianche*) esistono singoletti o valori comunque molto piccoli ma resta impossibile risalire all'identità dell'elettore singolo.

## Licenze

![CC0 1.0 Universal (CC0 1.0) Donazione al Pubblico Dominio](cc0.jpg "CC0 1.0 Universal (CC0 1.0) Donazione al Pubblico Dominio")

E' presente un URL che descrive il diritto di riutilizzo del dataset (http://dati.comune.bologna.it/node/5). 

La licenza applicata al dataset è **CC0 1.0**. 

Il dataset è dedicato al pubblico dominio attraverso la rinuncia a tutti i diritti protetti dal diritto d'autore, nella misura consentita dalla legge: in questo modo è possibile copiare, modificare, distribuire ed eseguire il dataset, anche a fini commerciali, senza dover chiedere permessi. Ciò significa che tale licenza implica l'appartenenza del dato a *chiunque, senza distinzioni*: non vi è alcuna garanzia sul dataset stesso, e ogni responsabilità per qualsivoglia utilizzo del dataset nella misura consentita dalla legge è declinata.

## Finalità

I dati rilevati sono stati divulgati ed esposti per rendere visualizzabili i risultati delle elezioni politiche del 2018 a Bologna, tra cui:
* il riepilogo dei votanti per la Camera dei Deputati (Collegio 6);
* i risultati delle coalizioni della Camera (Collegio 6);
* i risultati delle liste per quartiere.

La visualizzazione è disponibile presso la [pagina dedicata](http://dati.comune.bologna.it/elezioni_politiche_2018), sul sito di OpenData Bologna.

[SCRIVERE NOSTRA FINALITA']

# Analisi etica

# Analisi tecnica

## Formati

I dataset sono disponibili solo in formato CSV.

## Metadati

I dataset presenti sul sito di OpenData Bologna sono descritti dai seguenti metadati human-readable:
1. **File**: il nome del dataset.
2. **Anno versione**: l'anno al quale la relativa versione si riferisce.
3. **versione**: numero di versione.
4. **Formato**: formato dei dati.
5. **Data rilascio**: data del rilascio del dataset.
6. **Argomento**: keyword che descrive il contenuto dei dataset.
7. **Tag**: keyword che descrive ulteriormente il contenuto dei dataset.
8. **Responsabile**: 
9. **Fonte**: indicazione di autorità e/o provenienza.
10. **Licenza**: tipo di licenza del dataset.

Non sembrano essere corredati da metadati machine-readable.

## URI

Gli URI dei dataset presentano un aspetto roblematico: la *semantica* non perfettamente chiara.

`2009: http://dati.comune.bologna.it/download/file/fid/1136`

## Provenance

La fonte dei dataset è indicata con una semplice stringa di testo (*Servizi elettorali del Comune di Bologna*). Anche la responsabilità è indicata con una stringa di testo (*Ufficio elettorale*), corredata da un link alla pagina dell'ufficio competente (http://www.comune.bologna.it/partecipazione/luoghi/101:4606/3584/). 

Non ci sono metadati di provenance.