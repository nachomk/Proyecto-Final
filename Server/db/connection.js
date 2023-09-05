const mongoose = require("mongoose");

const conectarDB = async ( req, res ) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado a la Base de Datos")
    } catch ( error ) {
        console.log(error)
    }
}

const desconectarDB = async ( req, res ) => {
    try {
        await mongoose.disconnect();
        console.log("Desconectado a la Base de Datos")
    } catch ( error ) {
        console.log(error)
    }
}

module.exports = { conectarDB , desconectarDB };