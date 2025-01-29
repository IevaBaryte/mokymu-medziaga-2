console.log('======== MASYVAI ========');
console.log('======== 5 DALIS  =======');
console.log('====== 1 UŽDUOTIS =======');

let pirmiSkaiciai = [3, 7, 2, 9, 6, 4];

let lyginis = pirmiSkaiciai.find(skaicius => {
    return skaicius % 2 === 0;
});

console.log(lyginis);


console.log('====== 2 UŽDUOTIS =======');

let antriSkaiciai = [-3, 0, 5, -8, 2, 7];

let teigiamas = antriSkaiciai.find(skaicius => {
    return skaicius > 0;
})
console.log(teigiamas);

console.log('====== 3 UŽDUOTIS =======');

let masyvas3 = [8, 4, 7, -3, -7, 9, -4];

let neigiamas = masyvas3.findIndex(neigiamasSkaicius => neigiamasSkaicius < 0);

console.log('Neigiamo skaiciaus indeksas: ', neigiamas);

console.log('====== 4 UŽDUOTIS =======');

let masyvas4 = [3, 8, 12, 19, 4, 10];

let didesnis = masyvas4.findIndex(desimt => {
    return desimt >= 10;
});

console.log(didesnis);

console.log('====== 5 UŽDUOTIS =======');

let masyvas5 = [8, 4, 5, 8, 9, 3, 10, 18];

let specialusSkaicius = masyvas5.find(masyvas5 => {
    return masyvas5 % 3 === 0 && masyvas5 > 10;
});

console.log(masyvas5);
console.log(specialusSkaicius);

console.log('====== 6 UŽDUOTIS =======');

let masyvas6 = [5, 8, -3, -6, 4, 7];

let lyginisNeigiamas = masyvas6.find(masyvas6 => {
    return masyvas6 % 2 === 0 && masyvas6 < -1;
});

console.log(masyvas6);
console.log(lyginisNeigiamas);

console.log('====== 7 UŽDUOTIS =======');

let masyvas7 = [7, 5, 9, 8];

let visi = masyvas7.every(elementas => {
    return elementas>0;
});

console.log(visi);

console.log('====== 8 UŽDUOTIS =======');

let masyvas8 = [12, 2, 32, 4, 52];
let visiElementai = masyvas8.every(elementas2 => {
    return elementas2 % 2 === 0;
});

console.log(visiElementai);

console.log('====== 9 UŽDUOTIS =======');

let masyvas9 = [12, 2, 32, 4, 52];

let mazesnis = masyvas9.some(elementas3 => {
    return elementas3 < 5;
});

console.log(masyvas9);

console.log('====== 10 UŽDUOTIS =======');

let masyvas10 = [-12, -2, 32, -4, -52];

let vienasTeigiamas = masyvas10.some (elementas4 => {
    return elementas4 > 0;
});

console.log(vienasTeigiamas);

console.log('====== 11 UŽDUOTIS =======');

// let masyvas11 = [-12, -2, 32, -4, -52];
// let teisingaReiksme = true;
// let neteisingaReiksme = false;

// let reiksme11 = masyvas11.some( skaicius => {
//     return skaicius > 0;
// }) .some(skaicius % 2 === 0);
// if (reiksme11) {
//     console.log(teisingaReiksme);
// } else {
//     console.log(neteisingaReiksme);
// };

console.log('====== 12 UŽDUOTIS =======');



console.log('====== 16 UŽDUOTIS =======');

let pazymiai = [7, 8, 10, 6, 5, 9];

let geriPazymiai = pazymiai.filter(item => item >= 8);

console.log('geri pazymiai: ' + geriPazymiai);
console.log('Geru pazymiu kiekis: ' + geriPazymiai.length);

console.log('====== 17 UŽDUOTIS =======');

let fib = [];
let n = 5;

for(let i = 0; i < n; i++) {
    if (i > 1) {
        fib.push(
            fib[i -2] + fib[i -2]
        );
    } else{ 
        fib[i]=i;
    }
}

console.log(fib);