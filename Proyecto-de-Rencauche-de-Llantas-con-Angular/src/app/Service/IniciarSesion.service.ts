import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Modelo/Cliente';
import { IniciarSesion } from '../Modelo/IniciarSesion';

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionService {

  constructor(private httpClient: HttpClient) { }

  iniciarSesionURL = "http://localhost:8080/formulario-admin-iniciar-sesion/";

  public listar_iniciarSesion(): Observable<IniciarSesion[]>{
    return this.httpClient.get<IniciarSesion[]>(this.iniciarSesionURL + "listar-iniciar-sesion")
  }

  public crear_iniciarSesion(iniciarSesion: IniciarSesion): Observable<any>{
    return this.httpClient.post<any>(this.iniciarSesionURL+"crear-iniciar-sesion",iniciarSesion);
  }

  public actualizar_iniciar_sesion(cedula: number, iniciarSesion: IniciarSesion): Observable<any>{
    return this.httpClient.put<any>(this.iniciarSesionURL + `actualizar-iniciar-sesion/${cedula}`, iniciarSesion);
  }
}
