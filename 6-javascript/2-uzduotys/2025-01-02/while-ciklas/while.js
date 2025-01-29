console.log('====================================');
console.log('====   Loop while uzduotys    ====');
console.log('====       1 pavyzdys:          ====');
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let tekstas = 'Sita teksta isvedam';
let kiek_liko = 13;

while (kiek_liko > 0) {
    console.log(tekstas);
    kiek_liko--;
}

let prekiuKiekis = 24;

while (prekiuKiekis > 0) {
    console.log('Turimas prekiu kiekis:', prekiuKiekis);
    let kiekNupirko = Math.floor(Math.random() * 5) +1;
    console.log('Nupirko:', kiekNupirko);

    prekiuKiekis -= kiekNupirko;
}
while (prekiuKiekis > 0) {
    console.log('Turimas prekiu kiekis:', prekiuKiekis);
    let kiekNupirko = Math.floor(Math.random() * 5) +1;
    if (kiekNupirko > prekiuKiekis) {
        kiekNupirko = prekiuKiekis;
    }
    console.log('Nupirko:', kiekNupirko);

    prekiuKiekis -= kiekNupirko;
}

while (true) {
    let skaicius = Math.floor(Math.random() * 100) + 1;
    console.log(skaicius);

    if (skaicius % 7 === 0 && skaicius % 2 === 0) {
        console.log('Skaicius dalinasi is 7 ir is 2 ', skaicius);
        break;
    }
}
console.log('===================');

skaicius = 1;

while (skaicius % 7 != 0 || skaicius % 2 != 0) {
    skaicius = Math.floor(Math.random() * 100) + 1;
    console.log(skaicius);
}
console.log('===================');

let blokoAukstis = 100;
let turinioAukstis = 128;

console.log('Pradiniai duomenys');
console.log('Bloko aukstis ', blokoAukstis);
console.log('Turinio aukstis ', turinioAukstis);

while (turinioAukstis > blokoAukstis) {
    blokoAukstis += 10;
}
console.log('Atnaujinti duomenys');
console.log('Bloko aukstis ', blokoAukstis);
console.log('Turinio aukstis ', turinioAukstis);

console.log('===================');

let duomenuKiekis = 100;
let apdorota = 10;

while (apdorota < duomenuKiekis) {
    console.log('Jau apdorota ' + apdorota + '% duomenu');
    apdorota += Math.floor(Math.random() * 10);
}
console.log('Baigta, pilnai apdorota');

console.log('===================');

let suma = 0;
skaicius = 0;

while (suma < 500) {
    skaicius = Math.floor(Math.random() * 100) + 1;
    suma += skaicius;
    console.log(skaicius);
}
console.log('Skaiciu suma: ', suma);