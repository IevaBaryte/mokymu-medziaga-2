let skaicius = 1;
let mygtukas = document.querySelector('button');
let tekstas = document.querySelector('p span');
let papildomasTekstas = document.querySelector('.info');

mygtukas.addEventListener('click', () => {
    skaicius++;
    tekstas.innerHTML = skaicius;

    if (skaicius < 10) {
        papildomasTekstas.style.font = 'black';
        papildomasTekstas.innerHTML = 'Dar tik pradzia';
    };
    
    if (skaicius > 10 && skaicius < 20) {
     papildomasTekstas.style.font = 'black';
     papildomasTekstas.innerHTML = 'Pasiekta 10';
    };

    if (skaicius > 20) {
        papildomasTekstas.style.font = 'black';
        papildomasTekstas.innerHTML = 'Pasiekta 20';
    };
});