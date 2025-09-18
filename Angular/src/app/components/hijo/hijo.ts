import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {

  nombreDelHijo: string = "Cristiano Ronaldo"
  @Input() elNombreDeMiPapa: string = "";

  @Output() saludoDelHijo = new EventEmitter()
  
  enviarSaludo(){

    this.saludoDelHijo.emit("Hola que tal estas papa?, Saludos :)")

  }

}
