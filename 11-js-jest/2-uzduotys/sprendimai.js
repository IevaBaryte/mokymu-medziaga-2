// 1 uzduotis

function apskritimoPlotas(r) {
    return Math.PI * Math.pow(r, 2);
}

// 2 uzduotis

function palindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase()
    const reverseStr = cleanStr.split('').reverse().join('')
    return cleanStr === reverseStr
}

palindrome("A man, a plan, a canal. Panama")


// 3 uzduotis

function rastiMax(skaiciai) {
    if(!Array.isArray(skaiciai) || !skaiciai.length) {
        throw new Error('neteisingai ivestas parametras skaiciai');
    }
    return Math.max(...skaiciai);
}

// 4 uzduotis

function pridetiKaina(objektas) {
    if (objektas.hasOwnProperty('kaina')) {
        return 'Objektas jau turi kaina!'
    }
    objektas.kaina = 50;
    return objektas;
}

// 5 uzduotis

function uzdelsimas(delay) {
    return new Promise((resolve, reject) => {
        if (delay > 1000) { 
        reject(new Error('Klaida: uzdelsimas ilgiau nei 1 sek'));
    } else {
        setTimeout(() => { resolve('uzdelsimas mazesnis nei 1 sek')}, delay)
    }
    });
}

// 6 uzduotis

function grazinaNull() {
    return null
}

module.exports = [apskritimoPlotas, palindrome, rastiMax, pridetiKaina, uzdelsimas, grazinaNull];
    