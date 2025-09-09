// Decorador Básico

function DecoradorTurbo(target: any) {
  console.log("El Auto esta equipado con un turbo", target.name);
}

@DecoradorTurbo
class Coche {
  constructor() {
    console.log("El Auto esta arrancado!");
  }
}

let miCoche = new Coche();
