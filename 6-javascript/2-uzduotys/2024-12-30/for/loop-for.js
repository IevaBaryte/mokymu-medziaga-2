console.log('====================================');
console.log('====    Ciklas for uzduotys     ====');
console.log('====       1 uzduotis:          ====');
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('====    2 uzduotis:     ====');
for (let i = 0; i <= 15; i+=2) {
    console.log (i);
}

console.log('====    3 uzduotis:     ====');
for (let i = 1; i <= 20; i+=3) {
    console.log ('[' + i + ']');
}

console.log('====    4 uzduotis:    ====');
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        console.log('skaicius ' + i + ' dalinasi is 4')
    }
}
console.log('====       5 uzduotis:          ====');

let start = 12;
let end = 36;
if (start < end) {
for (let i = start; i <= end; i++) {

        console.log((i)  , (Math.pow(i ,2)));
    }
} else if ( start > end){
    console.log('Invalid');
}

console.log('====    6 uzduotis:    ====');

if (start < end) {
    for (let j = start; j <= end; j++) {
        if (j % 2 !== 0 || j % 8 === 0) {
            console.log(j);
        }
    }
} else if (start > end) {
    console.log('Invalid');
}


console.log('====    7 uzduotis:    ====');
let skaicius = 5, n =4;
let rezultatas = 0;
for (let i = 1; i <= n; i++) {
    rezultatas += skaicius;
}
console.log(rezultatas);