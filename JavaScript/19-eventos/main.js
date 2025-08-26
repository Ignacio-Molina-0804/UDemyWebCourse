/// Eventos

let botoncito = document.querySelector("#botoncito");

// Sacar datos del evento que ejecutamos

botoncito.addEventListener("click", (event) => {
  console.log(event);
});

// Evento Click

botoncito.addEventListener("click", () => {
  alert("Haz dado click al botoncito!!");
});

// Evento Doble Click

let botoncitoDoble = document.querySelector("#botoncitoDoble");
botoncitoDoble.addEventListener("dblclick", () => {
  alert("Haz dado dos clicks al botoncito!!");
});

// Evento Mouse Over

let cajaTexto = document.querySelector("#cajaTexto");
cajaTexto.addEventListener("mouseover", () => {

    console.log("Haz pasado por encima de la textArea");

})

// Evento Mouse Out

cajaTexto.addEventListener("mouseout", () => {

    console.log("Haz salido del textArea");

})

// Evento Mouse Move

cajaTexto.addEventListener("mousemove", () => {

    console.log("Te estas moviendo dentro del textArea");

})