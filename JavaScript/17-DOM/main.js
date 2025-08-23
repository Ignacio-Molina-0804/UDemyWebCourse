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
