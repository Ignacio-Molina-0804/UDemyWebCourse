import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularios-reactivos',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formularios-reactivos.html',
  styleUrl: './formularios-reactivos.css'
})
export class FormulariosReactivos {

  formulario = new FormGroup({

    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    email: new FormControl('', [Validators.required, Validators.email]),
    edad: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  })

  onSubmit(){

    if(this.formulario.valid){

      console.info("Formulario esta enviado: ", this.formulario.value)

    } else {

      console.warn("Formulario no válido");

    }

  }

}
