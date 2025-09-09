"use strict";
// Decorador Básico
Object.defineProperty(exports, "__esModule", { value: true });
function DecoradorTurbo(target) {
    console.log("El Auto esta equipado con un turbo", target.name);
}
// Decorador con parametros
function DecoradorConMensaje(mensaje) {
    return function (target) {
        console.log(`Mi ${target.name} te manda este mensaje: ${mensaje}`);
    };
}
// Uso de Decoradores
// @DecoradorTurbo // Decorador Basico
@DecoradorConMensaje("El Mejor Repo de GitHub es este!") // Decorador con parametro
class Coche {
    constructor() {
        console.log("El Auto esta arrancado!");
    }
}
let miCoche = new Coche();
