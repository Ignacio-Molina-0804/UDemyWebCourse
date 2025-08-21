/// ARRAY, MATRICES Y ARREGLOS

// Forma de crear un array
let nombres = ["Ignacio", "Pepe", "Juan", "Pedro", "Maria"];
//                 0         1       2       3        4

// Acceder a un elemento del array
console.log(nombres[0]);

// Ver el tamaño del array
console.log(nombres.length); // 5

// Asignar un nuevo valor a un elemento del array
nombres[0] = "Ignacio Perez";
console.log(nombres[0]); // "Ignacio Perez"

// Practica
let elemento = parseInt(prompt("¿Qué usuario quieres (del array)?", 0));

if (elemento >= nombres.length) {
    alert("¡Upps!! Ese usuario en concreto no existe, elige otro!!");
} else {
    alert("¡Bieeen!! El usuario seleccionado es " + nombres[elemento]);
}

// Recorrer un array con un bucle for
console.log("Recorriendo el array con un bucle for:");
for (let i = 0; i < nombres.length; i++) {

    console.log("Usuario " + i + ": " + nombres[i]);
    

}