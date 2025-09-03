/// Promesas

let miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let correcto = true;

    if (correcto) {
      let miObjeto = {
        nombre: "Mario Bros",
        categoria: "Plataformas",
        anio: 1980,
      };
      resolve(miObjeto);
    } else {
      reject("No se ha cumplido la promesa :c");
    }
  }, 3500);
});

miPromesa
  .then((resultado) => {
    console.warn(resultado);
  })
  .catch((error) => {
    console.error("Error: " + error);
  });

console.log("Hola")
console.log("Soy")
console.log("Pepe")