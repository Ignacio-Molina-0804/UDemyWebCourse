/// Constantes
// Una variable que nunca cambia
// Principalmente se usan para guardar valores que no cambian ya sea como DNI, nombres, cuit, links muy especificos, entre otras cosas. A continuacion te dejo un ejemplo

let nombre = "Ignacio"
let link = "google.com"

const DNI = "1234358549486P"

console.log(nombre + DNI)

/* Cambiamos el nombre y intentamos cambiar el DNI */

nombre = "Pepe"
DNI = "5678358549486P"

console.log(nombre + DNI)

/* En este caso si queremos correr nos saldra un error debido a que no podemos cambiar un valor */

