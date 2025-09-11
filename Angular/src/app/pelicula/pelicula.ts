// Componentes Creados con el comango "ng generate component (Nombre del componente) / ng g c (Nombre del componente)"

import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css'
})
export class Pelicula {

  // Hook que se ejecuta la eliminar el componente

  ngOnInit(){

    console.log("El componente de Pelicula esta arrancado!!")

  }

  ngOnDestroy(){

    console.log("El componente de Pelicula ha sido borrado")

  }


}
