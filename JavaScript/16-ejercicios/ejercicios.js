/*
Ejercicio 24:

Crea un array con 10 números aleatorios del 1 al 100.
Luego, pide al usuario que adivine un número.

Si acierta, muestra un mensaje de celebración;
si no, muestra el número correcto.
*/

let numerosAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

let numeroUsuario = parseInt(prompt("Adivina un número entre 1 y 100:"));

if (numerosAleatorios.includes(numeroUsuario)) {

    alert("¡Felicidades! Has adivinado un número.");

} else {

    alert("Lo siento, los numeros correctos eran: " + numerosAleatorios.join(", "));

}
