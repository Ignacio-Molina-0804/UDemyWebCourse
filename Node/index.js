// Importar las dependencias
const express = require('express');
const cors = require('cors');

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

// Poner el servidor a escuchar
app.listen(port, () => {

    console.log("El servidor está funcionando en http://localhost:" + port);

})