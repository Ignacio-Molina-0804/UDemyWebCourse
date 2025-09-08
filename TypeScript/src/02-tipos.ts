// Definir Variable: Solo se usa LET y CONST

let nombreCompleto = "Ignacio Molina";
// nombreCompleto = 12; // Se ve que no se puede poner el valor de number porque esta tipado

console.log(nombreCompleto);
console.log(typeof nombreCompleto);

const nombreCompleto2 = "Lionel Messi";
//nombreCompleto2 = "Pepe" // No deja porque es una constante

// String

let pais: string = "Argentina";

// Number

let habitantes: number = 40000000;

// Boolean

let verdadero: boolean = true;

// Any

let locura: any = "Curso " + 12; // Puedes poner cualquier dato como en JavaScript

// Arrays

let lenguajes: string[] = ["JS", "TS", "PHP", "PYTHON"];
let decadas: Array<number> = [90, 80, 70];

// Tipos Especiales

let sinDefinir: undefined = undefined;
let nula: null = null;
