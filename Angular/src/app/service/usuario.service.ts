import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // URL base de la API
  private apiURL: string = 'https://reqres.in';

  private headers = new HttpHeaders({
    'x-api-key': 'reqres-free-v1',
  });

  constructor(private http: HttpClient) {}
  getUser(usuarioId: number) {
    return this.http.get(`${this.apiURL}/api/users/${usuarioId}`, { headers: this.headers });
  }

  getUsers() {
    return this.http.get(`${this.apiURL}/api/users?page=2`, { headers: this.headers });
  }

  createUser(usuario: any) {
    return this.http.post(`${this.apiURL}/api/users`, usuario, { headers: this.headers });
  }

}
