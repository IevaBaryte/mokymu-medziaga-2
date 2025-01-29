console.log('===== OBJEKTAI 4 DALIS =====');
console.log('===== 1 UZDUOTIS =====');

let imones = [
    {
        pavadinimas: 'IT Spektras',
        ikurimoMetai: 2007,
        sritis: 'Kompiuteriu remontas, pardavimas',
        pelnas: 35000,
    },
    {
        pavadinimas: 'EXTO',
        ikurimoMetai: 2002,
        sritis: 'Elektros tinklu inzinerija',
        pelnas: 150000,
    },
    {
        pavadinimas: 'Svetaine Dabar',
        ikurimoMetai: 2019,
        sritis: 'Kavine, maistas sventems',
        pelnas: 15000,
    }
];

console.log(imones);

let dabartiniaiMetai = new Date(Date.now()).getFullYear();

console.log(dabartiniaiMetai);

let pelnoSuma = 0;

for (let amzius of imones) {
let imonesAmzius = dabartiniaiMetai - amzius.ikurimoMetai;

pelnoSuma += amzius.pelnas

console.log('Imonei ', amzius.pavadinimas, 'yra', imonesAmzius, 'metu');
console.log('Veiklos sritis: ', amzius.sritis);
console.log('Imones pelnas praejusiais metais: ', amzius.pelnas, 'Eur.');

};
let vidutinisPelnas = pelnoSuma / imones.length;

console.log('Imoniu pelno vidurkis yra: ', vidutinisPelnas.toFixed(2), 'Eur.');

console.log('===== 2 UZDUOTIS =====');

let ligonines = [
    {
        pavadinimas: 'Siauliu respublikine ligonine',
        adresas: 'Siauliai',
        lankytojuSkaicius: 15893,
        darbuotojai: 234,
        mirciuSkaicius: 3
    },
    {
        pavadinimas: 'Kauno Klinikos',
        adresas: 'Kaunas',
        lankytojuSkaicius: 23567,
        darbuotojai: 567,
        mirciuSkaicius: 20
    },
    {
        pavadinimas: 'Santariskes',
        adresas: 'Vilnius',
        lankytojuSkaicius: 89204,
        darbuotojai: 786,
        mirciuSkaicius: 89
    },
];

let visiLankytojai = 0;
let visiDarbuotojai = 0;

for (let ligonine of ligonines) {
     visiLankytojai += ligonine.lankytojuSkaicius
     visiDarbuotojai += ligonine.darbuotojai
     console.log(ligonine.pavadinimas, ligonine.adresas);
};

console.log('Visu ligoniniu lankytoju skaicius: ', visiLankytojai);
console.log('Ligoninese dirbanciu darbuotoju bendras skaicius: ', visiDarbuotojai);