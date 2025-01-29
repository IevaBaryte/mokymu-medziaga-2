console.log('======== MASYVAI ========');
console.log('======== 4 DALIS  =======');
console.log('====== 1 UŽDUOTIS =======');
console.log('====== 2 UŽDUOTIS =======');
console.log('====== 3 UŽDUOTIS =======');
console.log('====== 4 UŽDUOTIS =======');

let pazymiai = [5, 7, 8, 9, 9, 10, 8, 6, 7];

pazymiai.sort((a, b) => b - a);

let didziausiPazymiai = pazymiai.slice(0, 3);

console.log("Visi pažymiai nuo didžiausio iki mažiausio: ", pazymiai);
console.log("Trys didžiausi pažymiai: ", didziausiPazymiai);

console.log('====== 5 UŽDUOTIS =======');

let biologija = ['Marius', 'Eligija', 'Egidijus', 'Domantas', 'Beatrice'];
let matematika = ['Kornelija', 'Justas', 'Tomas', 'Agne', 'Liepa'];

let visiStudentai = biologija.concat(matematika);

console.log('Biologijos studentai: ', biologija);
console.log('Matematikos studentai: ', matematika);
console.log('Visi studentai: ', visiStudentai);

console.log('====== 6 UŽDUOTIS =======');

let pirmoSemestroTemos = ['Matematika', 'Fizika', 'Informatika', 'Chemija'];
let antroSemestroTemos = ['Biologija', 'Lietuviu kalba', 'Geografija', 'Istorija'];

let visosTemos = [...pirmoSemestroTemos, ...antroSemestroTemos];

console.log('Pirmo semestro temos: ', pirmoSemestroTemos);
console.log('Antro semestro temops: ', antroSemestroTemos);
console.log('Visos semestro temos: ', visosTemos);

console.log('====== 7 UŽDUOTIS =======');

let spalvos = ['Raudona', 'Melyna', 'Geltona', 'Zalia', 'Orandzine'];

let spalvosKopija = [...spalvos];

spalvos.length = 0;

console.log('Originalus masyvas po isvalymo: ', spalvos);
console.log('Masyvo kopija: ', spalvosKopija);

console.log('====== 8 UŽDUOTIS =======');

let miestai = ['Šiauliai', 'Klaipėda', 'Panevėžys', 'Vilnius', 'Kaunas'];

let ieskomasMiestas = 'Šiauliai';

let miestoNumeris = miestai.indexOf(ieskomasMiestas);

console.log('Miestai: ', miestai);

if (miestoNumeris !== -1) {
    console.log(`${ieskomasMiestas} yra masyve pozicijoje ${miestoNumeris}`); 
} else {
    console.log(`${ieskomasMiestas} nera masyve`);
}

console.log('====== 9 UŽDUOTIS =======');

let skaiciai = [1, 2, 3, 4, 5, 3, 4, 5];
let yradublikatu = false;

// 1 budas - lastofIndex

for(let skaicius of skaiciai ) {
    if (skaiciai.indexOf(skaicius) !== skaiciai.lastIndexOf(skaicius)) {
        yradublikatu = true;
        break
    }
    if (yradublikatu) {
        console.log('Masyve yra dublikatu');
    } else {
        console.log('Dublikatu nera');
    }

    console.log(skaicius);
    console.log(skaiciai.indexOf(skaicius));
    console.log(skaiciai.lastIndexOf(skaicius));
}

console.log('====== 10 UŽDUOTIS =======');

let senasMasyvas = [ 1, 2, 3, 4, 5, 6];
let naujasMasyvas = [];
let chunkSize = 2;
let naujoMasyvoKiekis = Math.ceil(senasMasyvas.length / chunkSize);

for (let i = 0; i < senasMasyvas.length; i += chunkSize) {
    naujasMasyvas.push(
        senasMasyvas.slice(i, i + chunkSize));
}

console.log (naujasMasyvas);

console.log('====== 11 UŽDUOTIS =======');

let pirmasMasyvas = [1, 2, 3, 4, 5, 6, 7];
let antrasMasyvas = [6, 7, 8, 9, 10, 5];

let unikalusMasyvas = [];

let sujungtasMasyvas = [...pirmasMasyvas, ...antrasMasyvas];

for (let skaicius of sujungtasMasyvas) {
    if (!unikalusMasyvas.includes(skaicius)) {
        unikalusMasyvas.push(skaicius);
    }
}
console.log('Pirmas masyvas: ', pirmasMasyvas);
console.log('Antras masyvas: ', antrasMasyvas);
console.log('Sudetas masyvas: ', unikalusMasyvas);

