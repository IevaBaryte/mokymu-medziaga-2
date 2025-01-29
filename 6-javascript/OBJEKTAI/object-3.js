console.log('===== OBJEKTAI 3 DALIS =====');
console.log('===== 1 UZDUOTIS =====');

let knygos = [
    {
        pavadinimas: 'ALtoriu sesely',
        puslapiai: 278,
        kaina: 15.99
    },
    {
        pavadinimas: 'Tarp pilku debesu',
        puslapiai: 378,
        kaina: 19.99
    },
    {
        pavadinimas: 'Drugio efektas',
        puslapiai: 438,
        kaina: 16.99
    },
];

console.log(knygos);
console.log(knygos[0]);
console.log(knygos[1].kaina);

console.log('===== 2 UZDUOTIS =====');

let prekes = [
    {
        preke: 'Surelis',
        gamintojas: 'UAB Mazeikiu pienas',
        kaina: 0.49
    },
    {
        preke: 'Ledai',
        gamintojas: 'UAB Mazeikiu pienas',
        kaina: 0.99
    },
    {
        preke: 'Kava',
        gamintojas: 'Dalmayr',
        kaina: 5.49
    }
];

for (let prek of prekes) {
    console.log(prek.preke);
    console.log(prek.gamintojas);
    console.log(prek.kaina);
    console.log('========');
}

console.log('===== 3 UZDUOTIS =====');

let automobilis = [
    {
        marke: 'BMW',
        modelis: '530',
        metai: 2015,
        spalva: 'Juoda'
    },
    {
        marke: 'Volkswagen',
        modelis: 'Touareg',
        metai: 2018,
        spalva: 'Juoda'
    },
    {
        marke: 'Mini Cooper',
        modelis: 'S 2.0',
        metai: 2011,
        spalva: 'Auksine'
    }
];

let dabartiniaiMetai = new Date(Date.now()).getFullYear();

for (let auto of automobilis){

let metuskirtumas = dabartiniaiMetai - auto.metai;


console.log('Automobiliui', automobilis[].marke, automobilis[i].modelis, 'yra: ', metuskirtumas, 'metu');
}