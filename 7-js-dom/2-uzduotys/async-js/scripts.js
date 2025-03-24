console.log('======== 1 uzduotis =========');
function callHelloLater(callback) {
    setTimeout(callback, 2000);
}
function sayHello() {
    console.log('hello')
};

callHelloLater(sayHello);

console.log('======== 2 uzduotis =========');


console.log('======== 6 uzduotis =========');

function checkUserLogin(isUserLogedIn) {
    return new Promise((resolve, reject) => {
        if (isUserLogedIn) {
            resolve('User loged');
        } else { 
            reject('User loged out')
            }
    })
}

checkUserLogin(true)
.then(message => console.log(message))
.catch(error => console.log(error));


console.log('======== 7 uzduotis =========');

async function checkDriving(age) {
    return new Promise((resolve, reject) => {
        if (age === undefined) {
            reject(new Error("Amžius nenurodytas"));
        } else if (typeof age !== "number") {
            reject(new Error("Amžius PRIVALO būti skaičius"));
        } else if (age < 18) {
            reject(new Error("Jūsų amžius turi būti daugiau nei 18"));
        } else {
            resolve("Vartotojas gali laikyti vairuotojo egzaminą");
        }
    });
}

checkDriving(20)
    .then(response => console.log(response))
    .catch(error => console.error(error.message));

checkDriving(16)
    .then(response => console.log(response))
    .catch(error => console.error(error.message));

checkDriving("aštuoniolika")
    .then(response => console.log(response))
    .catch(error => console.error(error.message));

checkDriving()
    .then(response => console.log(response))
    .catch(error => console.error(error.message));