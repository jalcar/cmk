const { configuration } = require('../config/config');
const axios = require('axios');

const autenticacion = async() => {
    let resp = await axios.get(`https://my2.digitalexperience.ibm.com/api/${ configuration.account.tenantID }/login/v1/basicauth`, {
        params: {
            'accept-privacy-notice': 'empty'
        },
        auth: {
            username: configuration.credential.user,
            password: configuration.credential.pass
        }
    });
    // console.log(resp.headers['set-cookie'][0]);
    if (!resp.data) {
        throw new Error(`Error en Autenticación. ${resp.response.data.errors[0].description}`);
    } else {
        let cokies = getCokies(resp.headers['set-cookie']);
        return cokies;
    }
};

const getCokies = (p_ArrayCokies) => {
    let arrayCokies = [];
    p_ArrayCokies.forEach(cokie => {
        let dataCokie = cokie.split('; ');
        arrayCokies.push(dataCokie[0]);
    });
    return arrayCokies.join('; ');
};

module.exports = {
    autenticacion
};