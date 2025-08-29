/*
Ejercicio 35:

Crea un programa que permita mover la ventana a diferentes posiciones
en la pantalla.

Usa botones para mover la ventana a la esquina superior izquierda,
superior derecha, inferior izquierda e inferior derecha.
*/

const anchura = window.screen.width;
const altura = window.screen.height;

const btnVentana = document.querySelector("#ventana");

const arribaIZQ = document.querySelector("#arribaIZQ");
const arribaDER = document.querySelector("#arribaDER");
const abajoIZQ = document.querySelector("#abajoIZQ");
const abajoDER = document.querySelector("#abajoDER");

let miVentana = null;

btnVentana.addEventListener("click", () => {
  miVentana = window.open("", "Nueva Ventana", "width=400,height=400");
});

arribaIZQ.addEventListener("click", () => {
  if (miVentana) {
    miVentana.moveTo(0, 0);
  }
});

arribaDER.addEventListener("click", () => {
  if (miVentana) {
    miVentana.moveTo(anchura - miVentana.outerWidth , 0);
  }
});

abajoIZQ.addEventListener("click", () => {
  if (miVentana) {
    miVentana.moveTo(0, altura - miVentana.outerHeight);
  }
});

abajoDER.addEventListener("click", () => {
  if (miVentana) {
    miVentana.moveTo(anchura - miVentana.outerWidth, altura - miVentana.outerHeight);
  }
});
