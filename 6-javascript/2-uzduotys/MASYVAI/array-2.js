console.log('======== MASYVAI ========');
console.log('======== 2 DALIS  =======');
console.log('====== 1 UŽDUOTIS =======');

let studijuPrograma = ['Matematika', 'Fotografija', 'Užsienio kalba', 'Fizika', 'Chemija'];

let i = 0;

console.log('==== FOR ====')

for (let i = 0; i < studijuPrograma.length; i++) {
    console.log(studijuPrograma[i]);
}

console.log('==== WHILE ====')
 i = 0;

while ( i < studijuPrograma.length) {
    console.log(studijuPrograma[i]);
    i++;
}

console.log('====== 2 UŽDUOTIS =======');

let salis = ['Vokietija', 'Jungtinė Karalystė', 'Olandija', 'Prancūzija', 'Vengrija', 'Suomija', 'Norvegija'];

let j = 0; 

console.log('==== FOR ====')

for (let j = 0; j < salis.length; j++) {
    console.log(`Šalis: ${salis[j]}`);
}

console.log('==== WHILE ====')

while ( j < salis.length) {
    console.log(`Šalis: ${salis[j]}`);
    j++;
}


console.log('====== 3 UŽDUOTIS =======');

let projektai = ['Įrangos naujinimas', 'Įrangos įsigyjimas', 'Transporto įsigyjimas', 'Patalpų remontas', 'Gerbūvio apželdinimas'];

let k = 0;

console.log('==== FOR ====')

for (let k = 0; k < projektai.length; k++) {
    console.log(`${ k + 1} ${projektai[k]}`);
}

console.log('==== WHILE ====')
while ( k < projektai.length) {
    console.log(`${ k + 1 } ${projektai[k]}`);
    k++;
}

console.log('====== 4 UŽDUOTIS =======');

let skaiciuMasyvas = [3, 6, 9, 29, 2, 17];
let m = 0;

while ( m < skaiciuMasyvas.length) {
    if (skaiciuMasyvas[m] > 5) {
        console.log("Didesni nei 5: " +  skaiciuMasyvas[m]);
    } m++;
}

console.log('====== 5 UŽDUOTIS =======');

let randomSkaiciuMasyvas = [];
for (let i = 0; i < 10; i++) {
    randomSkaiciuMasyvas.push(Math.floor(Math.random() * 100) + 1);
}
let skaiciuSuma = 0;
i = 0;

while (i < randomSkaiciuMasyvas.length) {
    if (randomSkaiciuMasyvas[i] % 4 === 0) {
        skaiciuSuma += randomSkaiciuMasyvas[i];
    }
    i++;
}
console.log("Skaičių masyvas: " + randomSkaiciuMasyvas);
console.log("Skaičiai kurie dalinasi iš 4 suma: " + skaiciuSuma);

skaiciuSuma = 0;

for (let i = 0; i < randomSkaiciuMasyvas.length; i++) {
    if (randomSkaiciuMasyvas[i] % 4 === 0);

}

console.log("Skaičių masyvas: [== FOR ==]" + randomSkaiciuMasyvas);

console.log('====== 6 UŽDUOTIS =======');
let pazymiai = [];

for (let i= 0; i < 10; i++ ) {
    pazymiai.push(Math.floor(Math.random() * 10) + 1);
}
let pazymiuSuma = 0; 
i = 0;

while (i < pazymiai.length) {
    pazymiuSuma += pazymiai[i];
    i++;
}

let vidurkis = pazymiuSuma / pazymiai.length;
console.log("Pažymiai: " + pazymiai);
console.log("Vidurkis: " + vidurkis);


console.log('====== 7 UŽDUOTIS =======');
let pazymiaiAntras = [];
for (let i = 0; i < 10; i++) {
    pazymiaiAntras.push(Math.floor(Math.random() * 10) + 1);
}
let pazymiuSumaAntras = 0;
for (let i = 0; i < 10; i++) {
    pazymiuSumaAntras += pazymiaiAntras[i];
}
let vidurkisAntras = pazymiuSumaAntras / pazymiaiAntras.length;

let didesnisNeividurkis = [];
for (let i = 0; i < 10; i++) {
    if (pazymiaiAntras[i] > vidurkisAntras) {
        didesnisNeividurkis.push(pazymiaiAntras[i]);
    }
}
console.log("Pažymiai: " + pazymiaiAntras);
console.log("Vidurkis for visuals: ", vidurkisAntras);
console.log("Didesnis nei vidurkis ", didesnisNeividurkis);

console.log('====== 8 UŽDUOTIS =======');

let kazkoksMasyvas = [4, 6, 8, 3, 9, 24, 53, 17];

for (let i = 0; i < kazkoksMasyvas.length; i++) {
    if (kazkoksMasyvas.length[i] % 2 === 0) {
        console.log(`${kazkoksMasyvas[i]} ir lyginio skaiciaus kvadratas (${kazkoksMasyvas[i]*kazkoksMasyvas[i]})`);
    } else { 
        console.log(`${kazkoksMasyvas[i]}`);
    }
}

console.log('====== 9 UŽDUOTIS =======');

pazymiai = [2, 7, 9, 10, 7, 8, 2, 4];

for (let i = 0; i < pazymiai.length; i++) {
    if (pazymiai[i] >= 5 ) {
        console.log(`Teigiamas - ${pazymiai[i]}`);
    } else {
        let truko = 5 - pazymiai[i];
        console.log(`Neigiamas - ${pazymiai[i]}, iki teigiamo truko ${truko} balu`)
    }
}

console.log('====== 10 UŽDUOTIS =======');
skaiciai = [82, 432, 84, 756, 43, 443, 23, 999, 85, 847];
suma = 0;
vidurkis = 0;
let kiekis = 0;

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 3 === 0) {
        console.log(`Skaiciai kurie dalinasi is 3 ${skaiciai[i]}`);
        suma += skaiciai[i];
        kiekis++;
    }
}

vidurkis = suma / kiekis;

console.log('Skaiciu suma: ' + suma);
console.log('Skaiciu vidurkis: ' + vidurkis);
