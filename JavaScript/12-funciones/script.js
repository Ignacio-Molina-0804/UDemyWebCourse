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
