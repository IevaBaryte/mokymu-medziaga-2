let now = new Date();
let date1 = new Date('May 11 2015 09:00');

console.log(now);
console.log(date1);

console.log(now.toLocaleDateString('Lt'));
console.log(now.toLocaleTimeString('Lt'));

let now_n = new Date();
now_n.setDate(now_n.getDate() - 5);
console.log(now_n.toLocaleDateString('Lt'));

console.log('====== 2 uzduotis ======');

if (now > now_n) {
    console.log(`Data: ${now.toLocaleDateString('Lt')} yra didesne nei data ${now_n.toLocaleDateString('lt')}`);
} else {
    console.log(`Data: ${now_n.toLocaleDateString('lt')} yra didesne, nei data ${now.toLocaleDateString('lt')}`);
}

console.log('====== 3 uzduotis ======');

let data1 = '2025-01-23 19:49';
let data2 = '2024-11-08 14:20';

let date1 = new Date(data1);
let date2 = new Date(data2);

let difference = Math.abs(date1 - date2);

let dienos = Math.floor(difference / )
