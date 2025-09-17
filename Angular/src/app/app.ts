import { Component, signal } from '@angular/core';
import { Usuario } from './components/usuario/usuario';
import { Ventas } from './components/ventas/ventas';
import { Pelicula } from './components/pelicula/pelicula';
import { config } from './models/config'
import { Cine } from './components/cine/cine';
import { Carrito } from './components/carrito/carrito';

@Component({
  selector: 'app-root',
  imports: [Carrito],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = config.title;
  description = config.descripcion;

}
 