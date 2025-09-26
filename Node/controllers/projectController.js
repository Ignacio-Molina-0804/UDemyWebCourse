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

module.exports = {
  save,
  list,
  item,
  deleteProject,
  update,
};
