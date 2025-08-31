// Programacion Orientada a Objetos (POO)

// Molde
class Gato {

    constructor(){

        // Propiedades o atributos (Caracteristicas)
        this.nombre = "Pepe"
        this.raza = "Abisinio"
        this.color = "Marron"

    }

    // Metodos (Acciones)

    maullar(){

        console.log(`El Gato ${this.nombre} dice: ¡Miau Miau!`)

    }

    saltar(){

        console.log(`¡El Gato ${this.nombre} ha saltado!`)

    }
 
}