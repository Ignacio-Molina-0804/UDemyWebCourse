import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cine',
  imports: [],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {
  public titulo: string;
  public peliculas: Array<Pelicula>;

  constructor() {
    this.titulo = 'Modelos';
    this.peliculas = [
      new Pelicula('El Padrino', 'Mafia', 'Coppola', 1976, 'prime', false),
      new Pelicula('Titanic', 'Romance', 'James Cameron', 1997, 'netflix', true),
      new Pelicula('Inception', 'Ciencia Ficción', 'Christopher Nolan', 2010, 'hbo', false),
      new Pelicula('Forrest Gump', 'Drama', 'Robert Zemeckis', 1994, 'disney+', true),
      new Pelicula('Gladiador', 'Acción', 'Ridley Scott', 2000, 'prime', false),
      new Pelicula('El Señor de los Anillos', 'Fantasía', 'Peter Jackson', 2001, 'netflix', true),
      new Pelicula('Matrix', 'Ciencia Ficción', 'Lana y Lilly Wachowski', 1999, 'hbo', false),
      new Pelicula('Avatar', 'Ciencia Ficción', 'James Cameron', 2009, 'disney+', true),
      new Pelicula('Joker', 'Drama', 'Todd Phillips', 2019, 'hbo', true),
      new Pelicula('Pulp Fiction', 'Crimen', 'Quentin Tarantino', 1994, 'prime', false),
      new Pelicula('Jurassic Park', 'Aventura', 'Steven Spielberg', 1993, 'netflix', true),
    ];
  }
}
