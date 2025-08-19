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
    let resultados = {
        "suma": (numero1 + numero2),
        "resta": (numero1 - numero2),
        "multiplicacion": (numero1 * numero2),
        "division": (numero1 / numero2)
    };

    return resultados;
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
