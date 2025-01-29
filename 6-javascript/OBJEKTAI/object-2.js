console.log('===== OBJEKTAI 2 DALIS =====');
console.log('===== 1 UZDUOTIS =====');

let knygynas = {
    pavadinimas: 'Knygu pasaulis',
    adresas: 'Vasario 16-osios gatve 29',
    plotas: 457,
    kiekTuriKnygu: 2987,
    darboValandos: {
        nuo: 8.00,
        iki: 17.00
    },
    arAtidarytas: true
}

for (let property in knygynas) {
    console.log('Savybe: ' + property + 'reiksme: ' + knygynas[property]);


    if (typeof knygynas[property] !== 'string') {
        console.log('Ner string tipas ' + property);
    }
}

console.log('===== 2 UZDUOTIS =====');

let studentas1 = {
    vardas: 'Name',
    pavarde: 'Surname',
    studijuProgramosPavadinimas: 'Matematika',
    pazymiai: [6, 7, 8, 9]
};

let studentas2 = {
    vardas: 'Name2',
    pavarde: 'Surname2',
    studijuProgramosPavadinimas: 'Informatika',
    pazymiai: [5, 7, 8, 4]
};

let suma = 0;
for (let pazymys of studentas1.pazymiai) {
    suma += pazymys;
}

studentas1.pazVidurkis = (suma / studentas1.pazymiai.length).toFixed(2);
console.log(studentas1);

suma = 0;
for (let pazymys of studentas2.pazymiai) {
    suma += pazymys;
}

studentas2.pazVidurkis = (suma / studentas2.pazymiai.length).toFixed(2);
console.log(studentas2);

if (studentas1.pazVidurkis > studentas2.pazVidurkis) {
    console.log(studentas1.vardas);
    console.log(studentas1.pavarde);
} else {
    console.log(studentas2.vardas);
    console.log(stduentas2.pavarde);
};