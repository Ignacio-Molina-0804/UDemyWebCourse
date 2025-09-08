"use strict";
// Para que esto funcione en el navegador lo hay que compilar en JavaScript poniendo "npx tsc (nombreDeTuArchivo).ts"
// O tocando las opciones del tsconfig.json del rootDir y outDir Creando las carpetas dist y src
// Y tambien puedes hacer que la compilacion se haga automatica colocando el "npx tsc -w" en caso de tener configurado todo con
// Esas carpetas
Object.defineProperty(exports, "__esModule", { value: true });
let nombre = "Ignacio Molina";
alert("Hola que tal desde TS");
document.querySelector("#mensaje").innerHTML = "Aprende TypeScript";
