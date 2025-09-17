import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  cantidadProductos: number = 0;
  totalCarrito: number = 0;
  notificacion: string = '';

  ngOnInit(){
    this.comprobarNotificacion();
  }

  ngDoCheck(){

    console.log("Comprobando dom del componente")

  }

  comprobarNotificacion() {
    let limitePrecio = 177;

    if (this.totalCarrito > limitePrecio) {
      this.notificacion = `¡Has llegado al precio de ${limitePrecio} euros!`;
    } else {
      this.notificacion = '';
    }
  }
}
