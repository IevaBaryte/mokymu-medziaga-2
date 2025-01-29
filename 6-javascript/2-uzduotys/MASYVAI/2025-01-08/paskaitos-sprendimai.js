let skaiciai = [7, 8, 4, 9, 6];

for (let i = 0; i < skaiciai.length; i++) {
    console.log(`${ i + 1} elemento masyve reikšmė yra: ${skaiciai[i]}`);
}

console.log('while');
let j = 0;

while ( j < skaiciai.length) {
    console.log(`${ j + 1 } elemento masyve reikšmė yra: ${skaiciai[j]}`);
    j++;
}

console.log('==== Pavyzdys 2 ====');

let randomskaiciai = [];

for(let i = 0; i < 7; i++) {
    randomskaiciai.push(
        Math.floor(Math.random() * 10) + 1
    );
}

console.log(randomskaiciai);

randomskaiciai = [];

console.log('while');
let index = 0;
while( index < 7) {
    randomskaiciai.push(
        Math.floor(Math.random() * 10) + 1
    );
    index++;
}

console.log(randomskaiciai);

console.log('==== Pavyzdys 3 ====');

let masyvas = [7, 8, 4, 9, 6];
for (let i = 0; i < masyvas.length; i++) {
    console.log('Indeksas: ', i);
    console.log('Reikšmė: ', masyvas[i]);
    console.log('');
}


console.log('==== Pavyzdys 4 ====');
// rodo atvirksciai nuo galo i prieki

let medziai = ['Obelis', 'Kriaušė', 'Beržas', 'Eglė'];

for (let i = medziai.length - 1; i >= 0; i--) {
console.log(medziai[i]);

}

console.log('==== MASYVAI 3 DALIS====');

console.log('=== for OF ===')
skaiciai = [1, 4, 8, 7, 12];

for(let elementas of skaiciai) {
    console.log(elementas);
}

console.log('=== for IN ===')

for(let indeksas in skaiciai) {
    console.log(indeksas);
}