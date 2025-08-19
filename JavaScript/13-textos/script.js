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
    console.log("La palabra SEGURAMENTE sí existe en el eslogan");
} else {
    console.log("¡Qué dices loco!! esa palabra no existe");
}
