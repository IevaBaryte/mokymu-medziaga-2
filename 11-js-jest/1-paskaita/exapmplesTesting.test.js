const [maistoProduktai, duokMasyva, fakeAPI] = require('./examplesTesting');

describe('maisto produktai:', () => {
    it('yra pienas reiksme', () => {
        expect(maistoProduktai).toContain('pienas');
    });
})

describe('duokMasyva:', () => {
it('teisingai grazina masyvo reiksmes', () => {
    expect(duokMasyva()).toEqual(['pienas', 'duona', 'vanduo'])
});

it('masyve yra reiksme duona', () => {
    const data = duokMasyva();
    expect(data).toContain('duona');
});
});

describe('fakeAPI', () => {
test('teisingai grazina atsakyma iki 2sek', async () => {
    const result = await fakeAPI(1000);
    expect(result).toBe('data data data');
});

test('ismeta klaida kai ats grazina ilgiau nei 2sek', async() => {
    try {
    await fakeAPI(2500);
    } catch (error){
        expect(error).toBe('no data received')
    }
});
});

// test('atmetantiFunkcija error apdorojimas', () => {
//     const result = await atmetantiFunkcija();
//     console.log(result);

//     expect(Promise.reject()
// })