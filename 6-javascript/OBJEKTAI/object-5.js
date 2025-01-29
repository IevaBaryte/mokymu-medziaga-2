console.log('===== OBJEKTAI 5 DALIS =====');
console.log('===== 1 UZDUOTIS =====');

let studentai = [
    {
        vardas: 'Egidijus',
        pavarde: 'Egidaitis',
        amzius: 26,
        pazymiai: [9, 8, 9, 7, 10, 9],
        studijuPrograma: 'Informacines sistemos',
        kursas: 4,
    },
    {
        vardas: 'Gabrielius',
        pavarde: 'Gabrielaitis',
        amzius: 23,
        pazymiai: [8, 7, 6, 8, 8, 9],
        studijuPrograma: 'Matematika',
        kursas: 1,
    },
    {
        vardas: 'Jone',
        pavarde: 'Jonaityte',
        amzius: 24,
        pazymiai: [9, 9, 8, 8, 7, 9],
        studijuPrograma: 'Sociologija',
        kursas: 2,
    }
];

let bendraSuma = 0;

for (let stud of studentai) {
    console.log('Studentas(-e): ', stud.vardas, stud.pavarde, stud.amzius, 'metu amziaus, mokosi ', stud.studijuPrograma, stud.kursas, 'kurse.');
    console.log('Studento pazymiai: ', stud.pazymiai);
    
    let suma = 0;

    for (let paz of stud.pazymiai) {
        suma += paz;
    } 
    let vidurkis = Math.round(suma / stud.pazymiai.length);
    bendraSuma += vidurkis 

    console.log('Studento pazymiu vidurkis: ', vidurkis)
    console.log('--------------------');

};

console.log('Visu studentu bendras vidurkis: ', bendraSuma / studentai.length);

console.log('=====2 UZDUOTIS =====');

let parduotuve = {
    pavadinimas: "Mano Parduotuvė",
    adresas: "Vilniaus g. 1, Vilnius",
    darbuotojuKiekis: 5,
    prekes: [
        { pavadinimas: "Duona", 
            kodas: "001", 
            kaina: 1.2, 
            savikaina: 0.8, 
            turimasKiekis: 50 
        },
        { 
            pavadinimas: "Pienas", 
            kodas: "002", 
            kaina: 0.9, 
            savikaina: 0.6, 
            turimasKiekis: 80 
        },
        { 
            pavadinimas: "Sūris", 
            kodas: "003", 
            kaina: 2.5, 
            savikaina: 1.8, 
            turimasKiekis: 30 
        },
        { 
            pavadinimas: "Kava", 
            kodas: "004", 
            kaina: 5.0, 
            savikaina: 3.5, 
            turimasKiekis: 20 
        },
        { 
            pavadinimas: "Arbata", 
            kodas: "005", 
            kaina: 3.0, 
            savikaina: 2.0, 
            turimasKiekis: 25 
        },
    ],
};

console.log(`Pavadinimas: ${parduotuve.pavadinimas}`);
console.log(`Adresas: ${parduotuve.adresas}`);
console.log(`Darbuotojų kiekis: ${parduotuve.darbuotojuKiekis}`);

console.log("Prekės:");
parduotuve.prekes.forEach((preke) => {
    console.log(`- ${preke.pavadinimas}: Kaina - ${preke.kaina} €, Kiekis - ${preke.turimasKiekis}`);
});
const bendrasKiekis = parduotuve.prekes.reduce((total, preke) => total + preke.turimasKiekis, 0);
console.log(`Bendras prekių kiekis: ${bendrasKiekis}`);

let daugiausiaiPrekiu = parduotuve.prekes.reduce((max, preke) => preke.turimasKiekis > max.turimasKiekis ? preke : max);
let maziausiaiPrekiu = parduotuve.prekes.reduce((min, preke) => preke.turimasKiekis < min.turimasKiekis ? preke : min);

console.log(`Daugiausiai prekių: ${daugiausiaiPrekiu.pavadinimas} (${daugiausiaiPrekiu.turimasKiekis} vnt.)`);
console.log(`Mažiausiai prekių: ${maziausiaiPrekiu.pavadinimas} (${maziausiaiPrekiu.turimasKiekis} vnt.)`);
