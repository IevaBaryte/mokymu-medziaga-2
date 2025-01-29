console.log('===== FUNKCIJOS 4 DALIS =====');
console.log('===== 1 UZDUOTIS =====');

console.log('===== 2 UZDUOTIS =====');

console.log('===== 3 UZDUOTIS =====');

console.log('===== 4 UZDUOTIS =====');

console.log('===== 5 UZDUOTIS =====');

function arPirminis(skaicius) {
    for (let i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
            return false
        }
    }
    return true;
}


for (let skaicius = 2; skaicius <= 15; skaicius++){;
console.log(`${skaicius} ${arPirminis(skaicius)}`);
}


console.log('===== 6 UZDUOTIS =====');

function sumaDvieju(a ,b) {
    return a + b;
}

function sumaTriju (a, b, c) {
    return a + b + c;
}

function skirtumas(a, b) {
    return a - b;
}

function sandauga(a, b) {
    return a * b;
}

function dalyba (a, b) {
    if (b === 0) {
        return 'Dalyba iš nulio negalima';
    }
    return a / b;
}

function skaiciavimai() {
    let skaicius1 = 88;
    let skaicius2 = 13;
    let skaicius3 = 43;

    console.log(`Atsitiktinaii skaiciai: ${skaicius1}, ${skaicius2}, ${skaicius3}`);
    console.log(`${skaicius1} + ${skaicius2} = ${sumaDvieju(skaicius1, skaicius2)}`);
    console.log(`${skaicius1} + ${skaicius2} + ${skaicius3} = ${sumaTriju(skaicius1, skaicius2, skaicius3)}`);
    console.log(`${skaicius1} - ${skaicius2} = ${skirtumas(skaicius1, skaicius2)}`);
    console.log(`${skaicius1} * ${skaicius2} = ${sandauga(skaicius1, skaicius2)}`);
    console.log(`${skaicius1} / ${skaicius2} = ${dalyba(skaicius1, skaicius2)}`);
}

skaiciavimai();