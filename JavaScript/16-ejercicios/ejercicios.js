/*
Ejercicio 24:

Crea un array con 10 números aleatorios del 1 al 100.
Luego, pide al usuario que adivine un número.

Si acierta, muestra un mensaje de celebración;
si no, muestra el número correcto.
*/

alert("Ejercicio 24: ");

let numerosAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

let numeroUsuario = parseInt(prompt("Adivina un número entre 1 y 100:"));

if (numerosAleatorios.includes(numeroUsuario)) {

    alert("¡Felicidades! Has adivinado un número.");

} else {

    alert("Lo siento, los numeros correctos eran: " + numerosAleatorios.join(", "));

}

/*
Ejercicio 25:

Crea un array de ingredientes para una receta absurda
(como una pizza con chocolate y piña).

Muestra la receta completa en una frase divertida.
*/

alert("Ejercicio 25: ")

let ingredientes = ["masa de pizza", "salsa de tomate", "queso mozzarella", "chocolate", "piña", "pepperoni", "aceitunas", "pimientos", "cebolla", "albahaca"];

const receta = `Para preparar una pizza única, necesitas: ${ingredientes.join(", ")}. ¡Disfruta de esta deliciosa combinación!`;

alert(receta);

/*
Ejercicio 26:

Dado un array de palabras, cuenta cuántas letras tiene cada palabra
y crea un nuevo array que contenga solo esos números.
*/

alert("Ejercicio 26: ")

let palabras = ["manzana", "banana", "cereza", "durazno", "frambuesa"];
let luchadores = ["Rey Mysterio", "John Cena", "The Undertaker", "Stone Cold", "Triple H"];

function contarletras(datos) {

    let longitudes = datos.map(palabra => palabra.length);

    return longitudes;

}

console.log(contarletras(luchadores)); // [7, 6, 6, 7, 9]

/* 

Ejercicio 27:

Crea un array de personajes de peliculas y clasificalos en grupos (heroes, villanos, etc)

Muestra un mensaje para cada grupo

*/

alert("Ejercicio 27: ")

let personajes = ["M:Joker", "H:Batman", "H:Wonder Woman", "M:Lex Luthor", "H:Superman", "M:Harley Quinn"];

let heroes = personajes.filter(personaje => personaje.startsWith("H:"));
let villanos = personajes.filter(personaje => personaje.startsWith("M:"));

heroes.forEach(heroe => console.log(`¡El héroe ${heroe.slice(2)} está aquí para salvar el día!`));

console.log("--------------------------------");

villanos.forEach(villano => console.log(`¡Cuidado! El villano ${villano.slice(2)} está causando problemas!`));

/*
Ejercicio 28:

1. Pide 6 números por pantalla y mételos en un array
2. Muestra el array entero (todos sus elementos)
   en el cuerpo de la página y en la consola
3. Ordénalo y muéstralo
4. Invierte su orden y muéstralo
5. Muestra cuántos elementos tiene el array
6. Busca uno de los valores que ha metido el usuario,
   que nos diga si lo encuentra y su índice
*/

alert("Ejercicio 28: ")

function pedidoDeNumeros() {

    let numeros = [];

    for (let i = 0; i < 6; i++) {

        let numero = parseInt(prompt("Introduce un número: "));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Por favor, introduce un número válido: "));
        }
        numeros.push(numero);

    }

    return numeros;

}

function mostrarArray(array) {

    console.log("Array en consola: ", array);
    document.body.innerHTML = "Array en el cuerpo de la página: " + array.join(", ");
    
}

function ordenarArray(array) {

    return array.sort((a, b) => a - b);
}

function invertirArray(array) {

    return array.reverse();

}

function elementosEnElArray(array) {

    return array.length;

}


function buscarValor(array, valor) {

    let indice = array.indexOf(valor);
    if (indice !== -1) {
        return `El valor ${valor} se encuentra en el índice ${indice}.`;
    } else {
        return `El valor ${valor} no se encuentra en el array.`;
    }
}

let numeros = pedidoDeNumeros();
mostrarArray(numeros);
let numerosOrdenados = ordenarArray([...numeros]);
console.log("Array ordenado: ", numerosOrdenados);
let numerosInvertidos = invertirArray([...numerosOrdenados]);
console.log("Array invertido: ", numerosInvertidos);
console.log("Número de elementos en el array: ", elementosEnElArray(numeros));
let valorABuscar = parseInt(prompt("Introduce un número para buscar en el array: "));
console.log(buscarValor(numeros, valorABuscar));

/* 

Ejercicio 29:

Crea una funcion que reciba una palabra y devuelva cuantas vocales tiene.

*/

alert("Ejercicio 29: ")

let palabra = prompt("Introduce una palabra: ").toLowerCase();

const vocales = ['a', 'e', 'i', 'o', 'u'];

function contarVocales(palabra) {

    let contador = 0;

    for (let letra of palabra) {

        if (vocales.includes(letra)) {

            contador++;

        }

    }

    return contador;
}

alert(`La palabra "${palabra}" tiene ${contarVocales(palabra)} vocales.`);


