import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoService } from 'src/app/Service/Producto.service';

@Component({
  selector: 'app-tiendaproductos',
  templateUrl: './tiendaproductos.component.html',
  styleUrls: ['./tiendaproductos.component.css']
})
export class TiendaproductosComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
