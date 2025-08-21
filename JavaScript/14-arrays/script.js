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

/// Bucles para recorrer arrays

console.log("*****************************")

let actores = ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Chris Hemsworth", "Tom Holland"];

console.log("Listado de actores: ")

// Bucle for

for (let i = 0; i < actores.length; i++) {
    console.log("Actor " + (i + 1) + ": " + actores[i]);
}

// Bucle For OF

for (let actor of actores) {

    console.log("Actor: " + actor);

}

// Bucle For IN

for (let index in actores) {

    console.log("Actor " + (parseInt(index) + 1) + ": " + actores[index]);
    
}

// Bucle ForEach

actores.forEach((actor, index) => {
    console.log("Actor " + (index + 1) + ": " + actor);
});

// Bucle Map

let actoresNuevos = actores.map(actor => {

    console.log("Actor:" + actor); 

    return actor + " (map)";
})

console.log("Actores Nuevos: ", actoresNuevos);

/// Arrays Multidimensionales

let categorias = ["Lucha", "Acción", "Aventura", "Ciencia Ficción", "Terror"];
let titulos = ["Street Fighter", "Call of Duty", "The Legend of Zelda", "Star Wars", "Resident Evil"];

let videojuegos = [categorias, titulos];

console.log(videojuegos) // Vista General
console.log(videojuegos[1][2]) // Acceso a un elemento especifico de los titulos

/// Arrays Bidimensionales

let tabla = [
    ["Producto", "Cantidad", "Precio"],
    ["PC",            5,         1000],
    ["Televisor",     8,         1200]
]

console.log("Producto: " + tabla[2][0] + ", Precio: " + tabla[2][2]); // "Producto: Televisor, Precio: 1200"

tabla.forEach((fila, index) => {
    console.log("Fila " + index + ": " + fila.join(", "));
});

// Ver por consola una tabla de datos

console.table(tabla);

/// Arrays Tridimensionales

let cartaRestaurante = [
  ["Plato",       "Cantidad", "Precios",          "Tamaños"],
  ["Menu Pizza",  2,          [8, 10, 15],        ["pequeño", "mediano", "grande"]],
  ["Menu Burger", 4,          [10, 12, 17],       ["pequeño", "mediano", "grande"]],
  ["Menu Paella", 10,         [14, 18, 25],       ["pequeño", "mediano", "grande"]],
];


for (let menu of cartaRestaurante) {
  console.log("----------------------------");

  console.log(menu);

  if (Array.isArray(menu[2]) && Array.isArray(menu[3])) {
    console.log(menu[0]);

    for (let index in menu[2]) {
      console.log(menu[3][index], menu[2][index], "euros");
    }
  }
}



