let skaiciai = [4, 8, 7, 9];

skaiciai.forEach(((skaicius) => {
    console.log(skaicius);
}));

skaiciai.forEach((function (skaicius) {
    console.log(skaicius);
}));

skaiciai.forEach(skaicius => console.log(skaicius));

skaiciai.forEach(((skaicius, indeksas) => {
    console.log('Reiksme: ' + skaicius);
    console.log('Indeksas: ' + indeksas);
}));

console.log('===== PAIESKA =====');

let zmones = ['Tomas', 'Greta', 'Paulius'];

console.log(zmones);

console.log(
    zmones.find((zmogus) => {
        return zmogus === 'Greta';
    })
);

console.log(
    zmones.find(zmogus => zmogus === 'Paulius')
);

console.log('===== FILTER =====');

skaiciai = [7, 8, -3, -5, -7, 2, 0, 8, -4];

let teigiami = skaiciai.filter(function(skaicius) {
    return skaicius > 0;
});

console.log('Teigiami skaiciai: ', teigiami);

let lyginiai = skaiciai.filter(reiksme => reiksme % 2 === 0);

console.log('Lyginiai skaiciai: ' + lyginiai);

let atrinkti = skaiciai.filter(elementas => {
    return elementas % 2 === 0 && elementas > 0;
});

console.log(atrinkti);

console.log('===== MAP =====');

let dvigubi = skaiciai.map(x => x * 2);
console.log('Dvigubi skaiciai: ', dvigubi);

let trigubi = skaiciai.map(x => {
    return x * 3;
});
console.log('Trigubi skaiciai: ', trigubi);

console.log('===== FUNKCIJU APJUNGIMAS =====');

let atrinktiskaiciai = skaiciai 
.filter(x => x > 0)
.sort()
.map(x => `<div>${x}</div>`)

console.log(atrinktiskaiciai);

let cssklases = ['red', 'blue', 'green'];
let atrinkti2 = cssklases
.sort()
.map(x => `<div class='bg-color-${x}'></div>`);

console.log(atrinkti2);

console.log('===== REDUCE FUNKCIJA =====');

