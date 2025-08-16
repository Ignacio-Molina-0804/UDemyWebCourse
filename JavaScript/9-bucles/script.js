// Bucle For
// Un bucle es una estructura de control que ejecuta un bloque de código
// varias veces de forma automática mientras se cumpla una condición

/*
for (inicialización; condición; incremento) {

    // Código que se ejecuta repetidamente

}
*/

let limits = 177;

for(let contador = 8; contador != limits; contador++) {
    // bloque de código que se ejecutará
    console.log("Vamos por el numero: " + contador);
}

/// Bucle While

// El bucle while repite instrucciones
// mientras la condición sea verdadera.
// Se detiene cuando la condición es falsa.

/*
let contador = 0;

while (condicion){
    // si se cumple se ejecuta indefinidamente

    contador++;
}
*/

// Ejemplo:

let contador = 0;

while (contador < 5) {
    console.log("El contador es: " + contador);
    contador++;
}
