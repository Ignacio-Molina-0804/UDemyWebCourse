// Importar la libreria de Mongoose
const {Schema, model} = require("mongoose")

// Crear esquema (Estructura de cada documento de tipo proyecto)
const ProjectSchema = new Schema({

    name:{

        type: String,
        required: true,
        trim: true

    },
    description:{

        type: String,
        required: true

    },
    state:{

        type: String,
        required: true
        
    },
    image:{

        type: String,
        default: "default.png"
    },
    created_at:{

        type: Date,
        default: Date.now

    } 


})

// Crear modelo, indicarle la coleccion donde se van a guardar los docs
// Exportar el modelo (fichero project.js)

module.exports = model("Project", ProjectSchema, "projects")