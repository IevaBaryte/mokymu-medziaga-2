let eilute = 'mano sakinys';

console.log(eilute);
console.log(typeof eilute);
console.log(eilute.length);

function apverstasZodis(string) {
    let apverstas = '';
    for (let i = string.length - 1; i >= 0; i--) {
        apverstas += string[i];
    }
    return apverstas;
}

console.log(apverstasZodis('labas'));

function apverstiZodiNaudojantMetoda(zodis) {
    return zodis.split("").reverse().join("");
}

let zodis = 'Labas';

console.log(apverstiZodiNaudojantMetoda(zodis));

console.log('======== 2 uzdavinys ========');

let sakinys = 'Man labai patinka aplesinu sultys';
let vienasZodis = 'patinka';

function turiZodi(sakinys, vienasZodis) {
    return sakinys.includes(vienasZodis);
 }

console.log(sakinys);
console.log(vienasZodis);
console.log('Ar sakinyje yra zodis patinka? ', turiZodi(sakinys, vienasZodis));
