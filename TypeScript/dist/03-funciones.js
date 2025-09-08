"use strict";
// Declaracion de Funcion
Object.defineProperty(exports, "__esModule", { value: true });
function getNombre(miNombre = "Ignacio") {
    return "Mi Nombre es " + miNombre;
}
getNombre("Juan");
// Funcion Anonima
let miFuncion = (parametro) => {
    return parseInt(parametro);
};
