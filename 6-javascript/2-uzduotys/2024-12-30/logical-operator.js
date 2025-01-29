console.log('================================');
console.log('====   Loginiai operatoriai uzduotys      ====');
console.log('====   3 uzduotis:          ====');

let egzRez1 = 5, egzRez2 = 7, egzRez3 = 9;

let egzaminuvidurkis = (egzRez1 + egzRez2 + egzRez3) / 3;

if ((egzaminuvidurkis <= 10) && (egzaminuvidurkis >= 8)) {
    console.log('[8-10]');
} else if ((egzaminuvidurkis < 8) && (egzaminuvidurkis >= 5)) {
    console.log('[5-8]');
} else {
    console.log('vidurkis mazesnis uz 5');
}

console.log('====   4 uzduotis:          ====');

let numberA = 7, numberB = 5;
if (numberB <= numberA  || numberA == 0) {
    console.log('Antras skaicius didesnis uz antra arba lygus 0');
}
if (numberA <= numberB || numberB === 5) {
    console.log('Antras skaicius didesnis uz pirma arba lygus 5');
}
if (numberB <= numberA && numberA === 20) {
    console.log('Pirmas skaicius didesnis uz antra ir lygus 20');
}
if (numberA <= numberB && numberB < 100) {
    console.log('Antras skaicius didesnis uz pirma ir mazesnis uz 100');
}