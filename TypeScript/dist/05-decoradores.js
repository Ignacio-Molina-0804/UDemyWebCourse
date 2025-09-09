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
// Decorador para agragar un metodo a una clase
function AgregarMetodo(target) {
    target.prototype.acelerar = function () {
        console.log("Acelerando desde un metodo extra de un decorador");
    };
}
// Uso de Decoradores
// @DecoradorTurbo // Decorador Basico
// @DecoradorConMensaje("El Mejor Repo de GitHub es este!") // Decorador con parametro
@AgregarMetodo
class Coche {
    constructor() {
        console.log("El Auto esta arrancado!");
    }
}
let miCoche = new Coche();
// Formas de utilizar el metodo agregado por el Decorador
// Uso de interfaz para poder utilizar el metodo agregado en el decorador
// 1 - Uso de interfaz para poder crear el metodo
/*
interface Coche {

    acelerar: () => void;

}

miCoche.acelerar();
*/
// 2 - Uso de llamar a mi clase como any
/*
(miCoche as any).acelerar();
*/
// 3 - Uso de setear de inicio mi clase como any
let miCoche2 = new Coche();
miCoche2.acelerar();
