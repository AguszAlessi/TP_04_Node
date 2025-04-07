const { URL } = require('url');

function parsear(urlString) {
    const parseado = new URL(urlString);


    return {
        host: parseado.host,
        pathname: parseado.pathname,
        parametros: parseado.searchParams
    };
}

import default parsear