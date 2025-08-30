/* 

Ejercicio 37:

    1. Crea un formulario con estos campos: Nombre, Apellido y Edad.
    2. Añade un boton de enviar y usa el evento submit.
    3. Muestra los datos por pantalla cuando se termine de enviar el form.

*/

const formulario = document.querySelector("#formulario");
const cajaInfo = document.querySelector(".info");

let nombre = document.querySelector("#nombre")
let apellidos = document.querySelector("#apellidos")
let edad = document.querySelector("#edad")

let infoNombre = document.querySelector("#info_nombre strong")
let infoApellidos = document.querySelector("#info_apellidos strong")
let infoEdad = document.querySelector("#info_edad strong")

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Formulario Enviado!!");

  cajaInfo.style.display = "block";
  infoNombre.textContent = nombre.value
  infoApellidos.textContent = apellidos.value
  infoEdad.textContent = edad.value

  console.log(nombre.value, apellidos.value, edad.value)

});
