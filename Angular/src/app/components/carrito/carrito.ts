import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [FormsModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  nombreTienda: string = "Mi Tienda"
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

  addProducto(){

    this.cantidadProductos += 1;
    this.totalCarrito += 37;

    console.log(`Nuevo productor añadido, Precio total actual ${this.totalCarrito}`)

    this.comprobarNotificacion()

  }
}
