/*
¡¡¡ SUPER EJERCICIO DE JAVASCRIPT !!!

Crea una aplicación web en la que puedas añadir, mostrar y eliminar
tus películas favoritas.

Cada peli que guardes debe tener:

- Título de la película
- Fecha de guardado
- Puntuación de popularidad (un valor aleatorio entre 1 y 100).

Las películas deben mantenerse guardadas aunque se recargue la página,
y se debe poder eliminar cualquiera de ellas de la lista en cualquier momento.

Tareas:
Terminado - Ejercicio 39: Crea el formulario necesario
- Ejercicio 40: Función para guardar películas con los datos necesarios
- Ejercicio 41: Función para mostrar películas extraídas del LocalStorage
- Ejercicio 42: Haz que las películas carguen automáticamente al abrir la web.
- Ejercicio 43: Función para eliminar películas.
*/

let formulario = document.querySelector("#formulario")
let titulo = document.querySelector("#titulo")
let btn = document.querySelector("#btn")

function guardar() {

    console.log("Formulario Guardado")

    // Seleccionar la caja de texto y sacar su valor

    titulo = titulo.value

    // Validacion
    if (titulo.trim() === ""){
        alert("Por favor, mete el titulo de la pelicula!!")

        return false
    }

    // Conseguir fecha actual
    const fecha = new Date()
    const fechaActual = fecha.toLocaleTimeString() + " " + fecha.toLocaleTimeString()

    // Generar un numero aleatorio para popularidad
    let popularidad = Math.floor(Math.random() * 100) + 1;

    // Crear objeto pelicula
    let pelicula = {

        titulo,
        fecha: fechaActual,
        popularidad

    }

    // Sacar todas las peliculas (array de objetos)

    // Añadir al array la nueva pelicula

    // Guardar todo en el localStorage

    // Limpiar el campo de texto

    // Mostrar las peliculas

}

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    guardar()

})


