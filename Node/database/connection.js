const mongoose = require("mongoose");

const connection = async () => {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bd-portafolio");

        console.log("La conexión a la Base de Datos se ha realizado correctamente!!");
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de iniciar la BD");
    }

}

module.exports = connection;