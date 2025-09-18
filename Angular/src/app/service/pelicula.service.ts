import { Injectable } from "@angular/core";


// Servicio a nivel global en tu programa.
// @Injectable({
//     providedIn: "root"
// })

// Servicio a nivel individual en un componente utilizando los providers.
@Injectable()


export class PeliculaService{

    saludoServicio(){

        console.log("Hola desde el servicio")

    }

}