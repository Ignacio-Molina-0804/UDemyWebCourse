import { Component, signal } from '@angular/core';
import { Usuario } from './components/usuario/usuario';
import { Ventas } from './components/ventas/ventas';
import { Pelicula } from './components/pelicula/pelicula';
import { config } from './models/config'

@Component({
  selector: 'app-root',
  imports: [Ventas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = config.title;
  description = config.descripcion;

}
 