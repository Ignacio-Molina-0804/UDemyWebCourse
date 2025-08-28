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

// Evento Input

let nombreInput = document.querySelector("#nombre");
nombreInput.addEventListener("input", () => {
  console.log("El usuario ha escrito: " + nombreInput.value);
});

// Evento Change

let selectGenero = document.querySelector("#genero");
selectGenero.addEventListener("change", () => {
  console.log(`Has cambiado el select a '${selectGenero.value}'`);
});

// Evento Focus

let campoEmail = document.addEventListener("#email");
campoEmail.addEventListener("focus", () => {
  console.log("Acabas de entrar al campo de email.");
});

// Evento Blur

campoEmail.addEventListener("blur", () => {
  console.log("Has salido del campo de email.");
});

/// Eventos del Documento y la Ventana

// Evento DOMContentLoaded

// Este evento hace que se cargue el DOM logrando asi que no debamos poner el refer en el script.

document.addEventListener("DOMContentLoaded", () => {
  // A partir de aca se pone el codigo para que se lance cuando todo el DOM esta cargado evitando poner el defer en el script.

  console.log("Todo el DOM esta cargado");
});

// Evento Load

// Este evento nos carga la pantalla pero es algo que se toma dsp del DOM

window.addEventListener("load", () => {
  console.log("Toda la Web esta cargada, incluido los recursos");
});

// Evento Resize

// Este evento hace que tome en el momento que cambiamos la resolucion de la pantalla.

window.addEventListener("resize", () => {
  console.log(
    "Ventana Redimensionada" + window.innerHeight + " " + window.innerWidth
  );
});

// Evento Scroll

// Este evento hace que tome el scroll de la pantalla y nos devuelva diferentes datos.

window.addEventListener("scroll", () => {
  console.log(
    `Estas en el pixel ${Math.round(window.scrollY)} del scroll de la web.`
  );
});

/// Eventos del PortaPapeles

let PortaPapeles = document.querySelector("#portapapeles");

// Evento Copy

PortaPapeles.addEventListener("copy", () => {
  alert("Haz copiado el texto del input, pero no puedes llevartelo!!");
  navigator.clipboard.writeText("");
});

// Evento Paste

PortaPapeles.addEventListener("paste", () => {
  alert("Haz pegado un texto en el input!!");
});

// Evento Cut

PortaPapeles.addEventListener("cut", () => {
  alert("Haz cortado el texto del input!!");
});

// Evento ContextMenu

PortaPapeles.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // Esto hace que no te deje ver el menu contextual
  console.warn("El Usuario a abierto el menu contextual");
});

/// Dejar de escuchar eventos

let botoncito2 = document.querySelector("#botoncito2");

function alertita2() {
  alert("Has dado click al botoncito 2!!!");
}

botoncito2.addEventListener("click", alertita2);

setTimeout(() => {
  botoncito2.removeEventListener("click", alertita2);
  alert("¡Ya no puedes clickear el botoncito 2!")
}, 10000);

/// Propagacion de Eventos

let cajaPadre = document.querySelector("#cajaPadre")
let botonHijo = document.querySelector("#botonHijo")

cajaPadre.addEventListener("click", () => {

  alert("Haz tocado el elemento padre")

})

botonHijo.addEventListener("click", (event) => {

  event.stopPropagation();

  alert("Haz tocado el elemento padre")

})