// Componentes Creados con el comango "ng generate component (Nombre del componente) / ng g c (Nombre del componente)"

import { Component } from '@angular/core';
import { Pelicula } from '../pelicula/pelicula';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-ventas',
  imports: [NgClass, NgStyle],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas {
  public colorear: boolean = true;

  public misEstilos = {
    'background-color': 'blue',
    'font.size': '20px',
    'border-radius': '40px',
    padding: '10px',
    color: 'white',
  };
}
