/// Objeto Math

// Numero PI
console.log(Math.PI);

// Numero Euler
console.log(Math.E);

// Redondear al entero mas cercano
console.log(Math.round(7.2)) // 7
console.log(Math.round(7.6)) // 8

// Redondear al numero mas bajo
console.log(Math.floor(7.9))

// Redondear al numero mas alto
console.log(Math.ceil(7.01))

// Numeros Aleatorios
console.log(Math.round(Math.random()*10))

// Valor Absoluto
// No importa si tiene signo o no, solo devuelve el numero
console.log(Math.abs(-20))

// Potencias
console.log(Math.pow(7,2))

// Raiz 
// Saca la raiz con el sqrt y el toFixed sirve para poner cuantos decimales despues de la coma queremos que se muestren.
console.log(Math.sqrt(7).toFixed(2))

// Minimo
console.log(Math.max(8,4,5,6,7,9))

// Maximo
console.log(Math.min(8,4,5,6,7,9))

// Ver todo el objeto Math
console.log(Math)