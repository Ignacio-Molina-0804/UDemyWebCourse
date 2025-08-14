/*
Ejercicio 10

El otro día fui con mi amigo Pepe y Manolo a un restaurante de smash burgers.

Yo me comí 2, pepe se comió 3 y Manolo, como es culturista, se comió 6.

¿Cuántas hamburguesas nos comimos en total?

Y... ¿Es cierto que yo comí menos que pepe?

Responde a estas dos preguntas devolviendo el resultado en la consola del navegador.
*/

let victor = 2;
let pepe = 3;
let manolo = 6;

let totalBurgers = victor + pepe + manolo;

let esCierto = victor < pepe;

console.log("Ejercicio 10");
console.log("El total de hamburguesas smash fue de: " + totalBurgers);
console.log("¿Es cierto que victor comió menos que pepe?: " + esCierto);
