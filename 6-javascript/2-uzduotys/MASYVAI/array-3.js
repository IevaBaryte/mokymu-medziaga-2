console.log('======== MASYVAI ========');
console.log('======== 3 DALIS  =======');
console.log('====== 1 UŽDUOTIS =======');
let elementai = ['Tvora', 'Vartai', 'Trinkeles', 'Smelis', 'Acijos', 'Kvarcinis smelis'];

for (let indeksas in elementai) {
    console.log('Indeksas ', indeksas, ' Elementas ', elementai[indeksas]);
}

console.log('====== 2 UŽDUOTIS =======');

let pirkiniai = ['Obuoliai', 'Aliejus', 'Duona', 'Mesa', 'Agurkai', 'Pomidorai', 'Grietine'];

for (let pirkiniuIndeksas in pirkiniai) {
    console.log('** ', pirkiniai[pirkiniuIndeksas]);
}

console.log('Pirkiniu sarase: ', pirkiniai.length);

console.log('====== 3 UŽDUOTIS =======');

let pazymiai = [7, 8, 9, 4, 6, 7, 9];

let suma = 0;
for (let pazymiuIndeksas in pazymiai) {
    console.log('Pazymiai: ', pazymiai[pazymiuIndeksas]);
}
for (let pazymys of pazymiai) {
    suma += pazymys;
}

console.log('Vidurkis: ', Math.floor(suma / pazymiai.length));

console.log('====== 4 UŽDUOTIS =======');

let kilometrai = [129, 243, 765, 97, 145, 187, 90, 299];

for (let kilometras of kilometrai) {
    if (kilometras >= 150) {
        console.log(kilometras);
    }
}
console.log('====== 5 UŽDUOTIS =======');

let automobiliai = ['BMW', 'Audi', 'Volkswagen', 'Bentley', 'Ferrari', 'Chevrolet', 'Ford'];

for (let i = 0; i < automobiliai.length; i++) {
    let automobilis = automobiliai[i];
    let raidziuSkaicius = automobilis.length;

console.log(`${automobilis} - turi ${raidziuSkaicius} raides`);
}
console.log('====== 6 UŽDUOTIS =======');

let klaidos = ['404', '502', '500', '204','511' ];

console.log(klaidos[0], 'Not found');
console.log(klaidos[1], 'Bad gateway');
console.log(klaidos[2], 'Internal Server Error');
console.log(klaidos[3], 'No content');
console.log(klaidos[4], 'Network Authentication Required');

console.log('====== 7 UŽDUOTIS =======');

let likuciai = [74, 64, 32];
let perDienaperka = 5;

for (let likutis of likuciai) {
    console.log(likutis + ' vnt uzteks mazdaug tiek dienu: '  + Math.floor(likutis / perDienaperka));
}

console.log('====== 8 UŽDUOTIS =======');
 pazymiai = [];
 let pazymiuKiekis = 10;

 for (let i =0; i < pazymiuKiekis; i++) {
    pazymiai.push(Math.floor(Math.random() * 10) + 1);
 }
console.log(pazymiai);

 let pazymiuSuma = 0;

 for (let pazymys of pazymiai){
    pazymiuSuma += pazymys;
 }

 console.log('Vidurkis: ', pazymiuSuma / pazymiai.length);

 let teigiamiPazymiai = [];
 let neigiamiPazymiai = [];

 for (let pazymys of pazymiai) {
    if (pazymys >= 5) {
        teigiamiPazymiai.push(pazymys);
    } else {
        neigiamiPazymiai.push(pazymys);
    }
 }
 
 console.log('Teigiami pazymiai: ', teigiamiPazymiai);
 console.log('Neigiami pazymiai: ', neigiamiPazymiai);
 console.log('Neigiamu pazymiu kiekis: ', neigiamiPazymiai.length);

console.log('====== 9 UŽDUOTIS =======');

let pirmoStudentoPazymiai = [8, 5, 6, 9, 10, 7];
let antroStudentoPazymiai = [9, 5, 10, 10, 8, 7];

let pirmoStudPazymiuSuma = 0;

for (let pirmo of pirmoStudentoPazymiai) {
    pirmoStudPazymiuSuma += pirmo;
}
let antroStudPazymiuSuma = 0;

for (let antro of antroStudentoPazymiai) {
    antroStudPazymiuSuma += antro;

}
console.log(`Pirmojo studento pazymiai: ${pirmoStudentoPazymiai}`);
console.log('Pirmojo studento pazymiu vidurkis: ', Math.floor(pirmoStudPazymiuSuma / pirmoStudentoPazymiai.length));
console.log(`Antrojo studento pazymiai: ${antroStudentoPazymiai}`);
console.log('Antrojo studento pazymiu vidurkis: ', Math.floor(antroStudPazymiuSuma / antroStudentoPazymiai.length));

let pirmostudVidurkis = pirmoStudPazymiuSuma / pirmoStudentoPazymiai.length;

let antrostudVidurkis = antroStudPazymiuSuma / antroStudentoPazymiai.length;

if (pirmostudVidurkis > antrostudVidurkis) {
    console.log(`Pirmo studento vidurkis didesnis: ${parseFloat(pirmostudVidurkis).toFixed(2)} > ${parseFloat(antrostudVidurkis).toFixed(2)}`);
} else {
    console.log(`Antro studento vidurkis didesnis: ${parseFloat(antrostudVidurkis).toFixed(2)} > ${parseFloat(pirmostudVidurkis).toFixed(2)}`);
}



