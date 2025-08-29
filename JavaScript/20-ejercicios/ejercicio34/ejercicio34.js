/*
Ejercicio 34:

Crea un programa que abra una nueva ventana con una web,
pero en diferentes tamaños.

Haz que el usuario pueda elegir entre tres tamaños (pequeño, mediano y grande).
*/

let pequena = document.querySelector("#pequena");
let mediana = document.querySelector("#mediana");
let grande = document.querySelector("#grande");

let ventana = (anchura, altura) => {
  window.open(
    "https://google.com",
    "_blank",
    `width=${anchura},height=${altura}`
  );

  return true;
};

pequena.addEventListener("click", () => {
  ventana(250, 250);
});

mediana.addEventListener("click", () => {
  ventana(500, 500);
});

grande.addEventListener("click", () => {
  ventana(850, 750);
});
