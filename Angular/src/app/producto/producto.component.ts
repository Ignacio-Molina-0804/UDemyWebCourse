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

  // Hook que se ejecuta una vez se inicializo todo el contenido del componente
  ngOnInit() {
    console.log('El Componente esta inicializado');
  }

  // Hook que se ejecuta en el momento que el componente se actualiza
  cambiarNombre() {
    this.nombreDelProducto = 'Laptop Asus 177h';
  }

  ngDoCheck() {
    console.log('Componente Actualizado');
  }
}
