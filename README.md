# 🍺 CraftQL Native

Mobilversjon av [CraftQL](https://gitlab.stud.idi.ntnu.no/it2810-h21/team-08/craftql).

## 🚀 Kjøring

For å teste klienten må du gjøre følgende:

1. `yarn` for å installere dependencies
2. `yarn start` for å kjøre klienten (legg merke til QR koden enten i browser eller i terminalen)
3. Installer [Expo Go](https://expo.dev/client) på mobilen din
4. Scan QR koden

Dersom du ikke finner QR-koden trykk på "c"-knappen på tastaturet når terminalen er i fokus, så kommer den opp på nytt.

## ⚙️ Funksjonalitet

### 🔎 Søk

Brukere har mulighet til å søke blant øl ved hjelp av en tekstbox. Søkeboksen bruker en debounce-mekanisme for å automatisk sende requests etter brukeren har skrevet i søkefeltet samtidig som den sikrer at man ikke sender for mange requests til backenden. Kort fortalt blir det sent en request 0.5 sekunder etter at brukeren er ferdig med å skrive.

### 📖 Sideblaing

Vi har implementert infinite scrolling gjennom en `FlatList`. Når brukeren scroller ned på siden og når bunnen vil det bli lastet inn flere elementer.

Våre queries har et skip-parameter, som vi har i en state, og for hver innlastning scroller-komponenten kjører, så endrer vi skip med antall elementer som lastes inn, slik at vi alltid henter nye elementer. Deretter blir dataen appendet inn i beerData staten, og vist på siden.

### 🔬 Detaljer om spesifik øl

Hvis man trykker på en av boksene som viser øl, vil man få opp mer grundig informasjon om den gitte ølen.

Dette har vi løst ved å sende hvert element til hver sin modal via props, hvor vi da henter forskjellig info og presenterer det i teksten/ratingen.

### 🔀 Sortering

Av sortering har brukeren flere muligheter:

-   Sortere på ølens navn
-   Sortere på ølens merke
-   Sortere på ølens type
-   Sortere på alkoholnivå
-   Sortere på rating

Alle sorteringsmåtene støttet både økende og synkende rekkefølge.

### 🔝 Go to top

Denne funksjonaliteten ble bygget etter BeerList komponentet. Derfor anså vi det som mest hensiktsmessig å bygge denne knappen inn i et wrapper-komponent for FlatList (listen som inneholder data vi henter). Denne wrapper-komponenten er FlatListWithScrollToTop, og kunne lett bli bygget inn i BeerList-komponentet slik som FlatList hadde blitt tidligere. Funksjonaliteten for Scroll-to-top ble bygget på denne måten med tanke på single-responsibility-principle.

## 🖥 Teknologier

### React Native

React Native er et rammeverk som bruker React til å lage UI for mobil, både Android og iOS. Komponentene i React Native er laget for å kunne bli oversatt til hver mobilplatforms egne komponenter slik at man slipper å tenke på hvordan klienten skal implementeres på de ulike platformene.

### Expo CLI

Expo CLI er et rammeverk for React Native som håndterer mye av kompleksiteten rundt det å lage en mobilklient som for eksempel bygging, deploying.

### Migrering fra React

Migreringen fra React var rimelig lettvind med tanke på logikk, men det trengtes en del arbeid for å lage nye komponenter og nytt design.

Alt fra header til flatlist, søkefelt og filtrering måtte skrives på nytt, med komponenter fra nye bibliotek. Native-komponentene var også mer "grunnleggende" i forhold til komponentene ulike react-bilitoekter tilbyr. Med det mener vi at komponentene hadde et mer bredt bruksområde, og trengte mer kode for å tilpasses vårt bruk. I react finner man lettere komponent-bibliotek rettet spesifikt mot en funksjon.

Etterhvert som komponentene ble implementert kunne det meste av logikk fra prosjekt 3 overføres, og fungerte med en gang.

En endring vi gjorde fra prosjekt 3 mtp på datainnhenting var å definere typePolicy i apolloClient i`src/App`, slik at denne merget gammel og ny data i en ny state, istedenfor at vi måtte gjøre dette manuelt i flatlist-komponenten.
