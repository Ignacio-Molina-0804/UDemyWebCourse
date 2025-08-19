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

