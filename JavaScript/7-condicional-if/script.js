/// Condicional IF
// Un condicional IF es algo que como dice el nombre es una condicion, este

//Ejemplo 1

// Tengo que tener un condicional el cual me de un mensaje si tomamos una coca, tenemos el true que seria en el caso de que la tomemos o el false en el caso de que no.

tomeUnaCoca = true;

if (tomeUnaCoca) {
  // Si se cumple la condicion
  console.log("Hoy me tome una coca");
} else {
  // Si NO se cumple la condicion
  console.log("Hoy no me tome una coca");
}

// Ejemplo 2

// Hacer el caso de ver si alguien en mayor o menor de edad

let nombre = "Pepe";
let edadPepe = 18;

if (edadPepe >= 18) {
  console.log(
    `${nombre} es mayor de edad debido a que tiene ${edadPepe} años.`
  );
} else {
  console.log(
    `${nombre} no es mayor de edad debido a que tiene ${edadPepe} años.`
  );
}
