const fs = require('fs');

function leer(nombre)
{
    const archivo = fs.readFileSync(nombre)
    return archivo
}
function escribir(nuevo, viejo)
{
    let contenido = leer(viejo)
    fs.writeFileSync(nuevo, contenido)
}

module.exports = escribir;