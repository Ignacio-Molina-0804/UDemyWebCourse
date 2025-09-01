/// Objeto DATE

// Creacion de Fecha con datos de tu computadora (dia, mes, año y hora)
let fechaActual = new Date();
console.log(fechaActual)

// Creacion de fecha con datos personalizados
let fechaCreada = new Date(2025,7,30);
console.log(fechaCreada);

// Visualizacion unica del año
console.log(fechaActual.getFullYear());

// Visualizacion unica del mes
// Para que sea el mes actual debes sumarle 1
console.log(fechaActual.getMonth()); 

// Visualizacion unica del dia
console.log(fechaActual.getDate());

// Visualizacion unica de la hora
console.log(fechaActual.getHours());

// Visualizacion unica de los minutos
console.log(fechaActual.getMinutes());

// Visualizacion unica de los segundos
console.log(fechaActual.getSeconds());

// Visualizacion unica de los milisegundos
console.log(fechaActual.getMilliseconds())

// Visualizacion unica del numero del dia de la semana (Lunes = 1)
// En el caso de que sea domingo se va a mostrar como 0
console.log(fechaActual.getDay())

// Uso con todos los numeros
console.log(`Fecha Completa: ${fechaActual.getDate()}/${(fechaActual.getMonth())+1}/${fechaActual.getFullYear()}`)
