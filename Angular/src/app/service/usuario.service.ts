import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // URL base de la API
  private apiURL: string = 'https://reqres.in';

  constructor(private http: HttpClient) {}
  getUser(usuarioId: number) {
    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1'
    });

    return this.http.get(`${this.apiURL}/api/users/${usuarioId}`, { headers });
  }

  getUsers() {
    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1'
    });

    return this.http.get(`${this.apiURL}/api/users?page=2`, { headers });
  }
}
