console.log('===== FUNKCIJOS 5 DALIS =====');
console.log('===== 1 UZDUOTIS =====');

function suma(masyvas) {
    let suma = 0;
    for (let skaicius of masyvas) {
        suma += skaicius;
    }
    return suma;
}

let masyvas1 = [1, 2, 3, 4, 5];
let masyvas2 = [10, 20, 30, 40, 50];

let suma1 = suma(masyvas1);
let suma2 = suma(masyvas2);

console.log('Pirmo masyvo suma: ', suma1);
console.log('Antro masyvo suma: ', suma2);

if (suma1 > suma2) {
    console.log('Pirmo masyvo suma yra didesne');
} else if (suma1 < suma2) {
    console.log('Antro masyvo suma yra didense.');
} else {
    console.log('Abieju masyvu sumos yra lygios');
}

console.log('===== 2 UZDUOTIS =====');

function rastiIlgiausiaZodi(zodziai) {
    let ilgiausiasZodis = '';
    for (let zodis of zodziai) {
        if (zodis.length > ilgiausiasZodis.length) {
            ilgiausiasZodis = zodis;
        }
    }
    return ilgiausiasZodis
}

let zodziai = ['Mangas', 'Arbuzas', 'Vynuoge', 'Rambutanas', 'Aktinidija', 'Anona'];

let ilgiausiasZodis = rastiIlgiausiaZodi(zodziai);

console.log('Visi zodziai masyve: ', zodziai);
console.log('Ilgiausias zodis masyve yra: ', ilgiausiasZodis);
console.log('Jo ilgis yra: ', ilgiausiasZodis.length);

console.log('===== 3 UZDUOTIS =====');

function pazymiuFunkcija(pazymiai) {
    return pazymiai.every(pazymys => pazymys > 4);
    // for (let pazymys of pazymiai) {
    //     if (pazymys < 5) {
    //         return false;
    //     }
    // }
    // return true;
}


let pazymiai1 = [8, 9, 5, 6, 6, 3, 4];
let pazymiai2 = [5, 6, 4, 6, 7, 8, 9];
let rezultatas1 = pazymiuFunkcija(pazymiai1);
let rezultatas2 = pazymiuFunkcija(pazymiai2);

console.log(pazymiai1 + ' pazymiu suma: ' + rezultatas1);
console.log(pazymiai2 + ' pazymiu suma: ' + rezultatas2);


if (rezultatas1) {
    console.log('Visi studento pazymiai teigiami');
} else {
    console.log('Studentas turi neigiama pazymi');
}

if (rezultatas2) {
    console.log('Visi studento pazymiai teigiami');
} else {
    console.log('Studentas turi neigiama pazymi');
}