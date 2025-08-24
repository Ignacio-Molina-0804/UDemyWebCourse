// window.addEventListener("DOMContentLoaded", function() => {

// Colocar tu Script haciendo que no sea necesirio colocar el DEFER en el HTML

// });

// DOM (Document Object Model)

// getElementById - Seleccionar elementos por su ID

let caja = document.getElementById("caja");
console.log(caja);

// innerHTML - Modificar el contenido HTML de un elemento

caja.innerHTML = "Texto modificado desde JS";

// style - Modificar estilos CSS de un elemento

//caja.style.(elemento que quieras modificar de CSS) = "valor";

/*
caja.style.background = "gray";
caja.style.maxWidth = "50%";
caja.style.margin = "0 auto";
*/

function fondoCaja(color, radius) {
  caja.style.background = color;
  caja.style.borderRadius = radius;
}

// className - Devolver el nombre de la clase CSS de un elemento
console.log(caja.className);

// classList - Asignar clases CSS a un elemento
caja.classList = "cajita cajaza"; // Reemplaza todas las clases que tenga el elemento

// classList.add - Añadir una clase CSS a un elemento
caja.classList.add("cajita");

// getElementsByClassName - Seleccionar elementos por su clase CSS

let articulos = document.getElementsByClassName("article");
console.log(articulos);

for (let i = 0; i < articulos.length; i++) {
  articulos[i].classList.add("articleBase");

  // Añadir un nodo del DOM
  let enlace = document.createElement("a");
  enlace.setAttribute("href", "https://google.com");
  enlace.setAttribute("target", "_blank");
  enlace.style.color = "green";

  let textoEnlace = document.createTextNode("Sigue leyendo");
  enlace.append(textoEnlace);

  articulos[i].append(enlace);

  if ((i + 1) % 2 == 0) {
    articulos[i].classList.add("articlePar");
    articulos[i].innerHTML += "<hr> Artículo par modificado desde JS";
  }

  if (i === articulos.length - 1) {
    articulos[i].classList.add("articleUltimo");
    articulos[i].innerHTML += "<hr> Último artículo modificado desde JS";
  }
}

// getElementsByTagName - Seleccionar elementos por su etiqueta HTML

let etiquetas = document.getElementsByTagName("article");
console.log(etiquetas);
etiquetas[0].innerHTML += "<hr> Primer artículo modificado desde JS";

// RECOMENDABLE - QuerySelector

let seccionArticulos = document.querySelector("#articulos");
console.log(seccionArticulos);
seccionArticulos.style.background = "#ccc";
seccionArticulos.style.padding = "20px";
seccionArticulos.style.marginTop = "20px";
seccionArticulos.style.border = "2px solid black";

// QuerySelector y clases

let titulo = document.querySelector(".Titulo");
console.log(titulo);

// RECOMENDABLE - QuerySelectorAll

let todosLosArticulos = document.querySelectorAll(".article");
console.log(todosLosArticulos);

todosLosArticulos.forEach((articulo, i) => {
  articulo.classList.add("articleBase");

  // Añadir un nodo del DOM
  let enlace = document.createElement("a");
  enlace.setAttribute("href", "https://google.com");
  enlace.setAttribute("target", "_blank");
  enlace.style.color = "green";

  let textoEnlace = document.createTextNode("Sigue leyendo");
  enlace.append(textoEnlace);

  articulo.append(enlace);

  if ((i + 1) % 2 == 0) {
    articulo.classList.add("articlePar");
    articulo.innerHTML += "<hr> Artículo par modificado desde JS";
  }

  if (i === articulos.length - 1) {
    articulo.classList.add("articleUltimo");
    articulo.innerHTML += "<hr> Último artículo modificado desde JS";
  }
});

// Modificaciones

const tarjeta = document.querySelector("#tarjeta");

tarjeta.textContent = "Contenido de la tarjeta modificado desde JS";
tarjeta.innerHTML = "<h2><strong>Contenido de la tarjeta modificado desde JS<strong></h2>";
tarjeta.setAttribute("data-id",12);
tarjeta.setAttribute("class","ejemploclase");
tarjeta.getAttribute("id");

tarjeta.style.background = "blue";
tarjeta.style.color = "white";
tarjeta.style.padding = "20px";
tarjeta.style.textAlign = "center";
tarjeta.style.borderRadius = "10px";
tarjeta.style.margin = "20px auto";

// Agregar y Remover elementos del DOM

tarjeta.classList.add("NuevaClase");
tarjeta.classList.remove("NuevaClase");
tarjeta.classList.toggle("NuevaClase"); // Si la clase existe la elimina y si no existe la agrega

// Crear Atributos

const titular = document.createElement("h2");
titular.textContent = "Este es el titular de la tarjeta";

// Agregar contenido al DOM
tarjeta.appendChild(titular);
tarjeta.insertBefore(titular, tarjeta.firstChild); // Inserta el elemento antes del nodo indicado

// Eliminar nodos del DOM

tarjeta.querySelector("Strong").remove();
