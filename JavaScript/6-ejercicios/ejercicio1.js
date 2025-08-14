/* 

Ejercicio 1:

Calcula cuantas horas le llevara llegar a la luna a una nave espacial y guarda el resultado en una variable.

La distancia desde la tierra hasta la luna es de 384400km.

La velocidad de la nave es de 1225 kilometros por hora.

*/

let distanciaTierraALuna = 384400
let velocidadNave = 1225

let horasTotalesDeViaje = distanciaTierraALuna / velocidadNave

console.log("Ejercicio 1");
console.log("La cantidad de horas que llevara llegar a la luna desde la tierra es de " + Math.ceil(horasTotalesDeViaje));

