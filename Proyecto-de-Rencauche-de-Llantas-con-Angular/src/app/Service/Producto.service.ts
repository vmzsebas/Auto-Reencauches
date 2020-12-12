import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) { }

  productoURL = 'http://localhost:8080/formulario-admin-producto/';

  public listar_productos(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL + "listar-producto");
  }

  public crear_producto(producto:Producto): Observable<any>{
    return this.httpClient.post<any>(this.productoURL + 'crear-producto',producto)
  }
}
