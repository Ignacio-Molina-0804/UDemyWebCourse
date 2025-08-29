/*

Ejercicio 36:

Crea una caja de texto que cuente cuantas teclas ha pulsado
el usuario dentro de la caja.

Muestra el numero de teclas pulsadas en tiempo real en la web.

*/

let contador = document.querySelector("#contador");
let cajaPulsaciones = document.querySelector("#pulsaciones");

let pulsaciones = 0

contador.addEventListener("input", () => {
    pulsaciones++
    cajaPulsaciones.textContent = `Pulsaciones: ${pulsaciones}`;
});
