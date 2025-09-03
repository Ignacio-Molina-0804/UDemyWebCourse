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

console.log("Hola");
console.log("Soy");
console.log("Pepe");

/// Promesas Encadenadas

function servirPizza() {
  // 15 minutos para entregar la pizza

  return new Promise((resolve) => {
    setTimeout(() => resolve("Pizza Servida"), 15000);
  });
}

function servirHamburguesa() {
  // 8 minutos para entregar la pizza

  return new Promise((resolve) => {
    setTimeout(() => resolve("Hamburguesa Servida"), 8000);
  });
}

function servirSolomilloSalsaAceituna() {
  // 12 minutos para entregar la pizza

  return new Promise((resolve) => {
    setTimeout(
      () => resolve("Solomillo con Salsa de Aceitunas Servida"),
      12000
    );
  });
}

servirPizza()
  .then((resultado1) => {
    console.log(resultado1);
    return servirHamburguesa();
  })
  .then((resultado2) => {
    console.log(resultado2);
    return servirSolomilloSalsaAceituna;
  })
  .then((resultado3) => {
    console.log(resultado3);
  })
  .catch((error) => {
    console.log("Error en las comandas: " + error);
  });
