import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoService } from 'src/app/Service/Producto.service';

@Component({
  selector: 'app-tiendaproductos',
  templateUrl: './tiendaproductos.component.html',
  styleUrls: ['./tiendaproductos.component.css']
})
export class TiendaproductosComponent implements OnInit {

  activar: boolean = true;
  constructor(private productoService: ProductoService) { }
  productos: Producto[] = null;
  cantidadProductos: number = 0;
  cantidadFilas() {

    return false;
  }

  cargarProductos(): void {
    this.productoService.listar_productos().subscribe(
      data => {
        this.productos = data;
        this.cantidadProductos = (this.productos.length / 3);
        if (this.cantidadProductos - (Math.floor(this.cantidadProductos)) != 0) {
          this.cantidadProductos = (Math.trunc(this.cantidadProductos)) + 1;
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  llamarMetodos() {
    console.log("Vamos aver: ");
    return true;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.cargarProductos();
  }

}
