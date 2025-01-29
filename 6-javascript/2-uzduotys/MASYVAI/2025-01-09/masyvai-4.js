let skaiciaiPild = [8, 4, 2, 8, 7];
console.log(skaiciaiPild);
skaiciaiPild.unshift(-2);

console.log(skaiciaiPild);
skaiciaiPild.shift();
console.log(skaiciaiPild);

skaiciaiPild.splice(2, 0, -10, -7);
console.log(skaiciaiPild);

skaiciaiPild.splice(1, 2); //nurodom indeksa, kuri norim pasalinti

console.log(skaiciaiPild);

console.log('=====  MASYVU APJUNGIMAS =====');

let pirmas = [1, 4, 6, 7, 9];
let antras = [8, 9, 7, 3, 5];

let sujungtas = pirmas.concat(antras);

console.log('Pirmas masyvas: ', pirmas);
console.log('Antras masyvas: ', antras);
console.log('Sujungtas masyvas: ', sujungtas);

let didelissujungimas = sujungtas.concat(skaiciaiPild, pirmas, antras);

console.log('Didelis sujungimas: ', didelissujungimas);


// ISKARPA 

let iskarpa = didelissujungimas.slice(5, 10); //nuo penkto elemento iki 10

console.log(iskarpa);


console.log('===== MASYVO KOPIJA ======');

let kopija = skaiciaiPild.slice();
console.log(kopija);

let naujaKopija = [123, ...skaiciaiPild, ...pirmas];

console.log(naujaKopija);
