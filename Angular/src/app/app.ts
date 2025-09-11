import { Component, signal } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';

@Component({
  selector: 'app-root',
  imports: [ProductoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi primer proyecto de Angular!');
}
