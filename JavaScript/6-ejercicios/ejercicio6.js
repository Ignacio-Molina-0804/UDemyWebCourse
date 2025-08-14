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