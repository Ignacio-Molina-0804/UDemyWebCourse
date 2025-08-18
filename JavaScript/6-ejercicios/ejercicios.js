/// EN EL CASO DE QUERER VER UN EJERCICIO DE MANERA INDIVIDUAL COMENTA LOS DEMAS EJERCICIOS.

/* 

Ejercicio 1:

Calcula cuantas horas le llevara llegar a la luna a una nave espacial y guarda el resultado en una variable.

La distancia desde la tierra hasta la luna es de 384400km.

La velocidad de la nave es de 1225 kilometros por hora.

*/

let distanciaTierraALuna = 384400
let velocidadNave = 1225

let horasTotalesDeViaje = distanciaTierraALuna / velocidadNave

console.log("Ejercicio 1");
console.log("La cantidad de horas que llevara llegar a la luna desde la tierra es de " + Math.ceil(horasTotalesDeViaje));

/* 

Ejercicio 2

Tenemos 7 cajas con 8 cookies rellenas de chocolate cada una.

¿Cuantas cookies tenemos en total?

*/

let cajasDeCookies = 7
const cookiesPorCajas = 8

let cookiesTotales = cookiesPorCajas * cajasDeCookies

console.log("Ejercicio 2");
console.log("Tenemos un total de " + cookiesTotales + " en las " + cajasDeCookies + " cajas de cookies.");

/* 

Ejercicio 3

¿Cuantos minutos tienen 7 horas?

Utiliza variables y operadores para resolverlo.

*/

const minutosPorHora = 60
let cantidadDeHoras = 7

let resultado = minutosPorHora * cantidadDeHoras

console.log("Ejercicio 3")
console.log(`Hay ${resultado} en ${cantidadDeHoras} horas.`);

/* 

Ejercicio 4

Tenemos una jirafa en el zoo que pesa 1120 kilos.

Y le damos de comer 141 kilos de hojas frescas.

¿Cuanto pesa ahora la jirafa?

*/

let pesoJirafa = 1120
let kilosDeHojas = 141

let pesoTotalJirafa = pesoJirafa + kilosDeHojas

console.log("Ejercicio 4");
console.log(`El peso total de la jirafa es de ${pesoTotalJirafa} kilogramos`);

/* 

Ejercicio 5

Tengo una tarta de queso con 16 porciones.

Cada porcion vale 3.8 euros.

¿Si vendo todas las porciones cuanto dinero gano en total?

*/

let porcionesTartaDeQueso = 16
const precioPorPorcion = 3.8

let totalDeDinero = porcionesTartaDeQueso * precioPorPorcion

console.log("Ejercicio 5")
console.log(`Si vendiera las ${porcionesTartaDeQueso} porciones de tarta de queso ganaria un total de ${totalDeDinero} euros.`);

/* 

Ejercicio 6 

En mi tienda de videojuegos tenemos una oferta.

si compras un juego de 50 euros o mas, te hacemos un 20% de descuento.

si un cliente compra el Tekken 15 que cuesta 50 euros ¿En cuanto le queda?

*/

/* El ejercicio no se hace necesariamente con condiciones debido a que no esta en las unidades anteriores, pero se puede hacer de esta forma para que tenga mas sentido */

let nombreJuego = "Tekken 15"
let precioJuego = 50
let descuentoAplicable = 0.2 * 50

if (precioJuego >= 50) {

    let precioTotal = precioJuego - descuentoAplicable
    console.log(`Ejercicio 6`);
    console.log(`El precio de ${nombreJuego} es de ${precioJuego}`)
    console.log(`El precio a pagar por el juego ${nombreJuego} es de ${precioTotal} debido a que se aplico el descuento de 20% que resta un total de ${descuentoAplicable} euros.`)

} else {

    console.log(`Ejercicio 6`);
    console.log(`El precio de ${nombreJuego} es de ${precioJuego}`)
    console.log(`El precio a pagar por el juego ${nombreJuego} es de ${precioTotal} euros.`)
    
}

/* 

Ejercicio 7

Tenemos un circulo con un diametro de 18 cm

Calcula al radio del circulo y dime cual es

*/

const diametro = 18

let radio = diametro / 2

console.log("Ejercicio 7");
console.log(`El radio del circulo es de ${radio} cm`);

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

/* 

Ejercicio 9

Una milla son 1.6 kilogramos

¿Cuantos kilometros tiene una autopista de 120 millas?

*/

let kmPorMilla = 1.6
let millasTotales = 120

let kilometroTotales = milla * millasTotales

console.log(`La autopista de ${millasTotales} millas tiene un total de ${kilometroTotales} kilometros.`);

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
