import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // URL base de la API
  public apiURL: string = 'https://reqres.in';

  constructor(private http: HttpClient) {}

  getUsers() {
    console.log('Servicio de usuarios cargado!!');
    return this.http.get(`${this.apiURL}/api/users?page=2`);
  }
}
