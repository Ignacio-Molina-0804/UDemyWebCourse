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
Terminado - Ejercicio 40: Función para guardar películas con los datos necesarios
- Ejercicio 41: Función para mostrar películas extraídas del LocalStorage
- Ejercicio 42: Haz que las películas carguen automáticamente al abrir la web.
- Ejercicio 43: Función para eliminar películas.
*/

let formulario = document.querySelector("#formulario")
let titulo = document.querySelector("#titulo")
let btn = document.querySelector("#btn")
let listado = document.querySelector("#listado")

function mostrar() {

    // Seleccionar la etiqueta del listado
    listado.innerHTML = ""

    // Sacar peliculas del localStorage
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"))

    // Si no hay peliculas mostrar un mensaje
    if(pelisGuardadas.length === 0){

        listado.innerText = "No hay peliculas para mostrar."

        return false

    }

    // Recorrer pelis y mostrar
    pelisGuardadas.forEach((pelicula, indice) => {

        const peliArticle = document.createElement("article")

        peliArticle.innerHTML = `
            <h3>${pelicula.titulo}</h3>
            <p>Fecha: ${pelicula.fecha}</p>
            <p>Popularidad: ${pelicula.popularidad}</p>
            <p>
                <button id="eliminar${indice}" data-id="${indice}>Eliminar</button>
            </p>
            <hr>
        `
        
        listado.appendChild(peliArticle)
    });

    // Opcional para que la funcion devuelva algo para buena practica
    return true;
}

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
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"))

    if(!pelisGuardadas){

        pelisGuardadas = []

    }

    // Añadir al array la nueva pelicula
    pelisGuardadas.push(pelicula)

    // Guardar todo en el localStorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas))

    // Limpiar el campo de texto
    titulo.value = ""

    // Mostrar las peliculas
    mostrar()

    // Para que la funcion devuelva algo
    return true;

}

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    guardar()

})


