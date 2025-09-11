import { Component } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { Pelicula } from '../pelicula/pelicula';
import { Ventas } from '../ventas/ventas';

@Component({
  selector: 'miProducto',
  imports: [Usuario, Pelicula, Ventas],
  templateUrl: 'producto.component.html',
  styleUrl: 'producto.component.css',
})
export class ProductoComponent {
  public nombreDelProducto: string;
  public marca: string;
  public descripcion: string;
  public precio: number;

  constructor() {
    this.nombreDelProducto = 'Pc Portatil';
    this.descripcion = 'Mi producto es una computadora muy potente.';
    this.marca = 'Asus';
    this.precio = 190000;

    console.log('Se ha cargado el componente de productos!');
    alert('Holaa');
  }
}
