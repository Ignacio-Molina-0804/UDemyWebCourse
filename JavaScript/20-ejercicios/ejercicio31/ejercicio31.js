/*
Ejercicio 31:

Crea un semáforo con tres luces (rojo, amarillo y verde)
Haz los círculos del semáforo con HTML y CSS.

Cuando un peatón quiere cruzar la calle debe pulsar un botón.
Crea un botón para cambiar el color de las luces del semáforo
secuencialmente (de rojo a verde, pasando por amarillo).

Entonces,
El semáforo siempre empieza en rojo.
Cuando haces click en el botón, pasará a amarillo.
Al hacer click otra vez, pasa a verde, y así todo el rato.

*/

let boton = document.querySelector("#btnSemaforo");
let luces = document.querySelectorAll(".luz");
let indice = 0;

boton.addEventListener("click", () => {

    // Retirar las luces activas
    luces.forEach(luz => luz.classList.remove("activa"));

    // Encender una luz
    luces[indice].classList.add("activa");

    // Cambiar el índice para la siguiente luz
    indice++

    if(indice > 2){
        indice = 0;
    }
});

