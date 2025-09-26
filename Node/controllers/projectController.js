const fs = require("fs");
const path = require("path");

const ProjectModel = require("../models/projectModel");

const save = (req, res) => {
  // Recibo Datos
  let body = req.body;

  // Validar datos
  if (!body.name || !body.description || !body.state) {
    return res.status(400).send({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }

  // Crear objeto
  let projectToSave = new ProjectModel(body);

  // Guardo el objeto en la BD
  projectToSave
    .save()
    .then((project) => {
      if (!project) {
        return res.status(400).send({
          status: "error",
          message: "El proyecto no se ha guardado correctamente!",
        });
      }

      return res.status(200).send({
        status: "success",
        project,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        message: "Error al guardar el proyecto",
        error,
      });
    });
};

const list = (req, res) => {
  ProjectModel.find()
    .then((projects) => {
      if (!projects || projects.length === 0) {
        return res.status(404).send({
          status: "error",
          message: "No hay proyectos para mostrar",
        });
      }

      return res.status(200).send({
        status: "success",
        projects,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        message: "Error al listar los proyectos",
        error,
      });
    });
};

const item = (req, res) => {
  let id = req.params.id;

  ProjectModel.findById(id)
    .then((project) => {
      if (!project) {
        return res.status(404).send({
          status: "error",
          message: "No se ha encontrado el proyecto",
        });
      }
      return res.status(200).send({
        status: "success",
        project,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        message: "Error al buscar un documento especifico!",
        error,
      });
    });
};

const deleteProject = (req, res) => {
  let id = req.params.id;

  ProjectModel.findByIdAndDelete(id)
    .then((project) => {
      if (!project) {
        return res.status(404).send({
          status: "error",
          message: "No se ha borrado el proyecto",
        });
      }
      return res.status(200).send({
        status: "success",
        project,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        message: "Error al eliminar un documento especifico!",
        error,
      });
    });
};

const update = (req, res) => {
  let body = req.body;

  if (!body || !body.id) {
    return res.status(404).send({
      status: "error",
      message: "No hay datos para actualizar",
    });
  }

  ProjectModel.findByIdAndUpdate(body.id, body, { new: true })
    .then((projectUpdate) => {
      if (!projectUpdate) {
        return res.status(404).send({
          status: "error",
          project: projectUpdate,
        });
      }

      return res.status(200).send({
        status: "success",
        project: projectUpdate,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        message: "Error al eliminar un documento especifico!",
        error,
      });
    });
};

const upload = (req, res) => {
  const id = req.params.id;

  // Validar que se haya subido un archivo
  if (!req.file) {
    return res.status(400).send({
      status: "error",
      message: "No se ha subido ningún archivo",
    });
  }

  const filePath = req.file.path;
  const extension = path.extname(req.file.originalname).slice(1).toLowerCase();
  const validExtensions = ["png", "jpg", "jpeg", "gif", "webp"];

  // Validar extensión
  if (!validExtensions.includes(extension)) {
    fs.unlink(filePath, (err) => {
      if (err) console.error("Error al borrar archivo inválido:", err);
    });

    return res.status(400).send({
      status: "error",
      message: "La extensión del archivo no es válida",
    });
  }

  // Actualizar el proyecto con la nueva imagen
  ProjectModel.findByIdAndUpdate(
    id,
    { image: req.file.filename },
    { new: true }
  )
    .then((projectUpdate) => {
      if (!projectUpdate) {
        // Si no se encuentra el proyecto, borramos la imagen subida
        fs.unlink(filePath, (err) => {
          if (err)
            console.error(
              "Error al borrar archivo porque no se encontró el proyecto:",
              err
            );
        });

        return res.status(404).send({
          status: "error",
          message: "No se encontró el proyecto para actualizar",
        });
      }

      if (projectUpdate.image && projectUpdate.image != "default.png") {
        const oldImagePath = "./uploads/images/" + projectUpdate.image;

        if (fs.existsSync(oldImagePath)) {
          fs.unlink(oldImagePath);
        }
      }

      return res.status(200).send({
        status: "success",
        project: projectUpdate,
        newFile: req.file.filename,
      });
    })
    .catch((error) => {
      // Si hay error en DB, borramos la imagen subida para no dejar basura
      fs.unlink(filePath, (err) => {
        if (err) console.error("Error al borrar archivo por fallo en DB:", err);
      });

      return res.status(500).send({
        status: "error",
        message: "Error al actualizar el proyecto con la imagen",
        error,
      });
    });
};

module.exports = {
  save,
  list,
  item,
  deleteProject,
  update,
  upload,
};
