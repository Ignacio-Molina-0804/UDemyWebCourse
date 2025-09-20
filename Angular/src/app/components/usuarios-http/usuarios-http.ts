import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-usuarios-http',
  imports: [],
  templateUrl: './usuarios-http.html',
  styleUrl: './usuarios-http.css',
})
export class UsuariosHTTP {
  public listadoDeUsuarios: any;

  constructor(private _usuarioService: UsuarioService) {
    console.log('Componente de Usuarios Cargado!!');
  }

  ngOnInit() {
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
        }
      }
    );
  }
}
