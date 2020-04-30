const { autenticacion } = require('./auth/autenticacion');
const { busqueda } = require('./search/busquedas');
const express = require('express');
const app = express();

app.get('/', async(req, res) => {
    try {
        // let filtroBusqueda = '(name:"CS_destacados_Plaza-Vea" OR name:"CS_destacados_Real-plaza") AND (classification:"content" OR classification:"asset")';
        let filtroBusqueda = 'type:"Cuenta Sueldo Destacados" AND status:"ready"';
        let auth = await autenticacion();
        let busq = await busqueda(auth, filtroBusqueda);

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.json(busq);

    } catch (error) {
        res.send('ERROR: ' + error);
    }
});

app.listen(3000, () => {
    console.log('Escuchando puerto 3000.');
});