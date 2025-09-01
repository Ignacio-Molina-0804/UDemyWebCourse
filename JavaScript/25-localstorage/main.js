/// LocalStorage

// Comprobar Disponibilidad
if (typeof Storage !== "undefined") {
  console.log("LocalStorage disponible!!");
} else {
  console.log("LocalStorage NO disponible!!");
}

// Guardar Datos
localStorage.setItem("curso", "Curso WEB");
localStorage.setItem(
  "link",
  "https://github.com/Ignacio-Molina-0804/UDemyWebCourse"
);

// Sacar Datos
document.querySelector("#curso").textContent = localStorage.getItem("curso");
document.querySelector("#enlace").textContent = console.log(
  localStorage.getItem("enlace")
);

// Guardar Objetos
let animal = {
  tipo: "Elefante",
  nombre: "Trompita",
  color: "Gris",
};

localStorage.setItem("animal", JSON.stringify(animal));

// Recuperar un Objeto
let animalJS = JSON.parse(localStorage.getItem("animal"));
console.log(animalJS);

// Eliminar Elementos
localStorage.removeItem("animal");

// Vaciar Storage
document.querySelector("#vaciar").addEventListener("click", () => {
  localStorage.clear();
});
