// LONGITUD DE UN TEXTO
let nombre = "Ignacio Molina";
console.log(nombre.length); // 14

// CONVERSION DE NUMERO A TEXTO
let numero = 1255;
console.log(typeof numero.toString()); // "string"

/// CONVERTIR TEXTO A MAYUSCULAS
let web = "https://github.com/Ignacio-Molina-0804";
let webMayuscula = web.toUpperCase();

console.log(webMayuscula); // "HTTPS://GITHUB.COM/IGNACIO-MOLINA-0804"

/// CONVERTIR TEXTO A MINUSCULAS
let plato = "PAELLA";
let platoMinuscula = plato.toLowerCase();

console.log(platoMinuscula); // "paella"

/// CONSEGUIR UNA LETRA CONCRETA DE UNA CADENA
let frase = "Soy el mas capo de argentina";

// charAt(14) → obtiene el carácter en la posición 14 (empieza desde 0)
console.log(frase.charAt(14)); // "o"

/// COMPROBAR SI UNA CADENA CONTIENE OTRA
let eslogan = "No soy el mejor, pero seguramente sí seré al que mejor entiendas";
let palabra = "seguramente";

// includes(palabra) → verifica si la palabra existe en la cadena
if (eslogan.includes(palabra)) {
    console.log(`La palabra ${palabra} sí existe en el eslogan`);
} else {
    console.log("¡Qué dices loco!! esa palabra no existe");
}

/// BUSCAR LA POSICION DE UNA PALABRA

let mensaje = "Programacion con JavaScript";
let palabraBuscada = "JavaScript";

console.log(mensaje.indexOf(palabraBuscada)); // 15

/// EXTRAER PARTE DE UN TEXTO

let texto = "Curso de JavaScript desde cero";
let textoExtraido = texto.slice(0, 6); // "Curso"

/// REMPLAZAR PARTE DE UN TEXTO

let peliculaOriginal = "Tonto Re Tonto"

// Remplazando solo el primer "Tonto"

console.log(

    peliculaOriginal.replace("Tonto", "Loco") // "Loco Re Tonto"

)

// Remplazando todos los "Tonto"

console.log(

    peliculaOriginal.replaceAll("Tonto", "Loco") // "Loco Re Loco"

)

/// TRIM O ELIMINAR ESPACIOS EN BLANCO

let email = "        pepitogamer@gmail.com        "

console.log(

    email.trim() // "pepitogamer@gmail.com"

)

/// DIVIDIR UNA CADENA EN DISTINTAS PARTES

let cadena = "JavaScript,HTML,CSS,React,Node.js";

let partes = cadena.split(",");

console.log(partes); // ["JavaScript", "HTML", "CSS", "React", "Node.js"]

/// SUBSTRING

let curso = "Curso de REACT"

let subCurso = curso.substring(6, 11); // "de RE"

console.log(subCurso); // "de RE"

/// CONCATENAR CADENAS

let texto1 = "Hola";
let texto2 = "Mundo";

let textoConcatenado = texto1 + " " + texto2; // "Hola Mundo"
textoConcatenado = texto1.concat(" ", texto2); // "Hola Mundo"

console.log(textoConcatenado); // "Hola Mundo"

/// COMPROBAR SI COMIENZA CON UNA PALABRA EN ESPECIFICO

let fraseInicio = "JavaScript es un lenguaje de programación";

if (fraseInicio.startsWith("JavaScript")) {
    console.log("La frase comienza con 'JavaScript'");
}

/// COMPROBAR SI TERMINA CON UNA PALABRA EN ESPECIFICO

let fraseFin = "Aprender JavaScript es divertido";

if (fraseFin.endsWith("divertido")) {
    console.log("La frase termina con 'divertido'");
}

/// REPETIR PALABRAS

let palabraRepetida = "Hola";
let repeticion = palabraRepetida.repeat(3); // "HolaHolaHola"
console.log(repeticion); // "HolaHolaHola"

// BUSCAR PALABRAS EN UN TEXTO
// Ejemplo con search y match

let texto3 = "Pablito clavó un clavito, después lo volvió a clavar.";

// --- Usando search ---
// Devuelve el índice de la primera coincidencia
let indice = texto3.search(/clavó/);
console.log("search -> índice de la primera coincidencia:", indice);

// --- Usando match ---
// Devuelve un array con todas las coincidencias (con flag "g")
let coincidencias = texto3.match(/clav\w+/g);
console.log("match -> todas las coincidencias encontradas:", coincidencias);

// --- Comparación ---
// Si no encuentra nada:
console.log("search de 'martillo':", texto.search(/martillo/)); // -1
console.log("match de 'martillo':", texto.match(/martillo/));   // null
