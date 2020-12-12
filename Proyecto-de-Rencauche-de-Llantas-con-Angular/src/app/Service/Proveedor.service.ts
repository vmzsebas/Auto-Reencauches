import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../Modelo/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private httpClient: HttpClient) { }

  clienteURL='http://localhost:8080/formulario-admin-proveedor/';
  
  public listar_proveedor(): Observable<Proveedor[]>{
    return this.httpClient.get<Proveedor[]>(this.clienteURL + "listar-proveedor");
  }

  public detalle_id(id: number): Observable<Proveedor>{
    return this.httpClient.get<Proveedor>(this.clienteURL + `detalle-id/${id}`);
  }

  public detalle_name(nombre: string): Observable<Proveedor>{
    return this.httpClient.get<Proveedor>(this.clienteURL + `detalle-name/${nombre}`);
  }
  
  public crear_proveedor(proveedor: Proveedor): Observable<any>{
    return this.httpClient.post<any>(this.clienteURL + 'crear-proveedor',proveedor);
  }

  public actualizar_proveedor(id: number, proveedor: Proveedor): Observable<any>{
    return this.httpClient.put<any>(this.clienteURL + `actualizar-proveedor/${id}`,proveedor);
  }
  
  public eliminar_proveedor(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.clienteURL + `eliminar-proveedor/${id}`);
  }
}
