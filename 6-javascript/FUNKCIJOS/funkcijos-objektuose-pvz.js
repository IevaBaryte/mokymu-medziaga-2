let darbuotojas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    atlyginimas: 1200,
    etatas: 1,
    pakeltasAtlyginimas: function(procentai) {
        let padidejimas = (this.atlyginimas * procentai) / 100;
        return this.atlyginimas + padidejimas;
    },
    pakeistasEtatas: function(naujasEtatas) {
        return this.atlyginimas * naujasEtatas / this.etatas;
    }
};

console.log(darbuotojas);

let naujasAtlyginimas = darbuotojas.pakeltasAtlyginimas(20);
console.log('Naujas atlyginimas padidinus 20%: ', naujasAtlyginimas, 'EUR');

let naujasEtatas = darbuotojas.pakeistasEtatas(0.5);
console.log('Naujas atlyginimas dirbant 0.5 etato: ', naujasEtatas, 'EUR');

console.log('====== JS FACTORY DESIGN PATTERN =====');

function darbuotojasFactory(vardas, pozicija, atlyginimas) {
    return {
        vardas,
        pozicija,
        atlyginimas
    };
}

let darbuotojai = [
    darbuotojasFactory('Egidijus', 'Serzantas', 1980),
    darbuotojasFactory('Ramunas', 'Direktorius', 1500),
    darbuotojasFactory('Daiva', 'Savininke', 1780)
];

darbuotojai.forEach((darbuotojas) => {
    console.log('Vardas: ', darbuotojas.vardas);
    console.log('Pareigos: ', darbuotojas.pozicija);
    console.log('Atlyginimas: ', darbuotojas.atlyginimas, 'EUR');
});