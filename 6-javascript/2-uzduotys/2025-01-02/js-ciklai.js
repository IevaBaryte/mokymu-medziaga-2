console.log('====================================');
console.log('====    Ciklas for uzduotys     ====');
console.log('====       1 uzduotis:          ====');


console.log('====    2 uzduotis:     ====');


console.log('====    3 uzduotis:     ====');


console.log('====    4 uzduotis:    ====');

console.log('====    5 uzduotis:     ====');

let suma1 = 0; suma2 = 0;

for (let i = 1; i <= 100 ; i++) {
    if (i % 5 === 0 && i % 3 === 0){
        console.log('FizzBuzz');
    }

    else if (i % 3 === 0) {
        console.log('Fizz');
    }

    else if (i % 5 === 0) {
        console.log('Buzz');
    }

    else {
        console.log(i);
    }
}


console.log('====    5 uzduotis kitaip:    ====');

// let fizzBuzztEST = new Array(100)
// .fill(0)
// .map(item) => {
//     if (item % 3 === 0 && item % 5 === 0) {
//         return 'FizzBuzz'
//     }

// }
console.log('====    6 uzduotis:    ====');

let number1 = 1; number2 = 1;
let n = 20;
let current = 0;

console.log(number1);
console.log(number2);
for(let i = 2; i <= n; i++) {
let current = number1 + number2;
number1 = number2;
number2 = current;
console.log(current);
}