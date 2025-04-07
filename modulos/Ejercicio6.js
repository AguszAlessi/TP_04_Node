const { URL } = require('url');

function parsearUrl(url) {
    try {
        const parse = new URL(url);
        const parametros = {
            curso: parse.searchParams.get('curso'),
            mes: parse.searchParams.get('mes')
        };
        const Objeto = {
            host:parse.host,
            pathname: parse.pathname,
            parametros: parametros
        };

        return Objeto;

    } catch (error) {
        console.log("ERROR ");
        return null;
    }
}

module.exports = parsearUrl;
