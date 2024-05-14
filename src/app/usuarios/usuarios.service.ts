import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosUrl?: string;

  constructor(private http: HttpClient) { 
    this.usuariosUrl = 'http://localhost:8080/api/assistme/usuarios';
  }

  public findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>( `${this.usuariosUrl}` );
  }

  public findCustom(query: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl + "/" +query);
  }

  public save(usuario: Usuario) : Observable<any> {
    console.log("Nombre de Usuario" + usuario.nombreUsuario);
    return this.http.post<Usuario>(`${this.usuariosUrl}`, usuario);
  }

  public updateUsuario(id: string, usuario: Usuario): Observable<any> {
    return this.http.put(`${this.usuariosUrl}/${id},${usuario}`, { responseType: 'text' });
  }

  public deleteUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.usuariosUrl}/${id}`, { responseType: 'text' });
  }

}
