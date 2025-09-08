// Declaracion de Funcion

function getNombre(miNombre:string = "Ignacio"):string{

    return "Mi Nombre es " + miNombre;

}

getNombre("Juan")

// Funcion Anonima

let miFuncion = (parametro:string):number => {

    return parseInt(parametro)

}