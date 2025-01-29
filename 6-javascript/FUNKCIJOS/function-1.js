console.log('===== FUNKCIJOS 1 DALIS =====');
console.log('===== 1 UZDUOTIS =====');

function manoVardas() {
    console.log('Mano vardas yra Ieva. Pasirinkau programavima nes norejau labiau isigilinti i puslapiu kurima, kodo rasyma.')
};

manoVardas();
manoVardas();
manoVardas();

console.log('===== 2 UZDUOTIS =====');

function eilerastis() {
    console.log('Peteliškės ankstų rytą');
    console.log('Šoka pievoj, vos prašvito.');
    console.log('Jų sparneliai auksu švyti,');
    console.log('Net muselės joms pavydi.');
};

for (let i = 0; i < 5; i++) {
    eilerastis();
};

console.log('===== 3 UZDUOTIS =====');

function tekstas1() {
    console.log('Pirmoji funkcija');
}
function tekstas2() {
    console.log('Antroji funkcija');
};
function tekstas3() {
    console.log('trecioji funkcija');
};

tekstas1();
tekstas2();
tekstas3();

console.log('===== 4 UZDUOTIS =====');

function eilute1() {
    console.log('Pirmoji eilute');
};
function eilute2() {
    console.log('Antroji eilute');
}
function abiEilutes() {
    eilute1();
    eilute2();
}

abiEilutes();

console.log('===== 5 UZDUOTIS =====');

function atsitiktiniuSkaiciuSuma() {
    let skaicius1 = Math.floor(Math.random() * 100) + 1;
    let skaicius2 = Math.floor(Math.random() * 100) + 1;
    let suma = skaicius1 + skaicius2;
    console.log(`${skaicius1} + ${skaicius2} = ${suma}`);
}
for (let i = 0; i < 3; i++) {
    atsitiktiniuSkaiciuSuma();
};

console.log('===== 6 UZDUOTIS =====');

function policininkoInformacija() {
    let policininkas = {
        vardas: "Egidijus",
        pavarde: "Egidauskas",
        amzius: 30,
        alga: 1600,
        etatas: "Pilnas",
        specializacija: "Kelių eismo kontrolė",
    };

    console.log("Policininko informacija:");
    console.log(`Vardas: ${policininkas.vardas}`);
    console.log(`Pavardė: ${policininkas.pavarde}`);
    console.log(`Amžius: ${policininkas.amzius}`);
    console.log(`Alga: ${policininkas.alga} Eur.`);
    console.log(`Etatas: ${policininkas.etatas}`);
    console.log(`Specializacija: ${policininkas.specializacija}`);
}
policininkoInformacija();

console.log('===== 7 UZDUOTIS =====');

function atsitiktiniuSkaiciuEilute() {
    let skaiciai = 0;
    for (let i = 0; i < 10; i++) {
        skaiciai += Math.floor(Math.random() * 100) + 1 + " ";
    }
    console.log(skaiciai.trim());
};

for (let i = 0; i < 5; i++) {
    atsitiktiniuSkaiciuEilute();
};

console.log('===== 8 UZDUOTIS =====');

function atsitiktinisSkaicius() {
    console.log(Math.floor(Math.random() * 100) + 1);
};

for (let i = 0; i < 10; i++) {
    atsitiktinisSkaicius();
};

