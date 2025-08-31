// Programacion Orientada a Objetos (POO)

// Molde
class Gato {
  // Le podemos dar como un valor por defecto en nombre de esta manera
  constructor(nombre = "MishiMishi", raza, color) {
    // Propiedades o atributos (Caracteristicas)
    this.nombre = nombre;
    this.raza = raza;
    this.color = color;
  }

  // Metodos (Acciones)

  maullar() {
    console.log(`El Gato ${this.nombre} dice: ¡Miau Miau!`);
  }

  saltar() {
    console.log(`¡El Gato ${this.nombre} ha saltado!`);
  }

  // Get y Set con metodos normales
  getRaza() {
    return this.raza;
  }
  setRaza(raza) {
    this.raza = raza;
  }

  // Get y Set con las palabras reservadas de JavaScript
  get sacarColor() {
    return this.color;
  }
  set guardarColor(color) {
    this.color = color;
  }

  // Metodo Estatico
  // Se utiliza para llamarlo sin necesidad de crear un objeto
  static saludar(){
    alert("Hola Amigo, que tal estas?")
  }
}

// Creacion de objeto con los atributos necesarios
let miGato = new Gato("Pepe", "Pardo", "Marron");

// Setter y Getter de la raza con metodos habituales
miGato.setRaza("Huerfano")
console.log(miGato.getRaza());

// Setter y Getter con las palabras reservadas
miGato.guardarColor = "Negro"
console.log(miGato.sacarColor)

// Uso de Metodos
miGato.maullar();
miGato.saltar();

// Uso del Metodo Estatico
Gato.saludar();

// Herencia
// Hacemos un Extends para que se extiendan todas las propiedades y metodos que tenia la otra clase
class GatoEspecial extends Gato{

    constructor(nombre, raza, color, habilidad){

        // Super lo colocamos para poner los valores que vienen de la clase padre y asi cargarlos en el otro metodo
        super(nombre, raza, color)
        this.habilidad = habilidad

    }

    setHabilidad(habilidad){

        this.habilidad = habilidad

    }

    getHabilidad(){

        return this.habilidad

    }

    usarHabilidad(){

        console.log(`${this.nombre} esta utilizando su habilidad de "${this.habilidad}" para salvar a su dueño!!`)

    }

  }

  // Creacion Objeto
  let superGato = new GatoEspecial ("Juan", "Mestizo", "Blanco", "Super Excavacion")

  // Uso de metodo propio y metodo heredado
  superGato.usarHabilidad()
  superGato.saltar()