const axios = require('axios')

const getClima = async(ciudad) => {
    const ciudadURL = encodeURI(ciudad);
    const resp = await axios.get(`
    https://api.openweathermap.org/data/2.5/weather?q=${ciudadURL}&appid=af9e5512ab3bbb91bf87e3f3356ceaf8&units=metric`)
    var datos = new Object();
    datos.te = resp.data.main.temp
    datos.h = resp.data.main.humidity
    datos.p = resp.data.main.pressure

    return datos
}

module.exports = {
    getClima
}