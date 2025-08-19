/// Funciones
// Una función agrupa una serie de instrucciones para poder usarlas varias veces
// Es una agrupación reutilizable de un conjunto de instrucciones

function saludo() {
  console.log("¡Hola, abuela!");
  console.log("¿Qué tal estás?");
  console.log("¿Me pasas la receta de tu tortilla de patatas??");

  return "Abuela saludada correctamente!!";
}

let mensajeFinal = saludo();

alert(mensajeFinal);

/// Funciones con Parametros
// Los parámetros son variables que se definen en la declaración de la función
// y que se pueden usar dentro de la función para personalizar su comportamiento.

function saludoConParametros(nombre, plato) {
  console.log("Hola, abuelita " + nombre + "!!");
  console.log("¿Qué tal estás?");
  console.log("¿Me pasas la receta de tu " + plato + "??");
  console.log("********************");

  return "Abuela " + nombre + " saludada correctamente!!";
}

let mensajeFinalConParametros = saludoConParametros("Juani", "lentejas");

alert(mensajeFinalConParametros);

saludoConParametros("Laura", "potaje");

/// Funciones con Parametros Opcionales
// Los parámetros opcionales permiten que una función pueda ser llamada sin
// proporcionar todos los argumentos definidos, asignando un valor por defecto
// a aquellos que no se proporcionen.

function saludoConParametrosOpcionales(nombre, plato = "Bife a la Criolla") {
  console.log("Hola, abuelita " + nombre + "!!");
  console.log("¿Qué tal estás?");
  console.log("¿Me pasas la receta de tu " + plato + "??");
  console.log("********************");

  return "Abuela " + nombre + " saludada correctamente!!";
}

let mensajeFinalConParametrosOpcionales = saludoConParametros("Juani");

alert(mensajeFinalConParametrosOpcionales);

saludoConParametrosOpcionales("María");

/// Funciones dentro de funciones
// Una función puede llamar a otra función dentro de su cuerpo, lo que permite
// estructurar el código de manera más modular y reutilizable.

function operaciones(numero1, numero2) {
    return {
        suma: numero1 + numero2,
        resta: numero1 - numero2,
        multiplicacion: numero1 * numero2,
        division: numero1 / numero2
    };
}

function porConsola(numero1, numero2) {
    let resultados = operaciones(numero1, numero2);
    console.log("Suma: " + resultados.suma);
    console.log("Resta: " + resultados.resta);
    console.log("Multiplicación: " + resultados.multiplicacion);
    console.log("División: " + resultados.division);
    return true;
}

function porPantalla(numero1, numero2) {
    let resultados = operaciones(numero1, numero2);

    let html = `
        <h2>Calculadora</h2>
        <h2>Suma: ${resultados.suma}</h2>
        <h2>Resta: ${resultados.resta}</h2>
        <h2>Multiplicación: ${resultados.multiplicacion}</h2>
        <h2>División: ${resultados.division}</h2>
    `;

    document.getElementById("resultado").innerHTML = html;
    return true;
}

function calculadora(numero1, numero2, mostrar = false) {
    if (mostrar === false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }
    return true;
}

// Ejemplos
calculadora(7, 9);        // Consola
calculadora(7, 12, true); // Pantalla

/// Parametros ...REST
// El parámetro rest permite representar un número indefinido de argumentos
// como un array, facilitando la gestión de múltiples valores en una función.

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){

  console.log("Fruta 1: " + fruta1)
  console.log("Fruta 1: " + fruta2)
  console.log(resto_de_frutas)

}

listadoFrutas("Naranja", "Manzana", "Pera", "Sandía", "Melón", "Coco");

/// Operador Spread
// El operador spread permite expandir un array en lugares donde se esperan múltiples elementos,
// facilitando la creación de nuevos arrays o la llamada a funciones con múltiples argumentos.

let numeros = [1, 2, 3, 4, 5];
let masNumeros = [6, 7, 8, 9, 10];
let todosLosNumeros = [...numeros, ...masNumeros];

console.log(todosLosNumeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/// Funciones Anonimas
// Las funciones anónimas son funciones sin nombre que se pueden asignar a variables,
// pasar como argumentos a otras funciones o usar como callbacks.

let funcionAnonima = function() {
  console.log("¡Hola desde una función anónima!");
}



/// Funciones Callback
// Las funciones callback son funciones que se pasan como argumentos a otras funciones,
// permitiendo que una función sea llamada después de que otra haya terminado su ejecución.

let veces = 0

setInterval(function() {
  veces++;
  console.log("Han pasado " + veces + " segundos");
}, 1000);

// Funcion de Callback Avanzada
// Función que recibe dos números y dos callbacks

function restame(n1, n2, mostrar, multiplicarPorTres) {
    let resta = n1 - n2;

    // Ejecuta la primera función (mostrar)
    mostrar(resta);

    // Ejecuta la segunda función (multiplicarPorTres)
    multiplicarPorTres(resta);

    return resta;
}

// Uso de la función con callbacks
restame(
    20, 5, 
    function(resultado) {   // Primer callback
        console.log("La resta es: " + resultado);
    },
    function(resultado) {   // Segundo callback
        console.log("La resta x 3 es: " + (resultado * 3));
    }
);

/// Ambito variables o Scope
// El ámbito de una variable determina dónde puede ser accedida y utilizada en el código.

// Global
let ruta = "https://www.google.com";

function mostrarRuta() {
    console.log("La ruta es: " + ruta);
}

mostrarRuta();

// Local
function mostrarRutaLocal() {
    let rutaLocal = "https://www.localhost.com";
    console.log("La ruta local es: " + rutaLocal);
}

mostrarRutaLocal();
// console.log(rutaLocal); // Esto causaría un error porque rutaLocal no está definida en este ámbito

// Bloque
function mostrarRutaBloque() {
    if (true) {
        let rutaBloque = "https://www.bloque.com";
        console.log("La ruta bloque es: " + rutaBloque);
    }
    // console.log(rutaBloque); // Esto causaría un error porque rutaBloque no está definida fuera del bloque
}
mostrarRutaBloque();

/// Hoisting
// El hoisting es un comportamiento de JavaScript donde las declaraciones de variables y funciones
// se mueven al inicio de su contexto de ejecución, permitiendo que se puedan usar antes de ser declaradas.

saludar();

function saludar() {
    console.log("¡Hola desde la función saludar!");
}

// Aunque la función se declara después de su llamada, JavaScript la reconoce debido al hoisting.

/// Funciones Flecha
// Las funciones flecha son una forma más concisa de escribir funciones en JavaScript.

// Definir funcion

let declaracionFuncionFlecha = () => {

  console.log("Una Funcion Flecha de Declaracion");
  
}

declaracionFuncionFlecha();

// Definir funcion con parametros

let declaracionFuncionFlechaConParametros = (nombre, edad) => {

  console.log("Una Funcion Flecha de Declaracion con Parametros");
  console.log("Nombre: " + nombre);
  console.log("Edad: " + edad);

}

declaracionFuncionFlechaConParametros("Nacho", 20);

// Utilizar en un callback

setTimeout(() => {
  console.log("Una Funcion Flecha de Callback");
}, 2000);
