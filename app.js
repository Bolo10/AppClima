const clima = require('./controlador/clima')
var colors = require('colors');
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: "Nombre de la ciudad",
        demand: true
    },
    opc: {
        alias: 'o',
        descripcion: "Indique p/P para la presión atmosferica o h/H para la humedad",
        demand: false
    }


}).argv;

console.log(colors.green(`Extracción de datos sobre el clima de ${argv.ciudad}`));
const getInformacion = async(ciudad) => {
    try {
        const datos = await clima.getClima(argv.ciudad);


        if (argv.opc == undefined || argv.opc == "" || argv.opc == true) {
            return `La temperatura actual de ${ciudad} es de ${datos.te}`;

        } else if (argv.opc == "h" || argv.opc == "H") {
            return `La humedad que presenta ${ciudad} es de ${datos.h} % y su temperatura es de ${datos.te} grados`;

        } else if (argv.opc == "p" || argv.opc == "P") {
            return `La Presión Atmosférica que presenta ${ciudad} es de ${datos.h} patm y su temperatura es de ${datos.te} grados`;

        }
    } catch (error) {
        return `no se pudo obtener el clima de ${ciudad}`;
    }
}

getInformacion(argv.ciudad).then(console.log).catch(console.log)