// Condicional Switch

// Un switch en JavaScript (y en muchos otros lenguajes) es una estructura de control que sirve para ejecutar diferentes bloques de código según el valor de una variable o expresión.

// En lugar de usar muchos if...else if...else, el switch compara el valor con diferentes casos (case) y ejecuta el bloque que coincida.

let miDesayuno = "tortitas";

switch (miDesayuno) {
    case "tortitas":
        console.log("Has elegido TORTITAS con SIROPE DE ARCE");
        break;

    case "huevos":
        console.log("Has elegido huevos fritos con bacon");
        break;

    case "colacao":
        console.log("Has elegido un Colacao con copos de avena");
        break;

    default:
        console.log("Has elegido otro desayuno diferente");
}

// Condicional Ternario

// El condicional ternario en JavaScript es una forma compacta de tomar decisiones, funcionando como un if...else pero en una sola línea.

let nombre = "Juan Alberto";
let edad = 18;

let resultado = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";

console.log(resultado);

// Diferencia entre Var y Let (ambito/bloques)