# Descrizione

I dataset sono stati selezionati all'interno di http://dati.comune.bologna.it, sito web del Comune di Bologna per la trasparenza e accessibilità secondo i principi dell'Open Government.

* [**Redditi 2009-2016 per area statistica**](http://dati.comune.bologna.it/node/244)
* [**Elezioni politiche Camera 2018**](http://dati.comune.bologna.it/node/3328)
* 

# Analisi della qualità informativa

Non esistono linee guida interne per l'uniformità dei dataset. Alcuni CSV utilizzano la virgola come **separatore**; altri il punto e virgola; altri ancora la tabulazione.

**Non esistono vocabolari interni di nomi.** Un altro problema ha riguardato la nomenclatura delle intestazioni, che risulta sempre diversa anche all'interno della stessa serie di dataset (ad esempio: *N_contribuenti* ; *N. Contribuenti* ; ...) e dei nomi di aree geografiche (vie, zone, quartieri) che non hanno una forma codificata e che vengono etichettate secondo modalità differenti (ad esempio: *Sant'Orsola* ; *S.Orsola*; *Sant Orsola* ; ...)

All'interno del testo le **parole accentate** sono codificate secondo modalità differenti. A volte viene utilizzata la lettera accentata, facendo emergere però problematiche di codifica; altre volte viene impropriamente utilizzato l'apostrofo.

Sono presenti numerosi **errori di battitura** e troncature per quanto riguarda le stringhe di testo ( "Ospedale Magg" per Ospedale Maggiore ; "Triumrato" per Triumvirato etc )

Nel sito **non è presente una descrizione dettagliata** del dataset di cui è disponibile il download, né una traduzione in inglese della sua breve introduzione.


# Analisi giuridica

## Privacy

### Checklist giuridica

L'analisi giuridica è necessaria per garantire sostenibilità nel tempo del processo di produzione e pubblicazione dei dati e creare un servizio equilibrato nel rispetto della funzione pubblica e dei diritti dei singoli individui. L’analisi giuridica delle fonti mira quindi a valutare questi delicati equilibri, evidenziando limitazioni d’uso, finalità di competenza, determinazione dei diritti e dei termini di licenza.

Per attuarla abbiamo utilizzato una *check list* di riferimento per valutare tutti gli aspetti giuridici del ciclo di vita dei dataset. La check list è formata da una serie
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

### Misure di de-identificazione

#### Revisione preliminare

#### De-identificazione

## Licenze

## Finalità

# Analisi etica

## Data cleansing

In generale abbiamo cercato di seguire le *best practices* legate ai file CSV nel corso della pulizia del dataset:
1. Abbiamo reso le intestazioni delle colonne subito comprensibili e uniformi. Abbiamo qindi semplificato i loro nomi ed eliminato i caratteri speciali.
2. Abbiamo uniformato i nomi all'interno dei file.
3. Abbiamo copiato le versioni pulite dei dataset in formato CSV codificato in UTF-8.

# Analisi tecnica

## Formati

## Metadati

## URI

## Provenance
