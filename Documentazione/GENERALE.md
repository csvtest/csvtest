# Introduzione
Il progetto è stato sviluppato nell'ambito dell' esame di *Open Access and Digital Ethics* del corso di laurea magistrale **Digital Humanities and Digital Knowledge** dell' Università di Bologna, da:
- Sebastian Barzaghi 
- Alessandra Foschi
- Fabio Mariani
- Valentina Pasqual

Si inserisce in questo contesto **BOLIDE** (Bologna BLABLA), il cui obiettivo passa dall'analisi etico-giuridica e tecnica di una particolare raccolta di Open Government Data, per la creazione di una nuova raccolta, pulita ed arricchita, seguendo le *Best Practices* della classificazione "**5 Stelle Open Data**".  Tale sistema di classificazione, proposto da Tim Berners-Lee, si basa sul concetto di Semantic Web, e prevede: 1) dati disponibili sul web con una licenza aperta; 2) dati in formato strutturato per la facile interpretazione da parte di un sofware 3) dati in un formato non proprietario 4) uso di standard aperti definiti dalla W3C, come RDF, per l'identificazione di oggetti 5) presenza di collegamenti ad altri dati (Linked Open Data).

L'Output del lavoro è presentato sottoforma di un Sito Web che possa permettere, a diverse tipologie di utenti, il riuso delle risorse informative ai fini di studio e ricerca. Tale risorsa contiene:
- la documentazione del progetto
- l'analisi etico-giuridica e tecnica dei dataset utilizzati come fonte
- nuovi dataset puliti, de-anonimizzati e mashati
- il modello RDF, in accordo con ontologie condivise dalla comunità di riferimento
- una data visualization fruibile anche dagli utenti meno esperti

## Tabella dei contenuti
Il piano di lavoro è stato suddiviso nelle seguenti sezioni:

1. [Scenario applicativo](#scenario-applicativo)
2. [Dataset](#dataset)
    1. [Dataset usati](#dataset-usati)
    2. [Dataset puliti](#dataset-puliti)
    3. [Dataset intermedi](#dataset-intermedi)
    4. [Dataset finali](#dataset-finali)
3. [Analisi della qualità informativa](#analisi-della-qualità-informativa)
    1. [Requisiti](#requisiti)
4. [Analisi etico-giuridica](#analisi-etico-giuridica)
    1. [Privacy](#privacy)
        1. [Checklist giuridica](#checklist-giuridica)
        2. [Misure di de-identificazione e pulitura](#misure-di-de-identificazione-e-pulitura)
            1. [Misure di de-identificazione](#misure-di-de-identificazione)
            2. [Pulitura](#pulitura)
        3. [Licenze](#licenze)
        4. [Finalità](#finalità)
5. [Analisi tecnica](#analisi-tecnica)
    1. [Formati](#formati)
        1. [Distribuzioni](#distribuzioni)
    2. [Metadati](#metadati)
        1. [Metadatazione dei dataset iniziali](#metadatazione-dei-dataset-iniziali)
        2. [Metadatazione dei dataset finali](#metadatazione-dei-dataset-finali)
    3. [Provenance](#provenance)
        1. [Provenance dei dataset iniziali](#provenance-dei-dataset-iniziali)
        2. [Provenance dei dataset finali](#provenance-dei-dataset-finali)
    4. [URI](#uri)
        1. [URI dei dataset iniziali](#uri-dei-dataset-iniziali)
        2. [URI dei dataset finali](#uri-dei-dataset-finali)
6. [Analisi della sostenibilità](#analisi-della-sostenibilità)
7. [Visualizzazione](#visualizzazione)

_______________________________________________________________

# Scenario applicativo
Dalle elezioni del 1948, prime elezioni della storia italiana dopo il periodo di dittatura fascista in cui si potè votare per Camera e Senato, l’Emilia-Romagna ha sempre votato in maggioranza le forze di (centro)sinistra; le ultime Politiche del 4 marzo 2018 ci hanno invece restituito una differente cartina regionale.
Partendo da questa considerazione abbiamo deciso di analizzare la situazione politico-economica-sociale Bolognese degli ultimi anni, per introdurre l'utente alla questione, lasciandolo però libero di analizzare ed interpretare tali dati a suo piacimento.
_______________________________________________________________

# Dataset
Ai fini del progetto abbiamo utilizzato dataset singoli e serie di dataset pubblicati su [OpenData Bologna](http://dati.comune.bologna.it), Sito Web del progetto **OpenData Comune di Bologna** dedicato alla trasparenza e accessibilità dei dati aperti, secondo i principi dell'Open Government. All'interno dei sito il Comune di Bologna pubblica e mette a disposizione interessanti collezioni di dataset di natura sociale, economica, geografica e politica, in formato open, relative alla Città Metropolitana di Bologna. 


## Dataset usati
I dataset che abbiamo utilizzato sono:

| ID | URI | Nome | Pagina |
| -- | --- | ---- | ------ |
| 1.0 | http://dati.comune.bologna.it/download/file/fid/4267 | 26.01 06_risultati_politiche_2018_bologna_liste_camera_collegio6 | [Risultati politiche 2018 - Bologna Camera](http://dati.comune.bologna.it/node/3328) |
| 1.1 | http://dati.comune.bologna.it/download/file/fid/4269 | 26.01.08_risultati_politiche_<br>2018_bologna_liste_camera_collegio7 | [Risultati politiche 2018 - Bologna Camera](http://dati.comune.bologna.it/node/3328) | 
| 2.0 | http://dati.comune.bologna.it/download/file/fid/4265 | 26.01.04_risultati_politiche_<br>2018_bologna_liste_senato | [Risultati politiche 2018 - Bologna Senato](http://dati.comune.bologna.it/node/3323) | 
| 3.0 | http://dati.comune.bologna.it/download/file/fid/1136 | redditi_2009_per_area_statistica | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) | 
| 3.1  | http://dati.comune.bologna.it/download/file/fid/1137 | redditi_2010_per_area_statistica | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) |
| 3.2 | http://dati.comune.bologna.it/download/file/fid/1135 | redditi_2011_per_area_statistica | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) |
| 3.3 | http://dati.comune.bologna.it/download/file/fid/1878 | redditi2012_areastat | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) |
| 3.4 | http://dati.comune.bologna.it/download/file/fid/2436 | redditi2013_areastat | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) |
| 3.5 | http://dati.comune.bologna.it/download/file/fid/3422 | redditi2014_areastat | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) |
| 3.6 | http://dati.comune.bologna.it/download/file/fid/4304 | redditi2015_areastat | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) |
| 3.7 | http://dati.comune.bologna.it/download/file/fid/4615 | redditi2016_areastat | [Redditi per area statistica](http://dati.comune.bologna.it/node/244) |
| 4.0 | http://dati.comune.bologna.it/download/file/fid/1275 | Aree 03.00.02_aree_statistiche_bologna | [Aree statistiche Bologna](http://dati.comune.bologna.it/node/1030) |
| 4.1 | http://dati.comune.bologna.it/download/file/fid/4494 | Aree 03.00.03_areestat_quartiere | [Aree statistiche Bologna](http://dati.comune.bologna.it/node/161) |
| 5.0 | http://dati.comune.bologna.it/download/file/fid/4490 | 38.00.03_segnalazioni_czrm2017_area_statistica | [Citizen Relationship Manangement Bologna](http://dati.comune.bologna.it/node/2615) |
| 5.1 | http://dati.comune.bologna.it/download/file/fid/4492 | 38.00.05_segnalazioni_czrm2017_tot_tipologia | [Citizen Relationship Manangement Bologna](http://dati.comune.bologna.it/node/2615) |
| 6.0 | http://dati.comune.bologna.it/download/file/fid/4321 | annuale_popolazione_residente_sezioni_aree_qze_sesso | [Popolazione residente per età, sesso, cittadinanza, quartiere e zona area statistica e sezione censimento](http://dati.comune.bologna.it/node/2952) |
| 7.0 | http://dati.comune.bologna.it/download/file/fid/1737 | 03.00.34_zone | [Zone Bologna](http://dati.comune.bologna.it/node/1184) |

Nella documentazione i dataset pubblicati nella tabella precedente vengono raccolti nei seguenti blocchi: 

| Sigla Dataset | ID |
| ------------- | -- |
| D. POLITICHE  | 1.0, 1.1, 2.0 |
| D. REDDITI    | 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7 |
| D. AREE STATISTICHE | 4.0, 4.1 |
| D. CITIZEN MANAGEMENT | 5.0, 5.1 |
| **_D. CENSIMENTO_** | 6.0 |
| D. ZONE | 7.0 |

## Dataset puliti
I dataset che abbiamo utilizzato, ma ripuliti:
    
| Dataset ID | URI (pulito) |
| ---------- | ------------ |
| 1.0 |  |  
| 1.1 |  |  
| 2.0 |  |  
| 3.0 |  |  
| 3.1 |  |  
| 4.0 |  |  
| 4.1 |  |  
| 5.0 |  |  
| 5.1 |  |
| 6.0 |  |
| 7.0 |  |

## Dataset intermedi
I dataset che abbiamo generato nel corso del progetto integrando i dati selezionati all' interno dei dataset ripuliti:

| Dataset Intermedio | D1 | D2 | D3 | D4 | D5 | D6 | D7 | D8 | D9 |
| ---------- | --------- | --------- | ---------- | --- | --- | --- | --- | --- | --- |
| POLITICHE SENATO | 26.01.04_risultati_politiche_2018_bologna_liste_senato.csv | aree_statistiche.csv | | | | | | | |
| POLITICHE CAMERA | 26.01.06_risultati_politiche_2018_bologna_liste_camera_collegio6 | 26.01.08_risultati_politiche_2018_bologna_liste_camera_collegio7.csv | aree_statistiche.csv | | | | | | |
| REDDITI | redditi_2009_per_area_statistica.csv | redditi_2010_per_area_statistica.csv | redditi_2011_per_area_statistica.csv | redditi2012_areastat.csv | redditi2013_areastat.csv | redditi2014_areastat.csv | redditi2015_areastat.csv | redditi2016_areastat.csv | aree_statistiche.csv |
| SEGNALAZIONI | 38.00.03_segnalazioni_czrm2017_area_statistica.zip | 38.00.05_segnalazioni_czrm2017_tot_tipologia.csv |  aree_statistiche.csv | | | | | | |

## Dataset finali
I nostri dataset finali, risultanti dall'integrazione dei dati contenuti all'interno dei dataset intermedi:

|

|

[**LINK PAGINA DATASET FINALI DEL SITO**]

|

|
_______________________________________________________________

# Analisi della qualità informativa

## Requisiti 
I requisiti necessari, stabiliti dalle **Linee guida nazionali per la valorizzazione del patrimonio informativo pubblico** alla voce [Qualità dei dati](https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/it/bozza/aspettiorg.html#qualita-dei-dati), per controllare il livello di qualità informativa sono:

|  | Accuratezza | Completezza <br> (dati) | Coerenza | Tempestività |
| -------| ----------- | --------- | ----- | ----- |
| **Politiche** |  |  |  |  |  |
| 1.0 - 1.1 - 2.0 | alcuni totali inseriti nella nomenclatura; <br> ambiguità semantica (*Totale voti di cui*); <br> | True | uso arbitrario di uppercase e lowercase; | ["Scadenza regolare"](http://dati.comune.bologna.it/progetto) |
| **Redditi** |  |  |  |  |  |
| 3.0 - 3.7 | grossolanità della sintassi di nomenclatura; | True | sovraffollamento di semi-colon (2011); <br> "*SENZA FISSA DIMORA*" e "*NON RESIDENTI NELL' ANNO DI IMPOSTA*" presenti sono nel 2014; | ["Scadenza regolare"](http://dati.comune.bologna.it/progetto) |
| **Aree** |  |  |  |  |  |
| 4.0 | nomenclatura non armonizzata con [4.1] | True | True | ["Scadenza regolare"](http://dati.comune.bologna.it/progetto) |
| 4.1 | nomenclatura incoerente; | True | True | ["Scadenza regolare"](http://dati.comune.bologna.it/progetto) |
| **Segnalazioni** |  |  |  |  |  |
| 5.0 | nomenclature non armonizzate con [5.1]; <br> sintassi di *TIPO_AREA_* | True, rischio di de-anonimizzazione | True | ["Scadenza regolare"](http://dati.comune.bologna.it/progetto) |
| 5.1 | semantica troppo generica di *Category* <br> semantica poco chiara in alcuni casi di *Subcategory_1*, *Subcategory_2*, *Subcategory_3* | mancano spiegazioni di *Category*; <br> mancano spiegazioni di *Subcategory_1*, *Subcategory_2*, *Subcategory_3*; | presenza di segnalazioni de-anonimizzate; | ["Scadenza regolare"](http://dati.comune.bologna.it/progetto) |
| 6.0 | differenza tra *Età* ed *Età grandi* poco chiara | True, rischio di de-anonimizzazione | True | ["Scadenza regolare"](http://dati.comune.bologna.it/progetto) |
| 7.0 | *offset* delle coordinate: in media {0.00005 N, 0.00106 E}  | True | True | ["Scadenza regolare"](http://dati.comune.bologna.it/progetto) |

I requisiti aggiuntivi che abbiamo stabilito per controllare il livello di qualità informativa sono:

|  |  |  |
| -------| ----------- | --------- |
| **Completezza**<br>(del **dataset**) | Percentuale di valori non-nulli nel dataset | Script(**mettere link**) |
| **Disponibilità** | Analisi dell'URI | [URI dei dataset](#uri-dei-dataset) |
| **Processabilità** | Analisi dei formati | [Formati](#formati) |
| **Credibilità** | Metadati di *provenance* | [Provenance](#provenance) |
| **Conformità** | Metadati descrittivi | [Metadati](#metadati) |

### Indici di completezza
Gli indici di completezza che abbiamo calcolato sono i seguenti:

| Dataset | Valori totali | Valori nulli | Completezza |
| ------- | ------------- | ------------ | ----------- |
| Politiche | - | - | - |
| 1.0 | 10428 | 0 | 100% |
| 1.1 | 4257 | 0 | 100% |
| 2.0 | 15130 | 0 | 100% |
| Redditi | - | - | - |
| 3.0 | 92 | 0 | 100% |
| 3.1 | 92 | 0 | 100% |
| 3.2 | 3097 | 0 | 100% |
| 3.3 | 92 | 0 | 100% |
| 3.4 | 92 | 0 | 100% |
| 3.5 | 94 | 0 | 100% |
| 3.6 | 92 | 0 | 100% |
| 3.7 | 92 | 0 | 100% |
| Aree | - | - | - |
| 4.0 | 540 | 0 | 100% |
| 4.1 | 360 | 0 | 100% |
| Segnalazioni | - | - | - |
| 5.0 | 76170 | 0 | 100% |
| 5.1 | 63485 | 6695 | 89.45% |
| Censimento | - | - | - |
| 6.0 | 91350 | 0 | 100% |

Dalla tabella è possibile osservare come i dataset scelti siano tendenzialmente completi dal punto di vista dei valori non-nulli. Un'eccezione a questa tendenza è rappresentata dal Dataset Segnalazioni 5.1, con un indice di completezza pari a 89.45%. Il conteggio dei valori non-nulli totali, inoltre, ci ha permesso fin da subito di osservare altre peculiarità riguardanti le popolazioni dei vari dataset. E' interessante notare soprattutto osservare la tendenza sostanzialmente uniforme (92) all'interno della serie dei Redditi, ad eccezione di 3.2 (Redditi del 2011), con ben 3097 (!) valori non-nulli, e di 3.5 (Redditi del 2014), con due valori in più rispetto al normale (94).

## Misure di qualità nella metadatazione
Vedere sezione [Metadatazione dei dataset finali](#metadatazione-dei-dataset-finali) per l'inserimento delle misure di qualità secondo le best practices contenute nel [Data Quality Vocabulary](https://www.w3.org/TR/vocab-dqv/).
_______________________________________________________________

# Analisi etico-giuridica

## Privacy

### Checklist giuridica
L'analisi giuridica è necessaria per garantire sostenibilità nel tempo del processo di produzione e pubblicazione dei dati e creare un servizio equilibrato nel rispetto della funzione pubblica e dei diritti dei singoli individui. L’analisi giuridica delle fonti mira quindi a valutare questi delicati equilibri, evidenziando limitazioni d’uso, finalità di competenza, determinazione dei diritti e dei termini di licenza.

Per attuarla, abbiamo utilizzato una *check list* di riferimento per valutare tutti gli aspetti giuridici del ciclo di vita dei dataset. La check list è formata da una serie
di domande, per ciascun aspetto, a cui rispondere con Sì, No o Non Verificabile (?).

| **Privacy** | Domande | D.Elezioni |  D.Redditi | D.Segnalazioni | D.Aree Statistiche |
| ----------- | --------| ------|--------|-------|---------|
| | sono i dati liberi da ogni informazione                    personale che possa identificare in modo                       diretto l’individuo?|sì |sì| sì | sì| |
| | sono i dati liberi da ogni informazione indiretta che      possa identificare l’individuo? In caso negativo, queste       informazioni sono autorizzate per legge?|sì |sì|no  |sì | |
| | sono i dati liberi da ogni informazione sensibile che può essere ricondotta all’individuo? In caso negativo, queste informazioni sono autorizzate per legge? |sì |no|no |sì | |
| | sono i dati liberi da ogni informazione relativa al soggetto che incrociata con dati comunemente reperibili nel web possa identificare l’individuo? In caso negativo, queste informazioni sono autorizzate per legge? |sì |no|no |sì | |
| | sono i dati liberi da ogni record relativo a profughi, protetti di giustizia, vittime di violenze o in ogni caso categorie protette? |sì |sì| no| sì| |
| | hai usato un tool per calcolare il rischio di de-anonimizzazione del tuo dataset prima di pubblicarlo? |? |?|?|?|
| | esponi dei servizi di ricerca tali da poter filtrare i dati in modo da ottenere un solo record geolocalizzato? | no|no|sì|no|
| **Proprietà intellettuale della sorgente** | | |
| | avete creato voi i dati? | sì| sì| sì |sì|
| | siete i proprietari dei dati anche se non li avete creati voi? |/ |/|/|/|
| | siete sicuri di non usare dati per i quali vi è una licenza o un brevetto di terzi? | sì |sì| sì| sì|
| | se i dati non sono vostri avete un accordo o una licenza che vi autorizzi a pubblicarli? |/ |/|/|/|
| **Licenza di rilascio** | | |
| | rilasciate i dati di cui possedete la proprietà accompagnati da una licenza? | sì|sì|sì| sì|
| | avete incluso anche la clausola di salvaguardia “In ogni caso, i dati non possono essere utilizzati al fine di identificare nuovamente gli interessati”? | no|no|no|no|
| **Limite alla pubblicazione** | | |
| | hai verificato che non ci siano impedimenti di legge o contrattuali che impediscano la pubblicazione dei dati? |?/non sono presenti | ? / sono presenti |?/ sono presenti | ?/ non sono presenti|
| **Segretezza** | | |
| | hai verificato se non ci sono motivi di ordine pubblico o di sicurezza nazionale che ti impediscono la pubblicazione dei dati? |?/ non sono presenti |?/ sono presenti | ?/ sono presenti | ?/non sono presenti |
| | hai verificato se non ci sono motivi legati al segreto d’ufficio che impediscono la pubblicazione dei dati? | ?/ non sono presenti | ?/ non sono presenti | ?/ non sono presenti | ?/ non sono presenti
| | hai verificato se non ci sono motivi legati al segreto di stato che impediscono la pubblicazione dei dati? |?/ non sono presenti | ?/ non sono presenti | ?/ non sono presenti | ?/ non sono presenti |
| **Condizioni economiche** | | |
| | hai verificato di poter rilasciare in modo gratuito i dati senza infrangere qualche norma di finanza pubblica? |?/ non viene infranta |?/ non viene infranta |?/ non viene infranta |?/ non viene infranta |
| | se hai imposto condizioni economiche per l’utilizzo dei dati, sei sicuro di avere imposto un prezzo per coprire i soli costi marginali? |/  |/ |/ |/ |
| **Temporalizzazione** | | |
| | i dati sono soggetti per legge a restrizioni temporali di pubblicazione? | no|no|no|no|
| | i dati sono aggiornati frequentemente in modo da sanare eventuali informazioni lesive di persone o organizzazioni? |? | ? | ?| ?|
| | i dati hanno dei divieti di legge o giurisprudenziali che impediscono la loro indicizzazione da parte di motori di ricerca? |no |no|no|no|
| **Trasparenza**| | | 
| | i dati rientrano nella lista dell’allegato A del d.lgs. 33/2013? | no|no|no|no|
| | se sì, come sono stati trattati dal responsabile della trasparenza nel sito “Amministrazione trasparente”? | /|/|/|/|
| | in che forma si possono creare sinergie tra il portale “Amministrazione trasparente” e il portal open data per minimizzare le inconsistenze e favorire la trasparenza del dato aperto? |/ |/|/|/| 

## Misure di de-identificazione e pulitura

### Misure di de-identificazione
Nell'elaborazione della check-list abbiamo preso coscienza di criticità all'interno di alcuni dataset riguardanti la presenza di possibili personal data. I dati che si confermano essere *non-personal data* possono essere infatti usati liberamente, cioè senza restrizioni legali, ma qualora dati specifici possano rientrare nella categoria di *personal data*, o se incrociati con altri dati reperibili sul web possano portare all'identificazione dell'individuo e/o dei suoi personal data, si incorrerebbe in grosse problematiche legali.

L'Articolo 4 del Regolamento Europeo Generale sulla Protezione dei Dati (EU RGPD) definisce il concetto di *personal data*: per dato personale si intende:
*"qualsiasi informazione riguardante una persona fisica identificata o identificabile («interessato»); si considera identificabile la persona fisica che può essere identificata, direttamente o indirettamente, con particolare riferimento a un identificativo come il nome, un numero di identificazione, dati relativi all'ubicazione, un identificativo online o a uno o più elementi caratteristici della sua identità fisica, fisiologica, genetica, psichica, economica, culturale o sociale" [...] 
"Per stabilire l'identificabilità di una persona è opportuno considerare tutti i mezzi, come l'individuazione, di cui il titolare del trattamento o un terzo può ragionevolmente avvalersi per identificare detta persona fisica direttamente o indirettamente. Per accertare la ragionevole probabilità di utilizzo dei mezzi per identificare la persona fisica, si dovrebbe prendere in considerazione l'insieme dei fattori obiettivi, tra cui i costi e il tempo necessario per l'identificazione, tenendo conto sia delle tecnologie disponibili al momento del trattamento, sia degli sviluppi tecnologici."*

Alla luce di ciò, ci è sembrato opportuno procedere con metodologie di de-identificazione per i dataset riguardanti i redditi, e il dataset riguardante le segnalazioni, in quanto in essi sono presenti dati personali resi disponibili in Open Data.

Gli standard di de-identificazione per i dati contenuti in un dataset sono i seguenti:
- gli identificatori non assolutamente necessari vanno eliminati;
- i valori degli attributi non necessari vanno eliminati; quelli che indicano situazioni fortemente personali necessitano di forti misure di de-identificazione.

Abbiamo così preso provvedimenti affinché gli individui non fossero più identificabili tramite l'osservazione dei dati o il loro incrocio.

### Pulitura
La pulitura è stata effettuata con:
* il programma [**Data Curator**](https://theodi.org.au/data-curator/), CSV editor sviluppato dall'Open Data Institute, che permette di aggiungere, eliminare e modificare righe, colonne e dati;
* il linguaggio di programmazione **Python**.

Oltre alla problematica riguardante i dati personali, abbiamo riscontrato altre criticità riguardanti la pulizia del dataset:

- Non esistono linee guida interne per la compilazione dei dataset in una maniera univoca: alcuni CSV utilizzano come separatore la virgola, altri il punto e virgola e altri ancora la tabulazione.

- Non esistono vocabolari interni di nomi. Un altro problema è stato quello riguardante la nomenclatura delle intestazioni, che risulta sempre diversa anche all'interno della stessa serie di dataset (ad esempio: *N_contribuenti* ; *N. Contribuenti* ; ...) e dei nomi quali nomi di vie/zone/quartieri, che non hanno una forma codificata, e vengono chiamati sempre in modo differente (ad esempio: *Sant'Orsola* ; *S.Orsola*; *Sant Orsola* ; ...)

- Problema con le parole accentate: all'interno del testo, le parole accentate sono codificate secondo modalità differenti. A volte viene utilizzata la lettera accentata, facendo emergere però problematiche di codifica, altre volte invece viene impropriamente utilizzato l'apostrofo.

- Nel sito non è presente una descrizione dettagliata del dataset di cui è disponibile il download

- Sono presenti errori di battitura per quanto riguarda le stringhe di testo

In generale, nel corso della pulizia dei vari dataset, abbiamo:
1. reso le intestazioni delle colonne subito comprensibili e uniformi; abbiamo quindi semplificato i loro nomi ed eliminato i caratteri speciali.
2. uniformato i nomi all'interno dei file.
3. copiato le versioni pulite dei dataset, in formato CSV e con codifica UTF-8.

#### DATASET REDDITI
##### Revisione preliminare: criticità
I dati contenuti in essi potrebbero rientrare nella categoria di *personal data* se incrociati con altri dati. In particolare:
* se l'*Area statistica* include un territorio particolarmente limitato, e
* se il *Numero contribuenti* è particolarmente ridotto,
vi è il rischio che, facendo la media statistica del reddito per contribuente in quella determinata area, sia semplice identificare quei contribuenti, abitanti in quella determinata zona e con quel determinato reddito. 
In questo modo verrebbe infranta la normativa che regola il *Segreto Statistico.*

In Italia il Segreto Statistico è di fatto regolamentato dall'art.9 del DL n.322 del 6 settembre 1989, che recita:
*1. I dati raccolti nell'ambito di rilevazioni statistiche comprese nel programma statistico nazionale da parte degli uffici di statistica non possono essere esternati se non in forma aggregata, in modo che non se ne possa trarre alcun riferimento relativamente a persone identificabili e possono essere utilizzati solo per scopi statistici.
2. I dati di cui al comma 1 non possono essere comunicati o diffusi, se non in forma aggregata e secondo modalità che rendano non identificabili gli interessati ad alcun soggetto esterno, pubblico o privato, né ad alcun ufficio della pubblica amministrazione. In ogni caso, i dati non possono essere utilizzati al fine di identificare nuovamente gli interessati.*

##### Pulitura, De-identificazione e *Merging*
La fase di **pulitura** ha previsto le seguenti operazioni:

1. *Eliminazione di colonne*; in particolare: 
    * abbiamo eliminato le colonne che non servivano agli scopi del nostro lavoro: tra '*Reddito imponibile ai fini dell'irpef*' e '      *Reddito imponibile ai fini dell' addizionale irpef*' abbiamo scelto di mantenere unicamente il primo, perché quello comunale (il secondo) è un parziale di quello totale (il primo). Per eliminare i dati relativi a questa intestazione abbiamo utilizzato l'algoritmo '**elimina_colonna(data)**' in "Reddito_per_Area.py";

2. *Modifica delle stringhe d'intestazione*; in particolare:
    * abbiamo uniformato le stringhe in modo tale da essere identiche in tutti i dataset della serie (maiuscole e minuscole; trattini, etc...). Per esempio: 

| 2009 | 2010 | 2011 | 2012 | 2013 | 2014 | 2015 | 2016 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Area Statistica<br>N contribuenti | Area Statistica<br>N contribuenti | Area Statistica<br>N contribuenti | Area statistica<br>N_Contribuenti | Area statistica<br>N.Contribuenti | Area statistica<br>N.Contribuenti | Area statistica<br>N.Contribuenti | Area statistica<br>N.contribuenti |

3. *Eliminazione delle righe*; in particolare:
    * le righe che non servono agli scopi del nostro lavoro (ad es. "*non residenti nell'anno di imposta*" e "*senza fissa dimora*");

4. *Rimozione di eventuali elementi*; in particolare: 
    * rimozione di accenti ed apostrofi (ad es. "*Piazza dell'Unita'*" diventa "*Piazza dell Unita*");

5. *Correzione di errori di battitura*; ad es. "*Triumrato*" al posto di "*Triumvirato*".

In sede di **de-identificazione** è possibile applicare delle tecniche di anonimizzazione ai valori che sotto ad una certa soglia possono rappresentare un rischio di re-identificazione, come il *Numero contribuenti*. Per quanto riguarda i valori potenzialmente sensibili, come il *Reddito imponibile ai fini irpef*, è possibile anonimizzare i valori precisi convertendoli in valori arrotondati secondo la distribuzione in *scaglioni IRPEF*.

In fase di **_merging_** abbiamo usato l'algoritmo **process_data(data)** per creare una lista di dizionari. Con l'algoritmo **reddito_medio_per_zona(data)** abbiamo accorpato le aree statistiche per formare le zone corrispondenti, confrontando il dataset con la lista di dizionari prodotta dall'algoritmo **diz_aree_in_zone(csv_file)** applicato al DATASET AREE STATISTICHE 4.1. Per ogni zona abbiamo calcolato la media pro-capite (distriuzione del reddito = reddito_area_1 + ... + reddito_area_n // n_contribuenti_1 + ... + n_contribuenti_n). Con **merge_dataset(data1, data2, data3, data4, data5, data6, data7, data8)** abbiamo raggruppato le distribuzioni del reddito per anno e per zona in un unico dataset. 

Il dataset è stato stampato in formato .csv tramite la libreria *pandas*. Infine abbiamo fatto un controllo manuale del dataset per verificarne la correttezza.

#### DATASET SEGNALAZIONI : 

##### Revisione preliminare: criticità
Il dataset presenta criticità nei dati relativi a *Category*: in questa colonna sembra che a volte sia stata copiata la segnalazione fatta dal cittadino, parola per parola, senza che sia stato fatto un lavoro di controllo e anonimizzazione sulle informazioni (potenzialmente o palesemente sensibili) ivi contenute. 

Abbiamo lavorato su '38.00.03_segnalazioni_czrm2017_area_statistica', un file di estensione *.shp* che abbiamo convertito in formato *geojson* con l'algoritmo **shp2geojson(input_path, output_path)** in (##IL FILE CHE CONTIENE LO SCRIPT LO SALVERA' FABIO) e successivamente in formato *.csv* con un [convertitore online](http://convertcsv.com/geojson-to-csv.htm). L'output di questo processo è il file 'Segnalazioni2017AreaStatPub.csv'.

Tale dataset riporta l'indirizzo preciso, corredato da numero civico, di dove una segnalazione è stata fatta, riportandone anche le coordinate *X*, *Y*. In questo modo è possibile sapere l'esatto punto di Bologna dove vi è una problematica espressa in una segnalazione. 

Il problema si pone soprattutto se la segnalazione riguarda un'altra persona, come: 
- l'avvistamento di una prostituta. Segnalazione che compare piu' volte. Tale segnalazione è particolarmente grave, per diverse motivazioni. In primo luogo non è verificabile che il soggetto in questione svolga effettivamente attività di prostituzione. Nel caso in cui sia invece effettivamente questo il caso, viene messo in Open Data la presenza di un'attività spesso collegata ad organizzazioni criminali, tratta di essere umani, discriminazione, e violenza;
- in un altro caso si viene a conoscenza che alcuni ragazzini stanno in quel punto ogni giorno, per cui qualcuno potrebbe facilmente rintracciarli;
- in altri casi ancora si viene a conoscenza di problematiche personali di due persone che si trovano presumibilmente spesso in quel punto.


##### Pulitura, De-identificazione e Merge
In fase di **pulitura** e **de-identificazione** abbiamo operato una serie di operazioni sui due dataset in questione:

* per quanto riguarda il primo dataset, con l'eliminazione dell'intera colonna *Category* abbiamo eliminato sia i dati ridondanti che i dati sensibili;

* per quanto riguarda il secondo dataset, la soluzione al problema è stata non considerare gli indirizzi delle segnalazioni, fornendo unicamente il dato dell'area della segnalazione. Quindi abbiamo creato un dataset intermedio derivato da 'Segnalazioni2017AreaStatPub.csv', contenente unicamente i dati relativi a "*Ticketid*" e "*Tipo Area*". Il file originale presenta però in "*Tipo Area*" diverse diciture prima del nome dell'area ("*Area Statistica:*" e "*Percorso di Ascolto |*"). Abbiamo eliminato le diciture, lasciando solo il nome della zona, con l'algoritrmo '**pulitore_data_geo(data_geo)**' in 'Segnalazioni_2017.py'. L'output è un file intermedio 'Segnalazioni_file_per_merge.csv'. 

A questo punto abbiamo ripreso il dataset '38.00.05_segnalazioni_czrm2017_tot_tipologia.csv'. Abbiamo selezionato solo le categorie di segnalazioni che ci interessano: "*Degrado sociale*, *Degrado ambientale*" e "*Microciminalità*". La scelta delle categorie da mantenere è stata fatta da noi considerando gli elementi nel dataset che ci sono sembrati più calzanti con le nostre finalità. Questo processo di pulitura è stato realizzato tramite l'algoritmo "**pulire_segnalazioni(data_segnalazioni)**". 

In fase di **merging** abbiamo creato un dataset di raffronto tra aree statistiche e zone con **diz_aree_in_zone(csv_file)**. Poi abbiamo incrociato 'Segnalazioni_file_per_merge.csv' e '38.00.05_segnalazioni_czrm2017_tot_tipologia.csv', per convertire tutti i valori di "*Ticketid*" nelle loro corrispondenti aree statistiche, attraverso l'algoritmo "**incrociatore_segnalazioni(data_segnalazioni, data_geo)**". Gli output dei due algoritmi precedenti sono stati utilizzati come input in **segnalazioni_per_zone(diz_zone_aree, segnalazioni_aree**, in modo da sostituire il nome di ogni area statistica con la zona corrispondente. 

Attraverso l'algoritmo **counter_segnalazioni(segnalazioni_zone, segnalazioni_zone2)** sono stati rimossi tutti i duplicati e ne è stata contata la frequenza in *Numero Segnalazioni*. Con l'algoritmo **delete_descrizione(data)** abbiamo eliminato tutti i dati relativi alla *Descrizione* della segnalazione, poiché questi dati in origine si sono rivelati essere eccessivamente specifici rispetto ai fini del nostro progetto. Abbiamo eliminato il dato *Segnalazioni* (ridondante, dato che il dataset è in sé composto da segnalazioni!) e l'abbiamo sostituito con il contenuto di *Descrizione*; nel caso invece in cui *Segnalazione* risultasse un valore vuoto, l'abbiamo sostituito con "*Altro*".

L'ultimo step è stato quindi il calcolo del numero totale di ogni segnalazione ed eliminare i duplicati con l'algoritmo **counter_segnalazioni_finale(segnalazioni_zone, segnalazioni_zone2)**.

Il dataset è stato stampato in formato .csv tramite la libreria *pandas*. Infine abbiamo fatto un controllo manuale del dataset per verificarne la correttezza.

##### Revisione finale
In fase di revisione finale abbiamo rilevato criticità  di carattere etico riguardante la categorizzazione "Degrado Sociale", sotto cui erano inserite tutte le segnalazioni che comprendevano, tra le altre cose, soggetti quali prostitute, anziani invalidi, tossicodipendenti etc. Abbiamo quindi deciso di cambiare il nome delle tipologie di segnalazioni, per evitare nomenclature collegabili ad un giudizio negativo legato a tali soggetti. Le categorie da: "Degrado Ambientale", "Degrado Sociale", e "Microcriminalità" sono state quindi modiicate in "Sociale", "Ambientale", "Microcriminalità". L'algoritmo che abbiamo utilizzato è stato: **pulizia_segnalazioni_2_(data_segnalazioni)**

#### DATASET AREE STATISTICHE 4.1
##### Revisione preliminare: criticità

Il dataset contiene informazioni di natura geospaziale. In particolare:
* *COD_AREAST* (Codice area statistica);
* *NOMEAREAST* (Nome area statistica);
* *COD_Q* (Codice quartiere);
* *NOME_QUARTIERE* (Nome quartiere).

I dati al suo interno non rientrano nella categoria di *personal data*, in quanto non rappresentano un rischio di de-anonimizzazione di per sé, ma potrebbero farlo se incrociati con altri dati, specialmente se i valori in *COD_AREAST*, mappati ai relativi valori presenti in *NOMEAREAST*, venissero incrociati con eventuali informazioni sensibili, contenute in altri dataset e riferibili a persone singole (i.e. reddito, vie, ecc...).

Prestandosi bene come dataset di confronto, crediamo che il lavoro di de-anonimizzazione andrebbe fatto sugli eventuali altri dataset che potrebbero essere incrociati con questo. 

#### DATASET POLITICHE
##### Revisione preliminare: criticità
Tutti i valori all'interno dei dataset sono di natura statistico-numerica. In particolare:
- dati statistici, che raccolgono i numeri di iscritti, voti e votanti (es. *Totale Votanti*, *Totale Voti Validi*, ecc...);
- codificazioni, mappate ad entità geospaziali (es. *Sezione elettorale*, *Quartiere*, *Zona*, ecc...).

Il rischio di de-anonimizzazione è nullo.

##### Pulizia e Merging
Le operazioni di pulizia effettuate solo le seguenti:

1) *Eliminazione di colonne*; in particolare:

- eliminazione delle colonne che non sono servite agli scopi del nostro lavoro;
- eliminazione delle colonne che compaiono più di una volta, con gli stessi valori, nello stesso dataset (ad es. *SCHEDE BIANCHE*, *SCHEDE NULLE*, *Totale schede bianche*, *Totale schede nulle*).

2) *Modifica delle stringhe d'intestazione*; in particolare:

- uniformate le stringhe in modo tale da essere identiche nei due dataset politici (maiuscole e minuscole);
- modificato i nomi dei partiti per corrispondere al nome vigente ufficiale del partito (precedentemente erano sigle o denominati in modo errato).

Per quanto riguarda il processo di **_merging_** di 2.0:

* considerando che il file raw contiene i dati delle elezioni politiche in relazione alle sezioni elettorali, ma il focus del nostro progetto è sulle zone, abbiamo utilizzato 'sez_elettorali_in_zone_Senato(data)' effettuare questa conversione;

* Utilizzando 'calcolo_percentuale(data)' abbiamo calcolato la percentuale dei voti di ogni partito rispetto al totale del voti ogni zona. La formula da noi utilizzata è: n_voti_partito_n * 100 / tot_voti;

* Abbiamo utilizzato 'controllo_percentuale(data)' per verificare la correttezza delle nostre percentuali.

Il nostro dataset intermedio contiene quindi, per ogni zona il numero di voti di un partito, la sua percentuale ed infine il totale dei voti validi. 

Per quanto riguarda il processo di **_merging_** di 1.0 e 1.1:

* Considerando che in questo caso i dataset di input sono 2 (Collegio 6 e Collegio 7), abbiamo applicato 'merge(data)'.

* avendo a questo punto un unico dataset, abbiamo riutilizzato gli stessi algoritmi usati per 2.0. L'algoritmo **sez_elettorali_in_zone_Senato(data)** è stato modificato ad hoc per via della presenza di una lista (quella dei Forconi) nel dataset 2.0 che non ha riscontro in 1.0 e 1.1.

#### DATASET CENSIMENTO
##### Revisione preliminare: criticità
Nel dataset abbiamo riscontrato alcuni problemi, tra cui:
* il *tab-separated value*;
* le problematiche già affrontate nei DATASET REDDITI e DATASET SEGNALAZIONI: i dati esposti sono molto specifici ed accurati; vi sono casi in cui questi dati sono rapportati ad aree molto ristrette, quindi facilmente suscettibili ad essere strumento di de-anonimizzazione. Infatti, incrociando questo dataset con altri, vi è la possibilità di risalire a dati sensibili. 

##### De-anonimizzaizone, pulitura e *merging*
In fase di **_pulitura_** abbiamo trasformato il file in *comma-separated value*. 

In fase di **_de-anonimizzaizone_** abbiamo mantenuto unicamente i dati riguardanti *Zona* e *Residenti*, dato che non contengono dati sensibili e sono utili al fine del nostro progetto.

Il dataset è stato definitivamente pulito con **merge_zone_residenti(data)**. In questo modo abbiamo ottenuto il numero di residenti per zona. Il risultato è il dataset intermedio "*censimento_intermedio.csv*".

#### DATASET ZONE 7.0 & DATASET AREE STATISTICHE 4.0
##### Revisione preliminare & pulitura

Per poter manipolare i dati geospaziali all'interno del dataset abbiamo dovuto convertire il formato da .shp a .geojson tramite l'algoritmo **shp2geojson**. Le coordinate nello *shapefile* delle zone hanno come riferimento l'**UTMA ED50**, il sistema di coordinate locale dell'Emilia Romagna. Ciò porta ad un bug di conversione in *.geojson*, che invece usa come sistema di riferimento delle coordinate WGS84 (un formato globale). Inoltre, qualora si volesse lavorare con il file *shapefile* originario, si nota un grave *offset* delle coordinate.

Abbiamo poi lavorato sullo *shapefile* delle Aree Statistiche (4.0): il sistema di riferimento delle coordinate utilizzato in questo caso è l'**ED50 UTM Zone 32N** (un sistema europeo). Essendo un formato più diffuso, è possibile convertire direttamente in .geojson attraverso l'algoritmo **shp2geojson**. La precisione di descrizione è quindi maggiore. Ciò ci ha permesso di eseguire il **_merging_** delle aree statistiche per creare le zone tramite il programma open-source QGIS seguendo le informazioni contenute nel DATASET AREE STATISTICE 4.1.

***

#### DATASET FINALI

| **Privacy** | Domande | ANALISI POLITICHE |  SEGNALAZIONI | ZONE | 
| ----------- | --------| ------|--------|-------|
| | sono i dati liberi da ogni informazione                    personale che possa identificare in modo                       diretto l’individuo?|sì |sì| sì |
| | sono i dati liberi da ogni informazione indiretta che      possa identificare l’individuo? In caso negativo, queste       informazioni sono autorizzate per legge?|sì |sì|sì |
| | sono i dati liberi da ogni informazione sensibile che può essere ricondotta all’individuo? In caso negativo, queste informazioni sono autorizzate per legge? |sì |sì|sì |
| | sono i dati liberi da ogni informazione relativa al soggetto che incrociata con dati comunemente reperibili nel web possa identificare l’individuo? In caso negativo, queste informazioni sono autorizzate per legge? |sì |sì|sì |
| | sono i dati liberi da ogni record relativo a profughi, protetti di giustizia, vittime di violenze o in ogni caso categorie protette? |sì |no| sì|
| | hai usato un tool per calcolare il rischio di de-anonimizzazione del tuo dataset prima di pubblicarlo? |no |no|no|
| | esponi dei servizi di ricerca tali da poter filtrare i dati in modo da ottenere un solo record geolocalizzato? | no|no|no|
| **Proprietà intellettuale della sorgente** | | |
| | avete creato voi i dati? | no| no| no |
| | siete i proprietari dei dati anche se non li avete creati voi? | no|no|no|
| | siete sicuri di non usare dati per i quali vi è una licenza o un brevetto di terzi? | sì |sì| sì| 
| | se i dati non sono vostri avete un accordo o una licenza che vi autorizzi a pubblicarli? |sì |sì|sì|
| **Licenza di rilascio** | | |
| | rilasciate i dati di cui possedete la proprietà accompagnati da una licenza? | sì|sì|sì|
| | avete incluso anche la clausola di salvaguardia “In ogni caso, i dati non possono essere utilizzati al fine di identificare nuovamente gli interessati”? | sì|sì|sì|
| **Limite alla pubblicazione** | | |
| | hai verificato che non ci siano impedimenti di legge o contrattuali che impediscano la pubblicazione dei dati? |sì | sì |sì | 
| **Segretezza** | | |
| | hai verificato se non ci sono motivi di ordine pubblico o di sicurezza nazionale che ti impediscono la pubblicazione dei dati? |sì |sì | sì |
| | hai verificato se non ci sono motivi legati al segreto d’ufficio che impediscono la pubblicazione dei dati? | sì | sì| sì|
| | hai verificato se non ci sono motivi legati al segreto di stato che impediscono la pubblicazione dei dati? | sì | sì| sì|
| **Condizioni economiche** | | |
| | hai verificato di poter rilasciare in modo gratuito i dati senza infrangere qualche norma di finanza pubblica? | sì | sì| sì|
| | se hai imposto condizioni economiche per l’utilizzo dei dati, sei sicuro di avere imposto un prezzo per coprire i soli costi marginali? |/  |/ |/ |
| **Temporalizzazione** | | |
| | i dati sono soggetti per legge a restrizioni temporali di pubblicazione? | no|no|no|
| | i dati sono aggiornati frequentemente in modo da sanare eventuali informazioni lesive di persone o organizzazioni? | sì | sì| sì|
| | i dati hanno dei divieti di legge o giurisprudenziali che impediscono la loro indicizzazione da parte di motori di ricerca? |no |no|no|
| **Trasparenza**| | | 
| | i dati rientrano nella lista dell’allegato A del d.lgs. 33/2013? | no|no|no|
| | se sì, come sono stati trattati dal responsabile della trasparenza nel sito “Amministrazione trasparente”? | /|/|/|
| | in che forma si possono creare sinergie tra il portale “Amministrazione trasparente” e il portal open data per minimizzare le inconsistenze e favorire la trasparenza del dato aperto? |/ |/|/| 

## Licenze
L'informazione sul tipo di licenza è metadato indispensabile per determinare come poter riutilizzare il dataset. Essa deve essere **sempre** specificata, mettendola in evidenza in forma *human-* e *machine-readable*, indicando:

* nome;
* versione;
* riferimento al testo della licenza.

I dataset pubblicati su OpenData Bologna rispettano queste condizioni.

### Dataset
#### DATASET REDDITI, DATASET POLITICHE
La licenza associata a questo gruppo di dataset è la [**CC0 1.0**](https://creativecommons.org/publicdomain/zero/1.0/deed.it) (Donazione al Pubblico Dominio). 

| Creative Commons | Attribuzione Zero |
| :----------------: | :-----------------: |
|![](cc.png) | ![](zero.png)

Sulla pagina di ogni dataset è presente un [link](http://dati.comune.bologna.it/node/5) che porta ad una pagina del sito che descrive il diritto di riutilizzo dei dataset licenziati in questo modo. 

Il dichiarante “*apertamente, pienamente, permanentemente, irrevocabilmente e incondizionatamente rinuncia, abbandona e cede ogni proprio diritto d’autore e connesso, ogni relativa pretesa, rivendicazione, causa e azione, sia al momento nota o ignota (includendo espressamente le pretese presenti come quelle future) relativa all’opera*”. 

In altre parole, il dataset è dedicato al pubblico dominio attraverso la rinuncia a tutti i diritti protetti dal diritto d'autore, nella misura consentita dalla legge: in questo modo è possibile copiare, modificare, distribuire ed eseguire il dataset, anche a fini commerciali, senza dover chiedere permessi. Ciò significa che tale licenza implica l'appartenenza del dato a *chiunque, senza distinzioni*: non vi è alcuna garanzia sul dataset stesso, e ogni responsabilità per qualsivoglia utilizzo del dataset nella misura consentita dalla legge è declinata.


#### DATASET SEGNALAZIONI, DATASET AREE STATISTICHE
La licenza associata a questo gruppo di dataset è la [**CC-BY 3.0 IT**](https://creativecommons.org/licenses/by/3.0/deed.it).

| Creative Commons | Attribuzione |
| :----------------: | :-----------------: |
|![](cc.png) | ![](by.png)

Le licenze per l’open data con richiesta di attribuzione e condivisione allo stesso modo consentono di condividere, adattare e creare un datataset, anche per finalità commerciali, nel rispetto però di due vincoli: 
- attribuire la paternità del dataset, fornire un link alla licenza e indicare le modifiche; 
- distribuire eventuali lavori derivati con la stessa licenza che governa il lavoro originale, con divieto di restrizioni legali e/o tecnologiche aggiuntive. 


#### Dataset finali

Per pubblicare i nostri dataset abbiamo scelto la licenza [IODL 2.0](https://www.dati.gov.it/content/italian-open-data-license-v20). Essa:
* consente di condividere, modificare, usare e riusare i dataset, i dati e le informazioni al loro interno, garantendo la stessa libertà per altri;
* non implica trasferimenti di diritto di titolarità sulla banche di dati, sui dati e sulle informazioni pubbliche;
* la versione 2.0, in particolare, permette di creare un lavoro derivato ed esercitare su di esso gli stessi diritti, per esempio attraverso la *mashup* con altre informazioni, utilizzando anche dati rilasciati con altre licenze *attribution* (che richiedono all’utente la sola indicazione della fonte,) come le licenze Creative Commons Attribution (CC-BY).

![](logo_iodl_esteso.png)

### Librerie
Le librerie che abbiamo utilizzato per compilare i codici Javascript, Python e HTML sono:

| Libreria | Licenza |
| -------- | ------- |
| pandas | [Nuova licenza BSD (3 clausole)] |
| Jquery | [MIT License] |
| Bootstrap | [MIT License] |
| Leaflet | [Licenza FreeBSD (2 clausole)] |
| Chartjs | [MIT License] |
| chartjs-plugin-labels | [MIT License] |
| shapely | [Nuova licenza BSD (3 clausole)] |

### Codice
La licenza del nostro codice è [GNU-GPL].

### Documentazione
La licenza della documentazione di Bootstrap è [CC-BY 3.0 Unported]. 

La licenza di questa documentazione è [CC-BY 4.0].

## Finalità

### Dataset iniziali
#### DATASET REDDITI
La finalità della serie è quella di esporre in Open Data il numero e il reddito dei contribuenti bolognesi ai fini Irpef, dichiarati dal 2009 al 2016, per area statistica.

Il dataset è stato prodotto ed elaborato dall’Area Programmazione Controlli e Statistica del Comune di Bologna.

Il dataset è stato scelto al fine di esaminare l’andamento medio del reddito pro-capite dei contribuenti bolognesi, in una determinata zona della città, nell’arco temporale 2009-2016.

#### DATASET POLITICHE
La finalità del dataset è quella di esporre in Open Data i risultati degli scrutini alle elezioni politiche del 4 marzo 2018, per l’elezione al Senato della Repubblica e alla Camera dei Deputati.

I file sono estratti dal data entry dall’Ufficio Servizi Elettorali del Comune di Bologna.

Il dataset è stato scelto al fine di conoscere la percentuale di voto di una determinata lista alle elezioni politiche del 4 marzo 2018, per l’elezione al Senato della Repubblica e alla Camera dei Deputati, in una determinata zona della città.

#### DATASET SEGNALAZIONI 
La finalità dei dataset è quella di esporre in Open Data le segnalazioni registrate attraverso il Citizen Relationship Management: strumento di contatto diretto tra amministrazione e cittadini che segnalano problemi all’interno del comprensorio Bolognese. Tali segnalazioni di situazioni di disagio sono inoltre mappate e geolocalizzate all’interno una determinata area cittadina.

Il dataset è stato scelto al fine di comprendere la natura e la quantità di problemi legati al degrado ambientale, urbano e al disagio sociale, in una determinata zona della città, registrati attraverso il Citizen Relationship Management. 

#### DATASET AREE STATISTICHE
La finalità dei dataset è quella di esporre in Open Data i nomi delle aree Statistiche e dei quartieri e i relativi codici.

I dataset sono stati scelti per essere usati come dataset di raccordo per permettere la conversione/accorpamento dalle aree statistiche a zone.

|

|

|

#### DATASET CENSIMENTO

|

|

|

#### DATASET ZONE
La finalità del dataset è quella di evidenziare la divisione del Comune di Bologna in *18 zone*, ovvero i vecchi quartieri che nel 1985 sono stati accorpati negli attuali 9 quartieri. I quartieri sono composti da zone che sono composte da aree statistiche, dunque è possibile relazionare queste tre differenti modalità di suddivisione del territorio bolognese. 

Il dataset è stato scelto perché la divisione in zone è più specifica della divisione in quartieri, e meno specifica della divisione in aree statistiche, quindi rappresenta un buon compromesso per visualizzare i dati che ci interessano.

### DATASET FINALI
La finalità dei dataset finali è quella di esporre in Open Data alcuni dati relativi la situazione politico-economica-sociale Bolognese degli ultimi anni. In particolare:

#### Dataset 1:
All'interno del primo dataset ritroviamo i dati divisi per zona di Bologna di: redditi medi pro-capite dei contribuenti bolognesi dal 2009 al 2016, i risutati degli scrutini alle elezioni politiche per l'elezione al Senato della Repubblica e alla Camera dei Deputati del 4.3.2018, e il numero di residenti.

#### Dataset 2:
All'interno del secondo dataset ritroviamo i dati i dati divisi per zona di Bologna delle segnalazioni riguardanti il degrado ambientale, urbano, sociale e microcriminalità divisi per categoria, sottocategoria e numero di segnalazioni.

#### Dataset 3:
Dato che i dati forniti dal portale OpenData Bologna sono in formato .shp, è stato necessario fare il porting al formato .geojsn, supportato nativamente da Javascript (linguaggio usato per programmare in ambiente web), quindi senza avere più la necessità di conversioni ulteriori. Il file originale delle zone presenta dei gravi errori di *offset* in termini di latitudine e longitudine che creano squilibrio nella visualizzazione. La creazione di questo file è stata determinata dalla necessità di un file .geojson delle zone di Bologna per ottimizzare la visualizzazione.
_______________________________________________________________

# Analisi tecnica
## Formati
La pubblicazione di dataset in open Data richiede che i dati siano resi disponibili in formati:
* aperti;
* non proprietari;
* standardizzati;
* neutri rispetto agli applicativi necessari per la fruizione dei dati stessi.

I dataset che abbiamo utilizzato sono pubblicati nei seguenti formati:
* **CSV**: in termini di *Processabilità*, i dataset sono quindi *machine-readable* e in formato aperto ma non corredati da metadati;
* i DATASET AREE STATISTICHE e DATASET SEGNALAZIONI sono corredati da un insieme di file in formato **.shp** (*shapefile*, uno standard per dati vettoriali spaziali), con file aggiuntivi (**.sph** per le forme geometriche, **.dbf** per gli attributi delle forme geometriche, **.shx** come indice delle forme geometriche, **.prj** per le impostazioni del sistema di riferimento) da sui dipendono interpretazione ed utilizzo. 

### Distribuzioni
Abbiamo deciso di pubblicare i dataset finali in [TOT] distribuzioni: [RDF(serializzazione Turtle)], [JSON], [CSV]. Si veda la pagina di pubblicazione del dataset, sotto la voce [Distribuzioni].

## Metadati
La metadatazione ricopre un ruolo essenziale laddove i dati sono esposti a utenti terzi e a software. I metadati, infatti, consentono una maggiore comprensione e rappresentano la chiave attraverso cui abilitare più agevolmente la ricerca, la scoperta, l’accesso e quindi il riuso dei dati stessi. La classificazione qualitativa dei metadati si fonda su due fattori principali: legame tra dato-metadati e livello di dettaglio.

### Metadatazione dei dataset iniziali

Il livello del modello per i metadati raggiunto dai dataset è il **Livello 2**:
* Legame dato-metadato debole: i dati sono accompagnati da metadati esterni, inclusi nella pagina di download;
* Livello di dettaglio generale: i metadati forniscono informazioni relativamente a un dataset, quindi sono informazioni condivise dall’insieme di dati interni a quel dataset.

I dataset pubblicati su [OpenData Bologna](http://dati.comune.bologna.it/) sono descritti dai seguenti metadati *human-readable*:

| Metadato | Descrizione |
| -------- | ----------- |
| File | il nome del dataset |
| Anno versione | numero di versione |
| Versione | numero di versione |
| Formato | formato dei dati |
| Data rilascio | data di pubblicazione del dataset |
| Argomento | parole/e chiave che descrive/ono la natura e il contenuto informativo del dataset |
| Tag | parola/e chiave che descrive/ono la natura e il contenuto informativo del dataset |
| Responsabile | agente che ha gestito la creazione e il popolamento del dataset |
| Fonte | provenienza dei dati |
| Licenza | tipo di licenza associata al dataset |

### Metadatazione dei dataset finali

|

|

|

[METADATAZIONE CICCIONA PATATONA]

|

|

|

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

### URI dei dataset iniziali
Gli URI dei dataset presentano almeno due aspetti problematici:

1. la **_semantica_** non perfettamente chiara;`

2. l'**_inconsistenza del pattern_**, dovuta probabilmente all'impiego di un meccanismo di **_auto-increment_**.

In via ipotetica, proponiamo un possibile perfezionamento degli URI dei dataset iniziali:

| URI originali | URI perfezionati |
| ------------- | ---------------- |
| http://dati.comune.bologna.it/download/file/fid/4267 | http://dati.comune.bologna.it/dataset/risultati-politiche-2018/liste-camere-collegio-6 |
| http://dati.comune.bologna.it/download/file/fid/4269 | http://dati.comune.bologna.it/dataset/risultati-politiche-2018/liste-camere-collegio-7 |
| http://dati.comune.bologna.it/download/file/fid/4265 | http://dati.comune.bologna.it/dataset/risultati-politiche-2018/liste-senato |
| http://dati.comune.bologna.it/download/file/fid/1136 | http://dati.comune.bologna.it/dataset/redditi/redditi-2009 |
| http://dati.comune.bologna.it/download/file/fid/1137 | http://dati.comune.bologna.it/dataset/redditi/redditi-2010 |
| http://dati.comune.bologna.it/download/file/fid/1135 | http://dati.comune.bologna.it/dataset/redditi/redditi-2011 |
| http://dati.comune.bologna.it/download/file/fid/1878 | http://dati.comune.bologna.it/dataset/redditi/redditi-2012 |
| http://dati.comune.bologna.it/download/file/fid/2436 | http://dati.comune.bologna.it/dataset/redditi/redditi-2013 |
| http://dati.comune.bologna.it/download/file/fid/3422 | http://dati.comune.bologna.it/dataset/redditi/redditi-2014 |
| http://dati.comune.bologna.it/download/file/fid/4304 | http://dati.comune.bologna.it/dataset/redditi/redditi-2015 |
| http://dati.comune.bologna.it/download/file/fid/4615 | http://dati.comune.bologna.it/dataset/redditi/redditi-2016 |
| http://dati.comune.bologna.it/download/file/fid/4493 | http://dati.comune.bologna.it/dataset/aree-statistiche/aree-statistiche-cartografico|
| http://dati.comune.bologna.it/download/file/fid/4494 | http://dati.comune.bologna.it/dataset/aree-statistiche/aree-statistiche-per-quartiere |
| http://dati.comune.bologna.it/download/file/fid/4490 | http://dati.comune.bologna.it/dataset/citizen-relationship-management/segnalazioni-2017-cartografico-per-area-statistica |
| http://dati.comune.bologna.it/download/file/fid/4492 | http://dati.comune.bologna.it/dataset/citizen-relationship-management/segnalazioni-2017 |
| http://dati.comune.bologna.it/download/file/fid/4321 | http://dati.comune.bologna.it/dataset/popolazione/residenti- |
| http://dati.comune.bologna.it/download/file/fid/1737 | http://dati.comune.bologna.it/dataset/zone/zone-18 |

Popolazione residente per età, sesso, cittadinanza, quartiere e zona area statistica e sezione censimento

### URI dei dataset finali

|

|

ROBA A CASO MANNAGGIA 

|

|

## Provenance
### Provenance dei dataset iniziali

|

|

ROBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBA

|

|

### Provenance dei dataset finali

|

|

ROBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBETTTTTTA

|

|
_______________________________________________________________

# Analisi della sostenibilità

Nella comunicazione della Commissione pubblicata sulla Gazzetta ufficiale dell'Unione Europea [2014/C 240/01](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:52014XC0724(01)&from=IT) del 24/07/2014, al paragrafo 4.1.2 si legge: 
- *nell’ambiente in linea, invece, la totalità del corrispettivo potrebbe essere limitata ai costi collegati direttamente alla manutenzione e al funzionamento dell’infrastruttura (ossia della banca dati elettronica) nella misura necessaria a riprodurre il documento e a metterlo a disposizione di un riutilizzatore in più. Considerate l’esiguità e la tendenza al ribasso dei costi operativi medi di una banca dati, è probabile che l’importo sia prossimo allo zero. Si raccomanda pertanto agli enti pubblici di valutare a cadenza periodica i costi e benefici potenziali della politica di costo zero e della politica dei costi marginali, tenendo presente che la tariffazione com porta in sé dei costi (gestione delle fatture, monitoraggio e amministrazione dei pagamenti ecc.). In conclusione, il metodo dei costi marginali può essere applicato per recuperare le spese sostenute per la riproduzione di una copia supplementare e la distribuzione fisica dei documenti non digitali, mentre **per i documenti digitali (file) divulgati per via elettronica (ossia scaricati) si raccomanderebbe una politica di costo zero.***

Per riuscire a mantenere la curation nel lungo periodo:
* mantenere serie storica;
* usare [URI persistenti](#uri);
* integrare idati con i **metadati di provenance**;

CERCARE TIZI DEL CITIZEN MANAGEMENT PER PARLARE DI SOSTENIBILITA' anche sociale

_______________________________________________________________

# Visualizzazione

[CONTINUARE ...]
