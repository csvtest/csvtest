# Descrizione
Questa serie di dataset incorpora i dati riguardanti i redditi per area statistica dei contribuenti bolognesi nel corso degli anni che vanno dal 2009 al 2016.

Le informazioni si riferiscono all'area statistica, al numero contribuenti, al reddito imponibile ai fini IRPEF e al reddito imponibile ai fini dell'addizionale IRPEF.

[A COSA CI SERVE???]

# Analisi della qualità informativa
[ASPETTA DOC ALTRUI]

## Data Cleansing

La pulizia è stata effettuata per lo più con il programma **_Comma Chameleon_**, CSV editor che permette di aggiungere, eliminare e modificare file csv prodotto da ODI (Open Data Institute).

Le operazioni di pulizia effettuate comprendono:

1. *Eliminazione di colonne*; in particolare l'eliminazione delle colonne che non sono servite agli scopi del nostro lavoro.

2. *Modifica delle stringhe d'intestazione*; in particolare l'uniformazione le stringhe in modo tale da essere identiche in tutti i dataset della serie (uppercase e lowercase, trattini, ecc...)

3. *Eliminazione righe*; in particolare:
- eliminazione delle righe che non sono servite agli scopi del nostro lavoro (ad esempio: *Non residenti nell'anno di imposta*; *Senza fissa dimora*)
- eliminazione delle righe che compaiono più volte.

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
| | se i dati non sono vostri avete un accordo o una licenza che vi autorizzi a pubblicarli? | sì |
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
| | hai verificato di poter rilasciare in modo gratuito i dati senza infrangere qualche norma di finanza pubblica? | sì |
| | se hai imposto condizioni economiche per l’utilizzo dei dati, sei sicuro di avere imposto un prezzo per coprire i soli costi marginali? | - |
| **Temporalizzazione** | | |
| | i dati sono soggetti per legge a restrizioni temporali di pubblicazione? | no |
| | i dati sono aggiornati frequentemente in modo da sanare eventuali informazioni lesive di persone o organizzazioni? | no |
| | i dati hanno dei divieti di legge o giurisprudenziali che impediscono la loro indicizzazione da parte di motori di ricerca? | ? |
| **Trasparenza**| | | 
| | i dati rientrano nella lista dell’allegato A del d.lgs. 33/2013? | ? |
| | se sì, come sono stati trattati dal responsabile della trasparenza nel sito “Amministrazione trasparente”? | - |
| | in che forma si possono creare sinergie tra il portale “Amministrazione trasparente” e il portal open data per minimizzare le inconsistenze e favorire la trasparenza del dato aperto? | - | 

[COMPLETARE RISPOSTE]

### Misure di de-identificazione
#### Revisione preliminare
I dati potrebbero rientrare nella categoria di *personal data* in quanto non rappresentano un rischio di de-anonimizzazione di per sé, ma potrebbero farlo se incrociati con altri dati. In particolare:
* se l'*Area statistica* include un territorio particolarmente limitato, e
* se il *Numero contribuenti* è particolarmente ridotto,
vi è il rischio che, facendo la media statistica del reddito per contribuente in quella determinata area, sia più semplice identificare quei contribuenti abitanti in quella determinata zona e con quel determinato reddito. Un esempio, in questo senso, è rappresentato da **_Via del Genio_**. I seguenti dati sono presi dal dataset del 2016:

| Area statistica | N contribuenti | Reddito imponibile ai fini irpef |
| --------- | --------- | --------- |
| Via del Genio | 12 | 833317 |

#### De-identificazione
E' possibile applicare metodi di de-identificazione - come il **_Data Masking_** e la **_Data Reduction_** - ai valori che sotto ad una certa soglia possono rappresentare un rischio di re-identificazione, come il *Numero contribuenti*. Per quanto riguarda i valori potenzialmente sensibili, come il *Reddito imponibile ai fini irpef*, è possibile anonimizzare i valori precisi convertendoli in valori arrotondati secondo la distribuzione in *scaglioni IRPEF*:

| Area statistica | N contribuenti | Reddito imponibile ai fini irpef |
| --------- | --------- | --------- |
| Via del Genio | *2 | tra 55001 e 75000 |

oppure

| Area statistica | N contribuenti | Reddito imponibile ai fini irpef |
| --------- | --------- | --------- |
| Via del Genio | < 100 | tra 55001 e 75000 |

## Licenze

![CC0 1.0 Universal (CC0 1.0) Donazione al Pubblico Dominio](cc0.jpg "CC0 1.0 Universal (CC0 1.0) Donazione al Pubblico Dominio")

E' presente un URL che descrive il diritto di riutilizzo del dataset (http://dati.comune.bologna.it/node/5). 

La licenza applicata al dataset è **CC0 1.0**. 

Il dataset è dedicato al pubblico dominio attraverso la rinuncia a tutti i diritti protetti dal diritto d'autore, nella misura consentita dalla legge: in questo modo è possibile copiare, modificare, distribuire ed eseguire il dataset, anche a fini commerciali, senza dover chiedere permessi. Ciò significa che tale licenza implica l'appartenenza del dato a *chiunque, senza distinzioni*: non vi è alcuna garanzia sul dataset stesso, e ogni responsabilità per qualsivoglia utilizzo del dataset nella misura consentita dalla legge è declinata.

## Finalità
La finalità del dataset è quella di reccogliere dati statistici che si riferiscono ai redditi (imponibili ai fini di calcolare l'imposta sul reddito delle persone fisiche) dei contribuenti bolognesi, dichiarati nell'anno di imposta, per ogni area statistica.

[NOSTRA FINALITA' (PERCHE' LO ABBIAMO USATO?)]

# Analisi etica 
## Considerazioni generali
(VALE)
(ALE)

# Analisi tecnica

## Formati
I dataset sono disponibili solo in formato CSV.
## Metadati
I dataset sono descritti dai seguenti metadati human-readable:
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
Gli URI dei dataset presentano almeno due aspetti problematici:
1. la *semantica* non perfettamente chiara:

`2009: http://dati.comune.bologna.it/download/file/fid/1136`

2. l'inconsistenza del *pattern*, dovuta probabilmente all'impiego da parte dell'organizzazione di un meccanismo di *auto-increment*:

```
2010: http://dati.comune.bologna.it/download/file/fid/1137
2011: http://dati.comune.bologna.it/download/file/fid/1135
2012: http://dati.comune.bologna.it/download/file/fid/1878
```

## Provenance
La fonte dei dataset è indicata con una semplice stringa di testo (*Dichiarazione dei redditi delle persone fisiche*). Anche la responsabilità è indicata con una stringa di testo (*Ufficio Intermedio Entrate / Area Programmazione Controlli e Statistica*), corredata da un link alla pagina dell'ufficio competente (http://www.comune.bologna.it/comune/organigramma/17:1083/899/). 

Non ci sono metadati di provenance.
