console.log(document);
console.dir(document);

let pElementHtml = document.getElementById('pirmas-paragrafas-bloke');
console.log(pElementHtml);

let pirmasBlokas = document.querySelector('.pirmas');
console.log(pirmasBlokas);

let visiBlokai = document.querySelectorAll('.pirmas');
console.log(visiBlokai);

let pirmasParagrafas = document.querySelector('.paragrafas');
console.log(pirmasParagrafas);

let pirmasParagrafasBloke = pirmasBlokas.querySelector('.paragrafas');
console.log(pirmasParagrafasBloke);
console.log('===== Judejimas per DOM medi =====');
console.log(
    pirmasBlokas.nextElementSibling
);

console.log(
    pirmasBlokas.previousElementSibling
);
console.log(pirmasBlokas.parentElement);

console.log(pirmasBlokas.parentNode);

console.log('====================');

let mygtukas = document.querySelector('.button');

mygtukas.addEventListener('click', (event) => {
    console.log('Ivyko click event');
    console.log(event);
})
console.log(mygtukas);

