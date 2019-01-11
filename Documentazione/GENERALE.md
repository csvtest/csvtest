# Introduzione (Task 0)

[CONTINUARE ...]

| Task | Titolo | Descrizione |
| ---- | ---- | ---- |
| 0 | Scenario | Spiegazione progetto |
| 1 | Dataset | Selezione, mashup | 
| 2 | Analisi qualità | Requisiti, lista di problemi, pulizia |
| 3 | Analisi etico-giuridica | Privacy, licenze, finalità |
| 4 | Analisi tecnica | Formati, metadati, URI, provenance |
| 5 | Analisi sostenibilità | Modello, curation |
| 6 | Visualizzazione | - |

[CONTINUARE ...]

_______________________________________________________________

# Task 0: Scenario applicativo

[ROBA ...]

_______________________________________________________________

# Task 1: Dataset

Abbiamo selezionato dataset singoli e serie di dataset pubblicati su [OpenData Bologna](http://dati.comune.bologna.it), sito di Bologna dedicato alla trasparenza e accessibilità dei dati aperti, secondo i principi dell'Open Government.

I dataset che abbiamo utilizzato sono:

| Dataset | Nome | Pagina | Formato |
| --- | ---- | ---------- | ------- |
| http://dati.comune.bologna.it/download/file/fid/4267 | 26.01.06_risultati_politiche_<br>2018_bologna_liste_camera_collegio6 | [Risultati politiche 2018 - Bologna Camera](http://dati.comune.bologna.it/node/3328) | CSV |
| http://dati.comune.bologna.it/download/file/fid/4269 | 26.01.08_risultati_politiche_<br>2018_bologna_liste_camera_collegio7 | [Risultati politiche 2018 - Bologna Camera](http://dati.comune.bologna.it/node/3328) | CSV |
| http://dati.comune.bologna.it/download/file/fid/4265 | 26.01.04_risultati_politiche_<br>2018_bologna_liste_senato | [Risultati politiche 2018 - Bologna Senato](http://dati.comune.bologna.it/node/3323) | CSV |
| http://dati.comune.bologna.it/download/file/fid/1136 | redditi_2009_per_area_statistica | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) | CSV |
| http://dati.comune.bologna.it/download/file/fid/1137 | redditi_2010_per_area_statistica | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) | CSV |
| http://dati.comune.bologna.it/download/file/fid/1135 | redditi_2011_per_area_statistica | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) | CSV |
| http://dati.comune.bologna.it/download/file/fid/1878 | redditi2012_areastat | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) | CSV |
| http://dati.comune.bologna.it/download/file/fid/2436 | redditi2013_areastat | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) | CSV |
| http://dati.comune.bologna.it/download/file/fid/3422 | redditi2014_areastat | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) | CSV |
| http://dati.comune.bologna.it/download/file/fid/4304 | redditi2015_areastat | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) | CSV |
| http://dati.comune.bologna.it/download/file/fid/4615 | redditi2016_areastat | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) | CSV |
| http://dati.comune.bologna.it/download/file/fid/4493 | Aree 03.00.02_aree_statistiche_bologna | [Aree statistiche Bologna](http://dati.comune.bologna.it/node/161) | SHP <br> DB <br> PRJ <br> QPJ <br> SHX |
| http://dati.comune.bologna.it/download/file/fid/4494 | Aree 03.00.03_areestat_quartiere | [Aree statistiche Bologna](http://dati.comune.bologna.it/node/161) | CSV |
| http://dati.comune.bologna.it/download/file/fid/4490 | 38.00.03_segnalazioni_czrm2017_area_statistica | [Citizen Relationship Manangement Bologna](http://dati.comune.bologna.it/node/2615) | SHP <br> DB <br> PRJ <br> QPJ <br> SHX |
| http://dati.comune.bologna.it/download/file/fid/4492 | 38.00.05_segnalazioni_czrm2017_tot_tipologia | [Citizen Relationship Manangement Bologna](http://dati.comune.bologna.it/node/2615) | CSV |

[DATASET PULITI?]

[DATASET INTERMEDI?]

[NOSTRO DATASET?]
_______________________________________________________________

# Analisi della qualità informativa

## Requisiti 

I requisiti che abbiamo stabilito per controllare il livello di qualità di un dataset è:
* il livello 5 sulla scala 5-Star Linked Data;
* l'**accuratezza** (semantica e sintattica): la misura secondo la quale un dataset rappresenta correttamente le caratteristiche di un oggetto, una situazione o un evento del mondo reale;
* la **completezza**: la misura secondo la quale un dataset include quei dati che sono necessari al supporto della finalità per cui è stato creato;

[RIVEDERE ...]

| ID | Descrizione | Gravità Problema | Tipologia Problema | Soluzione |
| Acc_1 |
|
|
|
|

[FINIRE -]

Non esistono linee guida interne per la compilazione dei dataset in una maniera univoca. Alcuni CSV utilizzano la virgola come separatore; altri il punto e virgola; altri ancora la tabulazione.

Non esistono vocabolari interni di nomi. Un altro problema ha riguardato la nomenclatura delle intestazioni, che risulta sempre diversa anche all'interno della stessa serie di dataset (ad esempio: *N_contribuenti* ; *N. Contribuenti* ; ...) e dei nomi di aree geografiche (vie, zone, quartieri) che non hanno una forma codificata e che vengono etichettate secondo modalità differenti (ad esempio: *Sant'Orsola* ; *S.Orsola*; *Sant Orsola* ; ...)

All'interno del testo le parole accentate sono codificate secondo modalità differenti. A volte viene utilizzata la lettera accentata, facendo emergere però problematiche di codifica; altre volte viene impropriamente utilizzato l'apostrofo.

Una buona pratica, infine, prevede che ai dataset vadano assegnati nomi autoesplicativi e descrizioni testuali dettagliate.

[CONTINUARE ...]

### Accuratezza

Abbiamo individuato due livelli di accuratezza:

- accuratezza sintattica;
- accuratezza semantica.

Una misura di accuratezza è data dalla ratio tra gli attributi dei dati con valori accurati e il numero dei dati per i quali è richiesta accuratezza. 

### Completezza

Abbiamo individuato diversi livelli di completezza:

- completezza di schema, calcolata in termini di percentuale di valori nulli per concetti e proprietà rispetto al numero totale di valori attesi;
- completezza del record, calcolata in termini di numero di dati associati a un valore non nullo rispetto al numero di dati per cui può essere misurata la completezza;
- completezza di popolazione, calcolata in termini di percentuale di valori nulli rispetto a una popolazione di riferimento.

## Data cleansing

In generale abbiamo cercato di seguire le *best practices* legate ai file CSV nel corso della pulizia del dataset:
1. Abbiamo reso le intestazioni delle colonne subito comprensibili e uniformi; abbiamo quindi semplificato i loro nomi ed eliminato i caratteri speciali.
2. Abbiamo uniformato i nomi all'interno dei file.
3. Abbiamo copiato le versioni pulite dei dataset in formato CSV e codificate in UTF-8.

[... ...]

### DATASET REDDITI

La pulizia è stata effettuata per lo più con il programma [**_Comma Chameleon_**](http://comma-chameleon.io/) o [**Data Curator**](https://theodi.org.au/data-curator/), CSV editor che permette di aggiungere, eliminare e modificare righe, colonne e dati.

Le operazioni di pulizia effettuate comprendono:

1. *Eliminazione di colonne*; in particolare:

- l'eliminazione delle colonne che non servono agli scopi del nostro lavoro;
- l'eliminazione delle colonne che compaiono più di una volta, con gli stessi valori, nello stesso dataset.

2. *Modifica delle stringhe d'intestazione*; in particolare:
 
- l'uniformazione delle stringhe in tutti i dataset (uppercase e lowercase, trattini, ecc...);
- la modifica dei nomi dei partiti per farli corrispondere al nomi vigenti ufficiali (precedentemente resi con sigle o denominati in modo errato).

3. *Eliminazione delle righe*; in particolare:

- eliminazione delle righe che non sono servite agli scopi del nostro lavoro (ad esempio: *Non residenti nell'anno di imposta*; *Senza fissa dimora*);
- eliminazione delle righe che compaiono più volte.

[CONTINUARE ...

[NOSTRO DATASET ... metadati di qualità?]
_______________________________________________________________

# Analisi giuridica

## Privacy

### Checklist giuridica

L'analisi giuridica è necessaria per garantire sostenibilità nel tempo del processo di produzione e pubblicazione dei dati e creare un servizio equilibrato nel rispetto della funzione pubblica e dei diritti dei singoli individui. L’analisi giuridica delle fonti mira quindi a valutare questi delicati equilibri, evidenziando limitazioni d’uso, finalità di competenza, determinazione dei diritti e dei termini di licenza.

Per attuarla, abbiamo utilizzato una *check list* di riferimento per valutare tutti gli aspetti giuridici del ciclo di vita dei dataset. La check list è formata da una serie
di domande, per ciascun aspetto, a cui rispondere con Sì o No.

| **Privacy** | Domande | Sì/No |
| ----------- | --------| ------|
| | sono i dati liberi da ogni informazione                    personale che possa identificare in modo                       diretto l’individuo?| |
| | sono i dati liberi da ogni informazione indiretta che      possa identificare l’individuo? In caso negativo, queste       informazioni sono autorizzate per legge?| |
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

[CONTINUARE ...]

### Misure di de-identificazione

#### Revisione preliminare
Verifichiamo qualora dati specifici possano rientrare nella categoria di *personal data* o no. I dati che si confermano essere *non-personal data* possono essere usati liberamente, cioè senza restrizioni legali.

I *personal data* sono dati che possono identificare una persona vivente e che includono informazioni facilmente integrabili con altre informazioni per perfezionare il processo di re-identificazione.

Gli standard di de-identificazione per i dati contenuti in un dataset sono i seguenti:
- gli identificatori non assolutamente necessari vanno eliminati;
- i valori degli attributi non necessari vanno eliminati; quelli che indicano situazioni fortemente personali necessitano di forti misure di de-identificazione.

##### [DATASET REDDITI]
E' possibile applicare metodi di de-identificazione - come il **_Data Masking_** e la **_Data Reduction_** - ai valori che sotto ad una certa soglia possono rappresentare un rischio di re-identificazione, come il *Numero contribuenti*. Per quanto riguarda i valori potenzialmente sensibili, come il *Reddito imponibile ai fini irpef*, è possibile anonimizzare i valori precisi convertendoli in valori arrotondati secondo la distribuzione in *scaglioni IRPEF*:

| Area statistica | N contribuenti | Reddito imponibile ai fini irpef |
| --------- | --------- | --------- |
| Via del Genio | *2 | tra 55001 e 75000 |

oppure

| Area statistica | N contribuenti | Reddito imponibile ai fini irpef |
| --------- | --------- | --------- |
| Via del Genio | < 100 | tra 55001 e 75000 |

[CONTINUARE ...]

#### De-identificazione
Prendiamo provvedimenti affinché gli individui non siano identificabili tramite l'osservazione dei dati o il loro incrocio. Abbiamo scelto una serie di metodi da applicare:
- soppressione
- aggregazione, arrotondamento, riarrangiamento
- riduzione
- mascheramento, noise

[CONTINUARE ...]

## Licenze

L'informazione sul tipo di licenza è metadato indispensabile per determinare come poter riutilizzare il dataset. Essa deve essere **sempre** specificata, mettendola in evidenza in forma *human-* e *machine-readable*, indicando: 
* nome;
* versione;
* riferimento al testo della licenza.

I dataset pubblicati su OpenData Bologna rispettano queste condizioni. 

### [DATASET REDDITI...]

La licenza associata a questo gruppo di dataset è la [**CC0 1.0**](https://creativecommons.org/publicdomain/zero/1.0/deed.it) (Donazione al Pubblico Dominio). 

![CC0 1.0 Universal (CC0 1.0) Donazione al Pubblico Dominio](cc0.jpg "CC0 1.0 Universal (CC0 1.0) Donazione al Pubblico Dominio")

Sulla pagina di ogni dataset è presente un [link](http://dati.comune.bologna.it/node/5) che porta ad una pagina del sito che descrive il diritto di riutilizzo dei dataset licenziati in questo modo. 

Il dichiarante “*apertamente, pienamente, permanentemente, irrevocabilmente e incondizionatamente rinuncia, abbandona e cede ogni proprio diritto d’autore e connesso, ogni relativa pretesa, rivendicazione, causa e azione, sia al momento nota o ignota (includendo espressamente le pretese presenti come quelle future) relativa all’opera*”. 

In altre parole, il dataset è dedicato al pubblico dominio attraverso la rinuncia a tutti i diritti protetti dal diritto d'autore, nella misura consentita dalla legge: in questo modo è possibile copiare, modificare, distribuire ed eseguire il dataset, anche a fini commerciali, senza dover chiedere permessi. Ciò significa che tale licenza implica l'appartenenza del dato a *chiunque, senza distinzioni*: non vi è alcuna garanzia sul dataset stesso, e ogni responsabilità per qualsivoglia utilizzo del dataset nella misura consentita dalla legge è declinata.

### [CC-BY-SA blablabla]

Le licenze per l’open data con richiesta di attribuzione e condivisione allo stesso modo, consentono di condividere, adattare e creare anche per finalità commerciali nel rispetto però di due vincoli: 
- attribuire la paternità del dataset; 
- distribuire eventuali lavori derivati con la stessa licenza che governa il lavoro originale. 

[NOSTRO DATASET MASHATO]

Si ritiene opportuno fare riferimento ad una licenza unica aperta, che garantisca libertà di riutilizzo, che sia internazionalmente riconosciuta e che consenta di attribuire la paternità dei dataset (attribuire la fonte). Pertanto, si suggerisce l’adozione generalizzata della licenza CC-BY nella sua versione 4.0. Si raccomanda inoltre di gestire l’attribuzione della fonte indicando il nome dell’organizzazione unitamente all’URL della pagina Web dove si trovano i dataset/contenuti da licenziare.

[NOSTRA LICENZA]

## Finalità

[FINALITA' DI OGNI DATASET]
[... ...]
[NOSTRA FINALITA']

_______________________________________________________________

# Analisi tecnica

## Formati

La pubblicazione di dataset in open Data richiede che i dati siano resi disponibili in formati aperti, non proprietari, standardizzati e neutri rispetto agli applicativi necessari per la fruizione dei dati stessi.

Tutti i dataset sono pubblicati in formato **CSV**. 

[NOSTRI FORMATI]

## Metadati

La metadatazione ricopre un ruolo essenziale laddove i dati sono esposti a utenti terzi e a software. I metadati, infatti, consentono una maggiore comprensione e rappresentano la chiave attraverso cui abilitare più agevolmente la ricerca, la scoperta, l’accesso e quindi il riuso dei dati stessi. La classificazione qualitativa dei metadati si fonda su due fattori principali: legame tra dato-metadati e livello di dettaglio.

Il nostro obiettivo è raggiungere il **livello 4** di metadatazione, per cui:
* il legame dato-metadato sia forte: i dati incorporano i metadati che li descrivono;
* il livello di dettaglio sia massimo: i metadati forniscono informazioni relative al dataset e al singolo dato.

[METADATAZIONE CICCIONA PATATONA]

## URI

E' assolutamente necessario garantire che gli URI siano **persistenti**, **dereferenziabili** e **non ambigui**. Dovrebbero essere supportati da un'infrastruttura affidabile.
Dovrebbero seguire il seguente modello di pattern:

`http://{dominio}/{tipo-risorsa}/{concetto}/{riferimento}`

Vanno evitati:
- i numeri di versione: l'URI dovrebbe rimanere stabile tra i successivi cicli iterativi di cambiamento e/o update che seguono la creazione di un dataset;
- le stringhe di query: non possono essere persistenti poiché si affidano a particolari implementazioni;
- le estensioni di file: esse possono, in alternativa, essere associate ai metadati della distribuzione del dataset;
- l'*auto-increment*: meccanismo semplice e conveniente per generare sequenze, si rivela essere potenzialmente problematico nel momento in cui non è possibile assicurare la continuità della sequenza a seguito di un update del dataset.

Per quanto riguarda il nostro dataset mashato, abbiamo deciso di mantenere l'informazione sull'*ownership*, ovvero il nome dell'organizzazione o progetto che ha coniato l'URI (il nostro progetto). Siamo consapevoli del rischio che rappresenta tale decisione, considerando quanto spesso organizzazioni e progetti cambino nome nel corso del tempo; tuttavia confidiamo nel fatto che il nostro progetto mantenga inalterato il proprio nome nel lungo periodo.

[CONTINUARE ...]

## Provenance

La *Provenance* 

[CONTINUARE ...]
_______________________________________________________________

# Analisi della sostenibilità

[CONTINUARE ...]

_______________________________________________________________

# Visualizzazione

[CONTINUARE ...]