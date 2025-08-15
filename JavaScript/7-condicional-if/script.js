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

// Ejemplo 3

// Hacer el caso de ver si alguien en mayor o menor de edad, en el caso de que sea mayor de diferenciar entre un adolescente, adulto o anciano

let nombre2 = "Juan";
let edad = 18;

if (edad >= 18) {
  console.log(
    `${nombre2} es mayor de edad debido a que tiene ${edad} años.`
  );

  if(edad <= 20){

    console.log("Y ademas en adolescente.")

  } else if (edad >= 70) {

    console.log("Y ademas es anciano")

  } else {

    console.log("Y ademas es adulto");
    
  }

} else {

  console.log(
    `${nombre2} no es mayor de edad debido a que tiene ${edad} años.`
  );

}
