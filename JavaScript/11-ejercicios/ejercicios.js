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

/*

Ejercicio 13

Tengo un kanguro que salta 3 metros cada vez.

Haz un programa que me diga cuantos saltos ha dado el kanguro...

y cual es la distancia total recorrida tras 17 saltos

*/

let distanciaDeSalto = 3
let saltos = 17

let distanciaRecorrida = 0

alert("Ejercicio 13");

for(let contador = 1; contador <= saltos; contador++){

    distanciaRecorrida += distanciaDeSalto

    console.log(`El canguro ha saltado un total de ${contador} saltos 
                y ha recorrido un total de ${distanciaRecorrida} metros.`);

}

/* 

Ejercicio 14:

Un DJ no sabe que genero musical poner en la fiesta...

Preguntale al usuario que genero de musica quiere (pop, rock o rap)

Segun lo que prefiera que devuelva un mensaje diferente

*/

alert("Ejercicio 14");

let genero = prompt("¿Que genero de musica prefieres? (Rock, Pop, Rap)").toLowerCase()

while(genero != "pop" && genero != "rock" && genero != "rap"){

    alert("Genero incorrecto, ingresa uno de las posibles opciones")

    genero = prompt("¿Que genero de musica prefieres? (Rock, Pop, Rap)").toLowerCase()

}


switch (genero){

    case "rock":
        alert("Esta sonando ROCK")
        break;

    case "pop":
        alert("Esta sonando POP")
        break

    case "rap":
        alert("Esta sonando RAP")
        break

}

/* 

Ejercicio 15

Muestra la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado

*/

let numIntroducido = 0
let suma = 0
let contador = 0

alert("Ejercicio 15");

do {

    numIntroducido = parseInt(prompt("Ingrese un numero para sumar y sacar la media de todo (Cuando quiera que termine el proceso mande un numero negativo)"))

    if(isNaN(numIntroducido)){

        suma = 0

    } else if (numIntroducido >= 0){

        suma += numIntroducido
        contador++ 

    }

} while (numIntroducido >= 0)

alert (`La suma de los numeros es: ${suma}`)
alert (`La media de los numeros es: ${suma/contador}`)

/* 

Ejercicio 16

Escribe un programa que muestre la tabla de multiplicacion del numero
que haya introducido el usuario.

*/

alert("Ejercicio 16");

let numTablaMultiplicar = parseInt(prompt("¿Qué número quieres para que te dé su tabla de multiplicación?", "1"))

console.log("Tabla del " + numTablaMultiplicar)

for (let i = 1; i <= 10; i++) {
    console.log(`${numTablaMultiplicar} x ${i} = ${numTablaMultiplicar * i}`)
}

/*

Ejercicio 17

Mostrar todos los numeros impares que hay entre dos numeros que nos da el usuario

*/

alert("Ejercicio 17");

let numeroIngresado1 = parseInt(
    prompt("Ingresa el primer numero", 1)
)

let numeroIngresado2 = parseInt(
    prompt("Ingresa el segundo numero", 1)
)

while (
  numeroIngresado1 <= 0 ||
  numeroIngresado2 <= 0 ||
  isNaN(numeroIngresado1) ||
  isNaN(numeroIngresado2) ||
  numeroIngresado2 < numeroIngresado1
)
 {
    alert("Debe ingresar números válidos y mayores a 0.");
    numeroIngresado1 = parseInt(
        prompt("Ingresa el primer numero", 1)
    )
    numeroIngresado2 = parseInt(
        prompt("Ingresa el segundo numero", 1)
    )
}

for (let i = numeroIngresado1; i <= numeroIngresado2; i++){

    if (i % 2 != 0){

        console.log(`El numero ${i} es impar`);

    }

}

/* 

Ejercicio 18

Tenemos una coleccion desde el 1 al 17

Y el usuario tiene que adivinar cual es el elegido

Haz un programa para que pueda adivinar el numero

*/

alert("Ejercicio 18");

const numeroRespuesta = Math.floor(Math.random() * 17) + 1;
let numeroParaAdivinar = 0;

do {
    numeroParaAdivinar = parseInt(prompt("Ingresa un número entre el 1 y el 17 para ver si adivinas el número."));

    while (numeroParaAdivinar <= 0 || isNaN(numeroParaAdivinar) || numeroParaAdivinar > 17) {
        alert("Lo que ingresaste no es un número válido (1 a 17)");
        numeroParaAdivinar = parseInt(prompt("Ingresa un número entre el 1 y el 17 para ver si adivinas el número."));
    }

    if (numeroParaAdivinar !== numeroRespuesta) {
        alert("El número ingresado no es el correcto, intenta de nuevo...");
    } else {
        alert("¡El número ingresado es el correcto, felicidades!!!");
    }

} while (numeroParaAdivinar !== numeroRespuesta);

/*

Ejercicio 19:

Muestra todos los numeros divisores de un numero que se mete en un prompt

*/

alert("Ejercicio 19");

let numero = parseInt(prompt("Mete tu número y te digo los divisores", 1));

for (let contador = 1; contador <= numero; contador++) {
    if (numero % contador == 0) {
        console.log(`El ${contador} es divisor de ${numero}`);
    }
}

/*

Ejercicio 20:

En base al número que nos dé el usuario,
decirle si es par o impar.

*/

let numeroParOImpar;

alert("Ejercicio 20");

while (isNaN(numeroParOImpar)) {
  numeroParOImpar = parseInt(prompt("Mete el número para ver si es par o impar:", 0));
}

if (numeroParOImpar % 2 === 0) {
  alert("El número " + numeroParOImpar + " es PAR");
} else {
  alert("El número " + numeroParOImpar + " es IMPAR");
}

/*

Ejercicio 21:

Calculadora:
- Pida dos números por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En una alerta y por la consola el resultado de
  sumar, restar, multiplicar y dividir esas dos cifras

*/

let n1;
let n2;

alert("Ejercicio 21");

while (n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)) {
  n1 = parseInt(prompt("Mete el primer número"));
  n2 = parseInt(prompt("Mete el segundo número"));
}

let resultado = `
Suma: ${n1 + n2}
Resta: ${n1 - n2}
Multiplicación: ${n1 * n2}
División: ${n1 / n2}
Resto: ${n1 % n2}
`;

alert(resultado);
console.log(resultado);

/*

Ejercicio 22:
Tenemos una bolsa con 37 caramelos.

Cada vez que te comes uno, quedan menos.

Haz una simulación de esto con un bucle.

*/

let bolsa = 37;

alert("Ejercicio 22");

while (bolsa > 0) {
  // mostrar algo
  console.log("Te acabas de comer un caramelo. Quedan " + bolsa + " caramelos en la bolsa.");

  bolsa--;
  // equivalente: bolsa = bolsa - 1;
}

