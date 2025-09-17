import { Component, signal } from '@angular/core';
import { Signal } from '@angular/core';


@Component({
  selector: 'app-carrito-signals',
  imports: [],
  templateUrl: './carrito-signals.html',
  styleUrl: './carrito-signals.css'
})
export class CarritoSignals {

  contador = signal(0);

  aumentar(){

    // Forma de hacerlo con set (Sirve para reemplazar el valor actual)
    // this.contador.set(this.contador() + 1);

    // Forma de hacerlo con update (Sirve para actualizar el valor actual)
    this.contador.update(contadorActual => contadorActual + 1)

  }

  ngOnInit(){

    console.log("La aplicacion a cargado!");

  }

  ngDoCheck(){

    console.log("Se ha detectado un cambio en el componente!");
    

  }

}
