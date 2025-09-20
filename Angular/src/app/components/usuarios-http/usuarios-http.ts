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
    this._usuarioService.getUsers().subscribe(
      data => {
        this.listadoDeUsuarios = data;
        console.log(this.listadoDeUsuarios.data);
      }
    );
  }
}
