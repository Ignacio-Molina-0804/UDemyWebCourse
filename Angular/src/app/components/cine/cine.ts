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
      new Pelicula(1, 'El Padrino', 'Mafia', 'Coppola', 1976, 'prime', false),
      new Pelicula(2, 'Titanic', 'Romance', 'James Cameron', 1997, 'netflix', true),
      new Pelicula(3, 'Inception', 'Ciencia Ficción', 'Christopher Nolan', 2010, 'hbo', false),
      new Pelicula(4, 'Forrest Gump', 'Drama', 'Robert Zemeckis', 1994, 'disney+', true),
      new Pelicula(5, 'Gladiador', 'Acción', 'Ridley Scott', 2000, 'prime', false),
      new Pelicula(6, 'El Señor de los Anillos', 'Fantasía', 'Peter Jackson', 2001, 'netflix', true),
      new Pelicula(7, 'Matrix', 'Ciencia Ficción', 'Lana y Lilly Wachowski', 1999, 'hbo', false),
      new Pelicula(8, 'Avatar', 'Ciencia Ficción', 'James Cameron', 2009, 'disney+', true),
      new Pelicula(9, 'Joker', 'Drama', 'Todd Phillips', 2019, 'hbo', true),
      new Pelicula(10, 'Pulp Fiction', 'Crimen', 'Quentin Tarantino', 1994, 'prime', false),
      new Pelicula(11, 'Jurassic Park', 'Aventura', 'Steven Spielberg', 1993, 'netflix', true),
    ];
  }

  ngOnInit(){

    console.log(this.peliculas)

    this.peliculas[1].titulo = "ET, El marciano"

  }
}
