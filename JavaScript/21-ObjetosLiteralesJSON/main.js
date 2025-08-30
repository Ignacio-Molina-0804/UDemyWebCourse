/// Objetos Literales
// Es una estructura de datos que agrupa propiedades y metodos
// bajo el mismo nombre.

let pelicula = {

    titulo : "Terminator",
    anio: 1984,
    genero: "Ciencia Ficcion",
    director: "James Cameron",
    prota: "Arnold Schwarzenegger",

    // Uso de metodo
    description: function(){
        return `${this.titulo} es una pelicula de ${this.genero}, dirigida por ${this.director} y lanzada en el año ${this.anio}`; 
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
console.log(description())

/// JSON