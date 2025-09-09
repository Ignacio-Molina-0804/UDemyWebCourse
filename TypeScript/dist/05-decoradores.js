"use strict";
// Decorador Básico
Object.defineProperty(exports, "__esModule", { value: true });
function DecoradorTurbo(target) {
    console.log("El Auto esta equipado con un turbo", target.name);
}
@DecoradorTurbo
class Coche {
    constructor() {
        console.log("El Auto esta arrancado!");
    }
}
let miCoche = new Coche();
