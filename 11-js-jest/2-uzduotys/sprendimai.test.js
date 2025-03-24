const [apskritimoPlotas, palindrome, rastiMax, pridetiKaina, uzdelsimas, grazinaNull] = require('./sprendimai');

describe('1 uzd:', () => {
    test('ar apskritimo plotas teisingai paskaiciuotas', () => {
        expect(apskritimoPlotas(2)).toBeCloseTo(12.57, 2);
    });
});

describe('2 uzd:', () => {
    test('zodis yra polindromas', () => {
        const result = palindrome('eme');
        expect(result).toBe(true)
    });
    test('zodis nera polindromas', () => {
        expect(palindrome('uzduotys')).toBe(false);
    })
});

describe('3 uzd:', () => {
    test('grazina didziausia is teigiamu skaiciu', () => {
        const result = rastiMax([1, 2, 4, 78, 10]);
        expect(result).toBe(78);
    });
    test('grazina didziausia is neigiamu skaiciu', () => {
        expect(rastiMax([-1, -5, -7, -9, -2])).toBe(-1)
    });
    test('grazina klaida, jei masyvas yra tuscias', () => {
        expect(() => rastiMax([])).toThrow('neteisingai ivestas parametras skaiciai')
    });
    test('grazina klaida, jei paduotas ne masyvas', () => {
        expect(() => rastiMax('masyvas')).toThrow('neteisingai ivestas parametras skaiciai');
    });
});

describe('4 uzd:', () => {
    test('kaina reiksme prisidejo', () => {
        const objektas = {pavadinimas: 'Preke1'};
        const result = pridetiKaina(objektas);

        expect(result).toEqual({
            pavadinimas: 'Preke1',
            kaina: 50
        });
    })

test('rodo klaida, jei objektas jau turi kaina', () => {
    const objektas = {kaina: 123};
    const result = pridetiKaina(objektas);
    expect(result).toBe('Objektas jau turi kaina!')
})
});
describe('5 uzd:', () => {
    test('grazina ats po mazo delay iki 1 sek', async() => {
        const result = await uzdelsimas(500);
        expect(result).toBe('uzdelsimas mazesnis nei 1 sek');
    })
    test('grazina klaida po didelio delay virs 1 sek', async() => {
        await expect(uzdelsimas(1500)).rejects.toThrow('Klaida: uzdelsimas ilgiau nei 1 sek');
    })
});

describe('6 uzd:', () => {
    test('visada bus null', () => {
        expect(grazinaNull()).toBeNull();
    })
});