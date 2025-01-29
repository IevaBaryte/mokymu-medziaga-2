console.log('======== MASYVAI ========');
console.log('======== 1 DALIS  =======');
console.log('====== 1 UŽDUOTIS =======');

let pirmasMasyvas = [2, 5, 9, 30, 87, 93, 4, 28, 98];
console.log('Pirmas elementas iš masyvo: ', pirmasMasyvas[0]);
console.log('Du pasirinkti elementai iš masyvo: ', pirmasMasyvas[5], pirmasMasyvas[7]);
console.log('Elementų kiekis masyve: ', pirmasMasyvas.length);


console.log('====== 2 UŽDUOTIS =======');

let masyvas = [65, 89, -98, 24, 74, 108, 111, 176];

console.log(masyvas);

masyvas[3] = 78;
masyvas[5] = 134;
masyvas[7] = 229;

console.log('Masyvo duomenys po pakeitimų: ', masyvas);

console.log('====== 3 UŽDUOTIS =======');

let skaiciai = [];
console.log(skaiciai);

skaiciai.push(49);
skaiciai.push(69);

console.log(skaiciai);

skaiciai.push(28, 990, 84, 83, 62);

console.log(skaiciai);

console.log('====== 4 UŽDUOTIS =======');

let tusciasMasyvas = [];
let kiekis = 13;

for (let i = 0; i < kiekis; i++) {
    tusciasMasyvas.push(Math.floor(Math.random() * 100 ) + 1);
}

console.log('Masyvas: ', tusciasMasyvas);
console.log('Elementų skaičius: ', tusciasMasyvas.length);

console.log('====== 5 UŽDUOTIS =======');
let studentas1 = [5, 7, 7, 8, 9];
let studentas2 = [ 10, 6, 7, 8, 5];
let suma1 = 0;
let suma2 = 0;

for (let i = 0; i < studentas1.length; i++ ) {
    suma1 += studentas1[i];
}
let vidurkis1 = suma1 / studentas1.length;
console.log('Pirmojo studento pažymių vidurkis: ', vidurkis1);

for (let i = 0; i < studentas2.length; i++ ) {
    suma2 += studentas2[i];
}
let vidurkis2 = suma2 / studentas2.length;
console.log('Pirmojo studento pažymių vidurkis: ', vidurkis2);

if (vidurkis1 > vidurkis2) {
    console.log('Pirmojo studento vidurkis didesnis');
} else if (vidurkis1 === vidurkis2) {
    console.log('Abiejų studentų vidurkiai lygūs');
} else {
console.log('Antrojo studento vidurkis didesnis');
 }
