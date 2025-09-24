const ProjectModel = require('../models/projectModel');

const save = (req, res) => {

    return res.status(200).json({
        mensaje: "Probando Controlador"
    })

}

module.exports = {

    save

};