console.log('==============================');
console.log('======== ATSISKAITYMAS =======');
console.log('========= 1 uzduotis =========');

// Sukurkite funkciją, kuri paverstų eurus į dolerius.
// Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// doleriais.

function euraiToUsd(eurai, usdKursas = 1.1) {
    return eurai * usdKursas;
}

function atsitiktinisEuruSkaicius(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let eurai = atsitiktinisEuruSkaicius();
let usdKursas = 1.1;
let doleriai = euraiToUsd(eurai, usdKursas);

console.log(`Atsitiktine euru suma: \u20AC ${eurai}`);
console.log(`Atitikmuo doleriais (kursas ${usdKursas}): $${doleriai.toFixed(2)}`);

console.log('========= 2 uzduotis =========');

// Sukurkite funkciją, kuri paverstų dolerius į eurus.
// Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// eurais.

function usdToEur(doleris, eurKursas = 0.91) {
    return doleris * eurKursas;
}

function atsitiktinisDoleriuSkaicius(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

let doleris = atsitiktinisDoleriuSkaicius();
let eurKursas = 0.91;
let euras = usdToEur(doleris, eurKursas);

console.log(`Atsitiktine doleriu suma: $${doleris}`);
console.log(`Atitikmuo eurais (kursas ${eurKursas}): \u20AC ${euras.toFixed(2)}`);

console.log('========= 3 uzduotis =========');
// Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
// mass index), kai yra žinomas žmogaus ūgis ir svoris.

function apskaiciuotiBMI(svoris, ugis) {
    let bmi = svoris / (ugis * ugis);
    return bmi.toFixed(2);
}

let svoris = 52;
let ugis = 1.67;
let bmi = apskaiciuotiBMI(svoris, ugis);

console.log(`Jusu BMI yra: ${bmi}`);


console.log('========= 4 uzduotis =========');

// Parašykite programą, kuri iš duoto žmogaus amžiaus metais
// pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
// dienomis.

function amziusDienomis(amziusMetais) {
    let dienosMetuose = 365;
    let valandosDienoje = 24;
    let minutesValandoje = 60;
    let sekundesMinuteje = 60;

    let dienos = amziusMetais * dienosMetuose;
    let valandos = dienos * valandosDienoje;
    let minutes = valandos * minutesValandoje;
    let sekundes = minutes * sekundesMinuteje;

    return {
        sekundes: sekundes,
        minutes: minutes,
        valandos: valandos,
        dienos: dienos
    };
}

let amzius = 31;
let laikas = amziusDienomis(amzius);

console.log(amzius, 'metai yra:');
console.log(laikas.sekundes, 'sekundes');
console.log(laikas.minutes, 'minutes');
console.log(laikas.valandos, 'valandos');
console.log(laikas.dienos, 'dienos');

console.log('========= 5 uzduotis =========');

// Parašykite programą, kuri konvertuos termometro
// duomenis iš Farenheito į Celsijų, ir atvirkščiai.

function konvertuotiTemperatura(rodmuo, reiksme) {
    if (reiksme === 'F') {
        return (rodmuo - 32) * 5 /9;
} else if (reiksme === 'C') {
    return (rodmuo * 9 / 5) + 32;
}}

let temperaturaFahrennheit = 109;
let temperaturaCelsius = 36.6;

let konvertuotiICelsius = konvertuotiTemperatura(temperaturaFahrennheit, 'F');
let konvertuotiIFahrennheit = konvertuotiTemperatura(temperaturaCelsius, 'C');

console.log(`${temperaturaFahrennheit} F yra ${konvertuotiICelsius.toFixed(2)} C`);
console.log(`${temperaturaCelsius} C yra ${konvertuotiIFahrennheit.toFixed(2)} F`);

console.log('========= 6 uzduotis =========');

// Sukurkite kodą, kuris išspausdins į konsolę
// 1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
// dešimties neturėtų būti brūkšniuko.

let kodas = [];

for (let i = 1; i <= 10; i++) {
    kodas.push(i);
}

console.log(kodas.join('-'));

console.log('========= 7 uzduotis =========');

// Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
// *
// * *
// * * *
// * * * *
// * * * * *

let stulpeliai = 5;

for (let i = 1; i <= stulpeliai; i++) {
    let linija = '';
    for (let j = 1; j <= i; j++) {
        linija += '* ';
    }
    console.log(linija);
}


console.log('========= 8 uzduotis =========');

// Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.

function dienosIkiKaledu() {
    let siandien = new Date();
    let metai = siandien.getFullYear();
    let kaleduData = new Date(metai, 11, 25);

    if (siandien > kaleduData) {
        kaleduData.setFullYear(metai + 1);
    }
    let laikoSkirtumas = kaleduData - siandien;
    let dienuSkirtumas = Math.ceil(laikoSkirtumas / (1000 * 60 * 60 * 24));

    return dienuSkirtumas;
}

console.log(`Iki Kaledu liko ${dienosIkiKaledu()} dienos.`);

console.log('========= 9 uzduotis =========');

// Parašykite kodą, kuris apjungia masyvo duomenis į vieną
// tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
// Tomas,Dainius,Paulius,Jonas
// Tomas+Dainius+Paulius+Jonas

let vardai = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

let atskirtiKableliu = vardai.join(', ');

let pliusuAtskirti = vardai.join('+');

console.log(atskirtiKableliu);
console.log(pliusuAtskirti);

console.log('========= 10 uzduotis =========');

// Parašykite kodą, kuris sugeneruos dvylikos simbolių
// slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
// mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
// simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.

