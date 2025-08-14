/*

Ejercicio 8

Tengo una heladería y cada bola de helado vale 1.8 euros.

¿Cuánto cuestan los cucuruchos de 1, 2 y 3 bolas?

Ten en cuenta que el barquillo cuesta cincuenta céntimos de euros.

*/

/* Esto no se hace con for pero es mejor hacerlo de esta manera para una mayor practica*/

const precioBola = 1.8;
const precioBarquillo = 0.5;

console.log("Ejercicio 8");

for (let bolas = 1; bolas <= 3; bolas++) {
  let precioTotal = precioBarquillo + (precioBola * bolas);
  console.log(`Cucurucho de ${bolas} bola(s): ${precioTotal.toFixed(2)} €`);
}