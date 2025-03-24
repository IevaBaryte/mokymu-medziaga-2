//1 uzduotis 
function skaiciuokSuma(a, b) {
    return a + b + this.getThirdNumber(b)
}

function getThirdNumber(c) {
    return c * 2;
}
module.exports = {skaiciuokSuma, getThirdNumber};