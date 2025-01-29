let studentas = {
    vardas: 'Jonas',
    amzius: 20,
    studijos: {
        kursas: 'Medicina',
        universitetas: 'VU',
        metai: 4,
        kartojantis: false,
        pazymiai: [8, 7, 9, 4]
    },
    miestas: 'Vilnius'
};
console.log(studentas);

let studentai = [
    {    vardas: 'Jonas',
        amzius: 20,
        studijos: {
            kursas: 'Medicina',
            universitetas: 'VU',
            metai: 4,
            kartojantis: false,
            pazymiai: [8, 7, 9, 4]
        },
        miestas: 'Vilnius'},
        {    vardas: 'Ieva',
            amzius: 20,
            studijos: {
                kursas: 'Medicina',
                universitetas: 'VU',
                metai: 4,
                kartojantis: false,
                pazymiai: [8, 7, 9, 4]
            },
            miestas: 'Vilnius'},
            {
                vardas: 'Egidijus',
                amzius: 20,
                studijos: {
                    kursas: 'Medicina',
                    universitetas: 'VU',
                    metai: 4,
                    kartojantis: false,
                    pazymiai: [8, 7, 9, 4]
                },
                miestas: 'Vilnius'
            }
];

console.log(studentai);

console.log(studentas.amzius);
console.log(studentas.vardas);
console.log(studentas.studijos.kursas);

// pakeisti kazka 

studentas.miestas = 'Kaunas';
console.log(studentas);

let tuscia = {};
console.log(tuscia);

tuscia.savybe = 12; 
console.log(tuscia);