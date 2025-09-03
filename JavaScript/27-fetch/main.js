/// FETCH (ajax)

// Sacar informacion de manera asincrona (GET)

let idUser = 4

fetch("https://reqres.in/api/users/"+idUser)
    .then(response => response.json())
    .then(data => {

        console.log(data.data)

    })
    .catch(error =>{

        console.error("Error al pedir los datos del servidor ", error)

    })

function mostrarUsuario(user){

    let caja = document.querySelector("#user")
    caja.innerHTML = `
        <h2>${user.first_name} ${user.last_name}</h2>
        <img src="${user.avatar}"/>
    `

}