// Importar las dependencias
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

// Conexion con la Base de Datos
connection();

// Crear servidor
const app = express();
const port = 3977;

// Configurar cors
app.use(cors());

// Convertir los datos del body a objetos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cargar rutas

// Crear endpoints de prueba
app.get("/", (req, res) => {
  console.log("La ruta raiz se ha llamado!!");

  return res.status(200).json([
    {
      curso: "Master en WEB",
      url: "https://www.udemy.com/course/master-en-javascript-aprender-js-angular-nodejs-astro-y-mas",
      profesor: "Victor Robles",
    },
    {
      curso: "Master en BackEnd",
      url: "https://www.udemy.com/course/master-en-javascript-aprender-js-angular-nodejs-astro-y-mas",
      profesor: "Victor Robles",
    },
    {
      curso: "Master en JavaScript",
      url: "https://www.udemy.com/course/master-en-javascript-aprender-js-angular-nodejs-astro-y-mas",
      profesor: "Victor Robles",
    },
  ]);
});

app.get("/pruebitas", (req, res) => {
  console.log("Se ha ejecutado el endpoint de prueba");

  return res.status(200).send(
    `
        <section>
            <h1>Estoy aprendiendo Node.js</h1>
            <h2>Con uDemy</h2>
            <p>Esto es una prueba de ruta</p>
        </section>
        `
  );
});

// Poner el servidor a escuchar
app.listen(port, () => {
  console.log("El servidor está funcionando en http://localhost:" + port);
});
