const ProjectModel = require('../models/projectModel');

const save = (req, res) => {

    // Recibo Datos
    let body = req.body;

    // Validar datos
    if(!body.name || !body.description || !body.state){
    
        return res.status(400).send({
            status: "error",
            message: "Faltan datos por enviar"
        });

    }

    // Crear objeto

    let projectToSave = new ProjectModel(body);

    // Guardo el objeto en la BD
    projectToSave.save().then(project =>{

        if(!project){

            return res.status(400).send({

                status: "error",
                message: "El proyecto no se ha guardado correctamente!"

            })

        }

        return res.status(200).send({
            status: "success",
            project
        });

    }).catch(error => {

        return res.status(500).send({
            status: "error",
            message: "Faltan datos por enviar",
            error
        });

    });

    
    // Devolver Respuestas

    return res.status(200).json({
        mensaje: "Probando Controlador",
        body

    })

}

module.exports = {

    save

};