// Componentes Creados con el comango "ng generate component (Nombre del componente) / ng g c (Nombre del componente)"

import { Component } from '@angular/core';
import { Ventas } from '../ventas/ventas';
import { ProductoComponent } from '../producto/producto.component';
import { UpperCasePipe, LowerCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [Ventas, ProductoComponent, LowerCasePipe, UpperCasePipe, DatePipe],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  web = 'https://google.com';
  redirigir = false;

  marcasPaddel = [
    "Siux", "Kombat", "Bullpadel", "Head", "Adidas", "Starvite"
  ];

  marcasPaddelObjeto = [
    {id:1, nombre:"Siux"},
    {id:2, nombre:"Kombat"},
    {id:3, nombre:"Bullpadel"},
    {id:4, nombre:"Head"},
    {id:5, nombre:"Adidas"},
    {id:6, nombre:"Starvite"}
  ]

  usuario = {

    id: 1,
    nombre: "Ignacio Molina",
    nick: "NachitoMolina",
    rol: "admin"

  };

  cambioRedireccion() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
