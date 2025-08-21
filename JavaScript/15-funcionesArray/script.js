// Crear un Array sin datos

let vacio = new Array(4)

// Crear un Array con datos 

let gadgets = ["PC", "Tablet", "Celular", "Laptop"]

// Longitud del array

console.log(gadgets.length)

// Añadir un elemento al final del array

gadgets.push("Smartwatch")
console.log(gadgets)

// Eliminar el ultimo elemento del array

gadgets.pop()
console.log(gadgets)

// Añadir un elemento al principio del array

gadgets.unshift("Smart TV")
console.log(gadgets)

// Eliminar el primer elemento de un array

gadgets.shift()
console.log(gadgets)

// Busqueda que devuelve el indice del elemento buscado 

let indice = gadgets.indexOf("Tablet")
console.log(indice)

// Busqueda para ver si existe el elemento en el array

let existe = gadgets.includes("Celular")
console.log(existe)

// Filtrar un array

let gadgetsB = gadgets.filter(gadget => gadget.includes("a"))
console.log(gadgetsB);

// Reduce
let numeros = [1, 2, 3, 4]
let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 10

// Ordenar un array

gadgets.sort();
console.log(gadgets);

// Invertir el orden de un array
gadgets.reverse();
console.log(gadgets);

// Combinar Arrays

let union = gadgets.concat(numeros)
console.log(union);

// Convertir un array a string
let gadgetsString = gadgets.join(", ");
console.log(gadgetsString); // "Smart TV, Tablet, PC, Laptop"

// Copiar porcion de un array
let gadgetsCopia = gadgets.slice(1, 3);

// Busqueda

let buscarGadget = gadgets.find(gadget => gadget.length > 5);
console.log(buscarGadget); 

// Busqueda por indice

let buscarIndice = gadgets.findIndex(gadget => gadget.length > 5);
console.log(buscarIndice); // 1 (índice de "Tablet")