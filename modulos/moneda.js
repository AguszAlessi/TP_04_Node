const countryCurrencyMap = require('country-to-currency');

function Conseguirmoneda(pais) {
    const info = countryCurrencyMap[pais.toUpperCase()];
    return info ? info : "Moneda no encontrada";
}

module.exports = Conseguirmoneda;
