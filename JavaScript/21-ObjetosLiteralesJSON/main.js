/// Objetos Literales
// Es una estructura de datos que agrupa propiedades y metodos
// bajo el mismo nombre.

let pelicula = {

    titulo : "Terminator",
    anio: 1984,
    genero: "Ciencia Ficcion",
    director: "James Cameron",
    prota: "Arnold Schwarzenegger"

};

console.log(pelicula.prota, pelicula.titulo) // Datos por separado

console.log(pelicula) // Presentacion de todos los datos

console.log(pelicula["director"], pelicula["genero"]) // Otra forma de ingresar a los datos

/// JSON