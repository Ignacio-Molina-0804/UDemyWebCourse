/// Eventos Mouse

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
});

// Evento Mouse Out
cajaTexto.addEventListener("mouseout", () => {
  console.log("Haz salido del textArea");
});

// Evento Mouse Move
cajaTexto.addEventListener("mousemove", () => {
  console.log("Te estas moviendo dentro del textArea");
});

/// Eventos de teclado

let campoTexto = document.querySelector("#campoTexto");

// Evento KeyDown
campoTexto.addEventListener("keydown", (event) => {
  console.log("Has presionado la tecla: " + event.key);
});

// Evento keyUp
campoTexto.addEventListener("keyup", (event) => {
  console.warn("Has soltado la tecla: " + event.key);
});

// Evento KeyPress
campoTexto.addEventListener("keypress", (event) => {
  console.error("Estas manteniendo pulsada la tecla: " + event.key);
});

/// Eventos Formularios

let superFormulario = document.querySelector("#superFormulario");

// Evento Submit
superFormulario.addEventListener("submit", (event) => {
  event.preventDefault();

  let nombre = document.querySelector("#nombre").value;
  let email = document.querySelector("#email").value;
  let genero = document.querySelector("#genero").value;

  console.log(`Nombre: ${nombre}, Email: ${email}, Genero: ${genero}`);

});
