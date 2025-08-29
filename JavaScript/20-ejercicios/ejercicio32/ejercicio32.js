/*
Ejercicio 32:

Crea una lista de la compra en la que el usuario pueda añadir 
nuevos productos para comprar con un campo de texto y un botón.

Cada vez que se añade un producto, este aparece 
en la lista con un botón para eliminarlo.

El usuario podrá añadir tantos productos como quiera.
Cada producto añadido tiene un botón para borrarlo de la lista.

*/

document.addEventListener("DOMContentLoaded", () => {

    let nuevoProducto = document.querySelector("#nuevoProducto")
    let btnAgregar = document.querySelector("#agregar")
    let listaCompra = document.querySelector("#listaCompra")

    btnAgregar.addEventListener("click", () => {

        let productoParaAgregar = nuevoProducto.value.trim();

        if(productoParaAgregar){

            // Creacion de elemento li
            const productoFinal = document.createElement("li")
            productoFinal.textContent = productoParaAgregar

            // Crear elemento para eliminar
            const btnEliminar = document.createElement("button")
            btnEleminar.textContent = "Borrar"
            
            btnEliminar.addEventListener("click", () => {

                productoFinal.remove();

            })

            productoFinal.appendChild(btnEliminar)
            productoFinal.classList.add("producto")

            // Añade el elemento li al ul
            listaCompra.appendChild(productoFinal)
            nuevoProducto.value = ""

        }

    })

})