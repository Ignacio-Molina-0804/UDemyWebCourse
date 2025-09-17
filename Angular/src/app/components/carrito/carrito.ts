import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [FormsModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  nombreTienda: string = 'Mi Tienda';
  cantidadProductos: number = 0;
  totalCarrito: number = 0;
  notificacion: string = '';
  precioBase: number = 37;
  contadorLimiteCupon: number = 0;

  ngOnInit() {
    this.comprobarNotificacion();
  }

  ngDoCheck() {
    console.log('Comprobando dom del componente');
  }

  comprobarNotificacion() {
    let limitePrecio = 177;

    if (this.totalCarrito > limitePrecio) {
      this.notificacion = `¡Has llegado al precio de ${limitePrecio} euros!`;
    } else {
      this.notificacion = '';
    }
  }

  addProducto() {
    this.cantidadProductos += 1;
    this.totalCarrito += this.precioBase;

    console.log(`Nuevo producto añadido, Precio total actual ${this.totalCarrito}`);

    this.comprobarNotificacion();
  }

  addCincoProducto() {
    this.cantidadProductos += 5;
    this.totalCarrito += this.precioBase * 5;

    console.log(`Cinco nuevos producto añadidos, Precio total actual ${this.totalCarrito}`);

    this.comprobarNotificacion();
  }

  deleteProducto() {
    if (this.cantidadProductos >= 1) {
      this.cantidadProductos -= 1;
      this.totalCarrito -= this.precioBase;

      console.log(`1 Producto Eliminado, Precio total actual ${this.totalCarrito}`);

      this.comprobarNotificacion();
    }
  }

  vaciarCarrito() {
    this.cantidadProductos = 0;
    this.totalCarrito = 0;
    console.log(`Carrito Vaciado, Precio total actual ${this.totalCarrito}`);
    this.comprobarNotificacion();
  }

  descuento() {
    if (this.totalCarrito > 0 && this.contadorLimiteCupon <= 0) {
      this.contadorLimiteCupon = 1;
      this.totalCarrito *= 0.8;
      this.totalCarrito = parseFloat(this.totalCarrito.toFixed(2));

      console.log(`Descuento Aplicado, Precio total actual ${this.totalCarrito}`);
      this.comprobarNotificacion();
    }
  }
}
