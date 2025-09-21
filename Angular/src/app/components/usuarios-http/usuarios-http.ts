import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios-http',
  imports: [FormsModule],
  templateUrl: './usuarios-http.html',
  styleUrl: './usuarios-http.css',
})
export class UsuariosHTTP {
  public listadoDeUsuarios: any;
  public usuarioIndividual: any;
  public usuarioId: string = "1";

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

  buscarUsuario(){
    this._usuarioService.getUser(parseInt(this.usuarioId || '1')).subscribe({
      next: (resultado: any) => {
        this.usuarioIndividual = resultado.data;
      },
      error: (error) => console.log(error),
      complete: () => console.log('¡Operación terminada!')
    })
  }
}
