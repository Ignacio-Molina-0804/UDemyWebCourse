import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { PeliculaService } from '../../service/pelicula.service';

@Component({
  selector: 'app-cine',
  imports: [FormsModule, NgStyle],
  providers: [PeliculaService],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {
  public titulo: string;
  public peliculas: Array<Pelicula>;

  public mi_pelicula: string = '';
  public pelisSinDatos: string[] = [];

  public color: string = "#FFFFFF"

  constructor(private peliculaService: PeliculaService) {

    this.titulo = 'Modelos';

    this.peliculas = this.peliculaService.getPeliculas();

  }

  ngOnInit() {
    console.log(this.peliculas);

    this.peliculas[1].titulo = 'ET, El marciano';

    this.peliculaService.saludoServicio()
  }

  ngDoCheck() {
    console.log(this.mi_pelicula);
  }

  showPelicula() {
    alert(this.mi_pelicula);
  }

  addPelicula() {
    this.pelisSinDatos.push(this.mi_pelicula)
  }

  addPeliculaPrincipal() {
    let identificador = this.peliculas[this.peliculas.length-1].id + 1;
    let nuevaPelicula = new Pelicula(identificador, this.mi_pelicula);

    console.log(nuevaPelicula)

    this.peliculas.push(nuevaPelicula);
  }

  borrarPeli(indice:number) {
    this.peliculas.splice(indice, 1)
  }

  haciendoFoco(){

    console.warn("Estas Haciendo Foco")

  }

  saliendoDelFoco(){

    console.warn("Dejaste de Hacer Foco")

  }

  pulsandoTeclas(evento: KeyboardEvent){

    console.info("Estas pulsando la tecla: "+ evento.key +"!!")

  }
}
