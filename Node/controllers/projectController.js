const ProjectModel = require('../models/projectModel');

const save = (req, res) => {

    // Recibo Datos
    let body = req.body;

    // Validar datos


    // Crear objeto


    // Guardo el objeto en la BD

    
    // Devolver Respuestas

    return res.status(200).json({
        mensaje: "Probando Controlador",
        body

    })

}

module.exports = {

    save

};