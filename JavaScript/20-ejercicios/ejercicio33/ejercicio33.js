/*
Ejercicio 33:

Crea un programa donde tengas un botón que cuente cuántas
veces lo has pulsado.

Cuando llegues a 17 clics, se muestra un mensaje de "¡Límite alcanzado!".

Si se sobrepasa, el contador se resetea y el contador comienza de nuevo.
*/

let contador = 0;

let numero = document.querySelector("#numeroClicks")
let boton = document.querySelector("#cuentaClicks")

boton.addEventListener("click", () => {

    contador++;

    if (contador === 17){

        numero.textContent = "¡Limite Alcanzado!"
        contador = 0;

    } else {

        numero.textContent = contador + " Clicks"

    }

})