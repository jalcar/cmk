const { configuration } = require('../config/config');
const axios = require('axios');

const busqueda = async(p_Filtro) => {
    let resp = await axios.get(`https://my2.digitalexperience.ibm.com/api/${ configuration.account.tenantID }/mydelivery/v1/search`, {
        params: {
            q: 'name:"CS_destacados_Plaza-Vea"',
            fl: 'document:[json]',
            rows: 10
                // (name:"CS_destacados_Plaza-Vea" OR name:"CS_destacados_Real-plaza") AND (classification:"content" OR classification:"asset")
        },
        headers: {
            Cookie: 'x-ibm-dx-tenant-id=9b3f67ef-5a9f-4acc-8ce8-bcc27fa681c7; x-ibm-dx-user-auth=eyJraWQiOiJPd2JhR3hOWTlYbFJVQ094VnlvWSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJ0b2tlbl90eXBlIjoiQmVhcmVyIiwic3ViIjoiamNhcnJlbm9yQGludGVyY29ycC5jb20ucGUiLCJleHRlbmRTZXNzaW9uIjpmYWxzZSwiYXBpVXJsIjoiaHR0cHM6Ly9teTIuZGlnaXRhbGV4cGVyaWVuY2UuaWJtLmNvbS9hcGkvOWIzZjY3ZWYtNWE5Zi00YWNjLThjZTgtYmNjMjdmYTY4MWM3IiwiYXV0aG9yaW5nVXJsIjoiaHR0cHM6Ly93d3ctd2RjLmRpZ2l0YWxleHBlcmllbmNlLmlibS5jb20iLCJ0ZW5hbnRJZCI6IjliM2Y2N2VmLTVhOWYtNGFjYy04Y2U4LWJjYzI3ZmE2ODFjNyIsInByZWZlcnJlZF91c2VybmFtZSI6ImpjYXJyZW5vckBpbnRlcmNvcnAuY29tLnBlIiwiZW1haWwiOiJqY2FycmVub3JAaW50ZXJjb3JwLmNvbS5wZSIsImlzcyI6Imh0dHA6Ly93d3cuZGlnaXRhbGV4cGVyaWVuY2UuaWJtLmNvbS9pc3N1ZXIiLCJleHAiOjE1ODgyNjM0NzUsImlhdCI6MTU4ODIyMDI3NX0.yqrJxDpcEP_i5--dodBhSJl6Joo7ClQtmvnajpbiciC7d7bQ9o94FnUIEvpPg5DXYiry7zt96IjyqECuiK6cO9u1eX_1O1jCdJLRdPb4PRGgC1c7jJ1ggNPqFpMixg2EiB2LQkBW3EQ0bXcVkFHPh2aU8Gpv4V06k7xVtSysPXIc9qe-2MtsEk62XTnMzZ8T3kid6B785sCY0YzeOOTVU1JQkQGdHhDC2ffqMM3ywteTrAMdcIlxSooiEZwq8KR60ARri1BjzsTnMryPPYDXjDitns9KeJkssxwTHGgBuF2a6mm2_1GQYqy21cK0vFcFTj7PlWlCDji7Vm1dT6SbTw'
        }
    });
    if (!resp.data) {
        throw new Error(`Error en Búsqueda de datos.`);
    } else {
        console.log(resp.data.documents[0].document.elements);
    }
};

module.exports = {
    busqueda
};