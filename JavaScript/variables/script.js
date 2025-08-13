alert("Variables en JS")

/// Variables

// Alcance general
var nombre = "Nacho"

// Alcance de bloque
let nombre2 = "Nacho"

// Variable cuyo valor no cambia debido a que es un valor constante
const nombre3 = "Nacho"

/* --------------------------------------------------------------- */

/// Uso de una variable

// Uso basico
console.log(nombre2);

// Concatenacion
let nombrelet_y_nombreconst = nombre2 + " " + nombre3
console.log("Concatenacion = " + nombrelet_y_nombreconst);

// Sustitucion
nombre2 = "Pepe"
console.log("Sustituacion = " + nombre2)

