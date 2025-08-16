/*
Ejercicio 11:

Nuestros usuarios tienen perros.

Y quieren saber que edad de perro tienen sus mascotas.

Un año de humano equivale a siete de perro.

Pregunta a los usuarios que edad tiene su perro y dile la edad canina.
*/

alert("Ejercicio 11")
let edadHumana = prompt("Cual es la de edad de su perro? (En años humanos)")

let conversionEdadAEdadPerro = edadHumana * 7

alert(`La edad canina de su perro es de ${conversionEdadAEdadPerro} años perrunos.`);

/*
Ejercicio 12:

Programa que pida dos números y que nos diga cual es el mayor, el menor y si son iguales.

PLUS: Si los números no son un número o son menores o iguales a cero,
nos los vuelva a pedir.
*/

alert("Ejercicio 12");

let numero1 = parseInt(prompt("Ingrese el primer número (mayor a 0):"));
let numero2 = parseInt(prompt("Ingrese el segundo número (mayor a 0):"));

// Validación con bucle
while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    alert("Debe ingresar números válidos y mayores a 0.");
    numero1 = parseInt(prompt("Ingrese el primer número (mayor a 0):"));
    numero2 = parseInt(prompt("Ingrese el segundo número (mayor a 0):"));
}

// Comparaciones
if (numero1 === numero2) {
    alert("Los números son iguales.");
} else if (numero1 > numero2) {
    alert("El número 1 es mayor que el número 2.");
} else {
    alert("El número 2 es mayor que el número 1.");
}
