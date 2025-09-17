import { Component, computed, signal, effect } from '@angular/core';


@Component({
  selector: 'app-carrito-signals',
  imports: [],
  templateUrl: './carrito-signals.html',
  styleUrl: './carrito-signals.css'
})
export class CarritoSignals {

  nombreTienda = signal("Mi Tienda")
  cantidadProductos = signal(0)
  totalCarrito = signal(0)
  notificacion = signal("")
  
  precioBase: number = 37
  contadorLimiteCupon: number = 0

  constructor(){

    effect(() => {

      this.comprobarNotificacion()

    })

  }


  comprobarNotificacion() {
    console.log("Comprobando Notificacion")

    let limitePrecio = 177;

    if (this.totalCarrito() > limitePrecio) {
      this.notificacion.set(`¡Has llegado al precio de ${limitePrecio} euros!`);
    } else {
      this.notificacion.set("");
    }
  }

  addProducto() {
    this.cantidadProductos.update(cantidad => cantidad + 1);
    this.totalCarrito.update(total => total + this.precioBase);

    console.log(`Nuevo producto añadido, Precio total actual ${this.totalCarrito()}`);
  }

  addCincoProducto() {
    this.cantidadProductos += 5;
    this.totalCarrito += this.precioBase * 5;

    console.log(`Cinco nuevos producto añadidos, Precio total actual ${this.totalCarrito}`);
  }

  deleteProducto() {
    if (this.cantidadProductos >= 1) {
      this.cantidadProductos -= 1;
      this.totalCarrito -= this.precioBase;

      console.log(`1 Producto Eliminado, Precio total actual ${this.totalCarrito}`);
    }
  }

  vaciarCarrito() {
    this.cantidadProductos = 0;
    this.totalCarrito = 0;
    console.log(`Carrito Vaciado, Precio total actual ${this.totalCarrito}`);
  }

  descuento() {
    if (this.totalCarrito > 0 && this.contadorLimiteCupon <= 0) {
      this.contadorLimiteCupon = 1;
      this.totalCarrito *= 0.8;
      this.totalCarrito = parseFloat(this.totalCarrito.toFixed(2));

      console.log(`Descuento Aplicado, Precio total actual ${this.totalCarrito}`);
    }
  }

  /*

  contador = signal(0);
  incremento = signal(1);
  contadorX3 = computed(() => this.contador() * 3)

  aumentar(){

    // Forma de hacerlo con set (Sirve para reemplazar el valor actual)
    // this.contador.set(this.contador() + 1);

    // Forma de hacerlo con update (Sirve para actualizar el valor actual)
    this.contador.update(contadorActual => contadorActual + this.incremento())

  }

  ngOnInit(){

    console.log("La aplicacion a cargado!");

  }

  ngDoCheck(){

    console.log("Se ha detectado un cambio en el componente!");
    

  }

  */

}
