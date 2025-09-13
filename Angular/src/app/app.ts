import { Component, signal } from '@angular/core';
import { Usuario } from './usuario/usuario';
import { Pelicula } from "./pelicula/pelicula";
import { Ventas } from './ventas/ventas';

@Component({
  selector: 'app-root',
  imports: [Ventas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi primer proyecto de Angular!');
}
 