// Funciones
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

// Funciones con Parametros

function saludo2(nombre, plato) {
  console.log("Hola, abuelita " + nombre + "!!");
  console.log("¿Qué tal estás?");
  console.log("¿Me pasas la receta de tu " + plato + "??");
  console.log("********************");

  return "Abuela " + nombre + " saludada correctamente!!";
}

let mensajeFinal2 = saludo("Juani", "lentejas");

alert(mensajeFinal2);

saludo2("María", "tortilla");
saludo2("Pepa", "espaguetis");
saludo2("Paz", "bocadillo campero");
saludo2("Laura", "potaje");

