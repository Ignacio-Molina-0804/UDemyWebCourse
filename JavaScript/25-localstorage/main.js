/// LocalStorage

// Comprobar Disponibilidad
if (typeof Storage !== "undefined") {
  console.log("LocalStorage disponible!!");
} else {
  console.log("LocalStorage NO disponible!!");
}

// Guardar Datos
localStorage.setItem("curso", "Curso WEB")
localStorage.setItem("link", "https://github.com/Ignacio-Molina-0804/UDemyWebCourse")

// Sacar Datos
document.querySelector("#curso").textContent = localStorage.getItem("curso")
document.querySelector("#enlace").textContent = console.log(localStorage.getItem("enlace"))