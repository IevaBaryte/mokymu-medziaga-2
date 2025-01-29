console.log('===== OBJEKTAI 1 DALIS =====');
console.log('===== 1 UZDUOTIS =====');

let studentas = {
    vardas: 'Egidijus',
    pavarde: 'Egidaitis',
    studijuPrograma: 'Informatika',
    atsiskaitytuKredituSkaicius: 7,
    pazymiai: [8, 9, 10, 8, 7, 6, 8],
    ugis: 178,
    kursas: 3,
    universitetas: 'Vilniaus'
};

console.log(studentas);
console.log('Pazymiai: ' + studentas.Pazymiai)
console.log('Universitetas: '+ studentas.universitetas);

console.log('===== 2 UZDUOTIS =====');

let filmas = {
    pavadinimas: 'Home alone',
    rezisierius: 'Rezisierius',
    biudzetas: 546839,
    uzdarbis: 9989734,
    zanras: 'Seimos',
    trukme: 1.47,
    metai: 1997,
    aktoriai: ['Kevinas', 'Marvas']
};

console.log(filmas);
console.log('Filmas uzdirbo: ', filmas.uzdarbis - filmas.biudzetas);
console.log('Kiek aktoriu: ', filmas.aktoriai.length);
console.log('Filmo amzius: ', new Date(Date.now()).getFullYear() - filmas.metai);

console.log('===== 3 UZDUOTIS =====');

let knyga1 = {
    pavadinimas: 'Haris Poteris ir isminties akmuo',
    autorius: 'J.K. Rowling',
    zanras: 'Romanas',
    kaina: 16.99,
    puslapiuKiekis: 450,
    skyriuSarasas: {
        pirmas: 'Izanga',
        anttras: 'Kas as',
        trecias: 'Hogvartso mokykla',
        ketvirtas: 'Magija'
    },
    isleidimoMetai: 1997,
    knygynuose: 'Yra'
};

let knyga2 = {
    pavadinimas: 'Saulelydis',
    autorius: 'Stephen Meyer',
    zanras: 'Romanas',
    kaina: 14.99,
    puslapiuKiekis: 475,
    skyriuSarasas: {
        pirmas: 'Izanga',
        anttras: 'Kas as',
        trecias: 'Baltaodziai',
        ketvirtas: 'Vampyras'
    },
    isleidimoMetai: 2012,
    knygynuose: 'Yra'
};

console.log('Pirmoji knyga: ', knyga1);
console.log('Antroji knyga: ', knyga2);

if (knyga1.puslapiuKiekis > knyga2.puslapiuKiekis) {
    console.log('Antroji knyga plonesne');
} else if (knyga1.puslapiuKiekis < knyga2.puslapiuKiekis) {
    console.log('Pirmoji knyga plonesne');
} else {
    console.log('Abi knygos vienodo storio');
};

if (knyga1.skyriuSarasas.length > knyga2.skyriuSarasas.length) {
    console.log('pirmoji knyga turi daugiau skyriu');
} else if (knyga1.skyriuSarasas.length < knyga2.skyriuSarasas.length) {
    console.log('Antroji knyga turi daugiau skyriu');
} else { 
    console.log('Abi knygos turi tiek pat skyriu');
};

if (knyga1.kaina * 2 > knyga2.kaina) {
    console.log('Knyga', knyga1.pavadinimas, 'yra brangesne padvigubinus jos kaina');
} else if (knyga1.kaina * 2 < knyga2.kaina) {
    console.log( 'Knyga', knyga2.pavadinimas, 'yra brangesne net padvigubinus pirmos knygos kaina');
};

console.log('===== 4 UZDUOTIS =====');

let preke1 = {
    pavadinimas: 'Stacionarus kompiuteris',
    kaina: 1989,
    savikaina: 1205,
    kodas: 'P001',
    kiekisSandelyje: 8,
    dezesMatmenys: {x: 398, y: 989, z: 500}
};
let preke2 = {
    pavadinimas: 'Stacionarus kompiuteris',
    kaina: 1989,
    savikaina: 1205,
    kodas: 'P001',
    kiekisSandelyje: 8,
    dezesMatmenys: {x: 398, y: 989, z: 500}
};

console.log('===== 4 UZDUOTIS =====');

let automobilis = {}

automobilis.marke = 'Porshe';
automobilis.modelis = '911';
automobilis.rida = 10000;
automobilis.metai = 2010;
automobilis.spalva = 'Salotine';
automobilis.turis = 3.0;
automobilis.arDauzta = false;
automobilis.arParduodamas = true;

console.log(automobilis);

let dabartiniaiMetai = new Date(Date.now()).getFullYear();
let metuskirtumas = dabartiniaiMetai - automobilis.metai

console.log('Automobiliui yra: ' + dabartiniaiMetai - automobilis.metai + 'metu');

if (metuskirtumas > 0) {
    console.log('Per metus nuvaziuoja: ' + (automobilis.rida / metuskirtumas).toFixed(2));
} else { 
    console.log(automobilis.rida);
}


