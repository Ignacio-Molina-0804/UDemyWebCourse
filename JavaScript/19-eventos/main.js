/// Eventos

let botoncito = document.querySelector("#botoncito")

// Evento Click 

botoncito.addEventListener("click", () => {

    alert("Haz dado click al botoncito!!")

})

// Sacar datos del evento que ejecutamos

botoncito.addEventListener("click", (event) => {

    console.log(event)

})

