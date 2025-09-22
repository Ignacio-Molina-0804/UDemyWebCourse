import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  imports: [FormsModule],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css'
})
export class Formularios {

  nombre = ""
  email = ""
  edad = 0
  password = ""

  onSubmit() {
  
    console.log(this.nombre, this.email, this.edad, this.password)
  
  }

}
