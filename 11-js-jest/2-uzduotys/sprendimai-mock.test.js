const app = require('./sprendimai-mock');

describe('1uzd:', () => {
    test('mock used', () => {
        const mock = jest.fn().mockReturnValue(10);
        app.getThirdNumber = mock;
        const result = app.skaiciuokSuma(1, 10)
        expect(mock).toHaveBeenCalled()
        expect(mock).toHaveBeenCalledWith(10);
        expect(result).toBe(31);
    })
})