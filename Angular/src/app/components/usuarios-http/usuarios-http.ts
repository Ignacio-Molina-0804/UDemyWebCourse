import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-http',
  imports: [FormsModule],
  templateUrl: './usuarios-http.html',
  styleUrl: './usuarios-http.css',
})
export class UsuariosHTTP {
  public listadoDeUsuarios: any;
  public usuarioIndividual: any;
  public usuarioId: number = 1;

  constructor(private _usuarioService: UsuarioService, private route: ActivatedRoute) {
    console.log('Componente de Usuarios Cargado!!');
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      let id = params.get('id')

      this.usuarioId = parseInt(id ?? "8") 

      console.log(id)

    })

    this._usuarioService.getUsers().subscribe({
      next: (resultado) => {
        this.listadoDeUsuarios = resultado;
        console.log(this.listadoDeUsuarios.data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('¡Operación terminada!');
      },
    });
  }

  buscarUsuario() {
    this._usuarioService.getUser(this.usuarioId || 1).subscribe({
      next: (resultado: any) => {
        this.usuarioIndividual = resultado.data;
      },
      error: (error) => console.log(error),
      complete: () => console.log('¡Operación terminada!'),
    });
  }

  guardarUsuario() {
    let nuevoUsuario = {
      name: 'Nacho',
      job: 'Developer',
    };

    this._usuarioService.createUser(nuevoUsuario).subscribe(respuesta => {
      console.log("Usuario creado correctamente", respuesta);
    });
  }
}
