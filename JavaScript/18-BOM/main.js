// BOM - Browser Object Model

/// Alertas y Dialogos

// Alertas
alert("Hola, soy una alerta");

// Prompt
let nombre = prompt("¿Cuál es tu nombre?");
console.log(nombre);

// Confirm
confirm("¿Estás seguro de querer continuar?");

/// Window - Ventana del Navegador

console.log(window)

// Propiedades

console.log(window.innerHeight); // Alto de la ventana
console.log(window.innerWidth); // Ancho de la ventana

console.log(window.outerHeight, window.outerWidth); // Alto y ancho de la ventana incluyendo barras de navegador

console.log(window.closed); // Devuelve true o false si la ventana está cerrada o no
console.log(window.document); // Devuelve el objeto document
console.log(window.navigator); // Devuelve el objeto navigator
console.log(window.navigator.userAgent); // Devuelve el userAgent del navegador

window.setInterval(() => {
  console.log("Hola");
}, 1000); // Ejecuta una función cada cierto tiempo (milisegundos)

console.log(window.scrollX, window.scrollY); // Devuelve la posición de los ejes X y Y

/// Navigator

console.log(navigator)

if(!navigator.onLine){

    alert("Estas offline, conectate a internet")    

} else {

    alert("Muy bien, estas conectado a internet!!")

}