import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Modelo/Cliente';
import { IniciarSesion } from '../Modelo/IniciarSesion';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  clienteURL='http://localhost:8080/formulario-admin-cliente/';
  
  public listar_cliente(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.clienteURL + "listar-cliente");
  }

  public listar_cliente1(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.clienteURL + "listar-cliente-1");
  }

  public listar_clientePaginacion(pagina: number, tamaño: number, order: string, asc: boolean): Observable<any>{
    return this.httpClient.get<any>(this.clienteURL + 'listar-clientePaginacion?'+`pagina=${pagina}&tamaño=${tamaño}&order=${order}&asc=${asc}`)
  }

  public detalle_id(id: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(this.clienteURL + `detalle-id/${id}`);
  }

  public detalle_name(nombre: string): Observable<Cliente>{
    return this.httpClient.get<Cliente>(this.clienteURL + `detalle-name/${nombre}`);
  }

  public crear_cliente(cliente: Cliente): Observable<any>{
    return this.httpClient.post<any>(this.clienteURL + 'crear-cliente',cliente);
  }
  
  public actualizar_cliente(id: number, cliente: Cliente): Observable<any>{
    return this.httpClient.put<any>(this.clienteURL + `actualizar-cliente/${id}`,cliente);
  }
  
  public eliminar_cliente(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.clienteURL + `eliminar-cliente/${id}`);
  }   
}
