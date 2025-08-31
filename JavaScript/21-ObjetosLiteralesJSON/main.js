/// Objetos Literales
// Es una estructura de datos que agrupa propiedades y metodos
// bajo el mismo nombre.

let pelicula = {

    titulo : "Terminator",
    anio: 1984,
    genero: "Ciencia Ficcion",
    director: "James Cameron",
    prota: "Arnold Schwarzenegger",
    
    // Uso de objeto en un objeto
    detalles: {

        duracion: 120,
        pegi: 18

    },

    // Uso de array
    elenco: ["Arnold", "Linda Hamilton", "Pepe"],

    // Uso de metodo
    description: function(){
        return `${this.titulo} es una pelicula de ${this.genero}, dirigida por ${this.director} y lanzada en el año ${this.anio}`; 
    },

    // Uso de funcion flecha
    mostrarElenco: () => {

        console.log("Elenco de actores: ")

        pelicula.elenco.forEach(nombre => {

            console.log(nombre)

        })

    }

};

// Como ver los datos
console.log(pelicula.prota, pelicula.titulo) // Datos por separado
console.log(pelicula) // Presentacion de todos los datos
console.log(pelicula["director"], pelicula["genero"]) // Otra forma de ingresar a los datos

// Cambiar un dato del objeto
pelicula.anio = 1900 
console.log(pelicula.anio)

// Agregar un valor al objeto
pelicula.secuela = "Terminator 2, mas terminator que nunca" 
console.log(pelicula)

// Uso de funcion
console.log(pelicula.description())

// Uso de la funcion flecha
pelicula.mostrarElenco();

// Ingreso de elemento del objeto interno
console.log(pelicula.detalles.duracion)

// Borrar una propiedad del objeto
delete pelicula.prota
console.log(pelicula)

/// JSON

let palaDePadel = {

    nombre: "Metalbone",
    marca: "Adidas",
    anio: 2022,
    peso: 347,
    forma: "Diamante",
    dureza: "Media"

}

// Transformacion de Objeto a JSON
let palaDePadelJSON = JSON.stringify(palaDePadel)

// Transformacion de JSON a Objeto
let objetoConvertido = JSON.parse(palaDePadel)

// Visualizacion entre las diferencias del Objeto y el JSON
console.log(palaDePadel)
console.log(palaDePadelJSON)

/// Recorrer un Objeto

let caja = document.querySelector("#datos")

for(let clave in palaDePadel){

    caja.innerHTML += `<p>${clave}: ${palaDePadel[clave]} </p>`

}