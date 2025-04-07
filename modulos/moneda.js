const countryCurrencyMap = require('country-currency-map');

function Conseguirmoneda(pais) {
    const info = countryCurrencyMap[pais.toUpperCase()];
    return info ? info.currency : "Moneda no encontrada";
}

module.exports = Conseguirmoneda;
