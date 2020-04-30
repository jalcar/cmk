const { autenticacion } = require('./auth/autenticacion');
const { busqueda } = require('./search/busquedas');

const getContenidos = async(p_FiltroBusqueda) => {
    try {
        let auth = await autenticacion();
        let busq = await busqueda(p_FiltroBusqueda);
        return true;
    } catch (error) {
        console.log('catch: ' + error);
        return false;
    }
};

getContenidos('')
    .then(console.log)
    .catch(console.log);