function manoPirmojiFunkcija() {
    console.log('Mano pirmoji JS funkcija');
}

manoPirmojiFunkcija();

function eilerastis() {
    console.log('Labas rytas');
    console.log('Su peleda');
    console.log('opa');
};

eilerastis();

function pasisveikinti() {
    console.log('Sveiki');
};

function atsisveikinti() {
    console.log('Iki');
};

pasisveikinti();
atsisveikinti();

console.log(this);


function suma (skaicius1, skaicius2) {
    let suma = skaicius1 + skaicius2;

    console.log(suma);
};
function skirtumas(skaicius1, skaicius2) {
    let skirtumas = skaicius1 - skaicius2;
    console.log('Skirtumas' + skirtumas);
};

suma(4, 8);
skirtumas(4, 8);

let a = 4, b = 80;

suma(a, b);
skirtumas(a, b);

function isvedimas(vardas, amzius, pavarde) {
    console.log(vardas);
    console.log(amzius);
    console.log(pavarde);
};
isvedimas();
isvedimas('Tomas', 56, 'pavardaitis')