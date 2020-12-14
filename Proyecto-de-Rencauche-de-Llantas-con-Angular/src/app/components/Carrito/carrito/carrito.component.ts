import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/Service/Producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  logo: string;
  nombre: string;
  ancho: string;
  perfil: number;
  rin: string;
  producto: string;
  precioCad: string;
  precio: number;
  total: number = 0;
  subtotal: number;
  cantidad: number;
  cantidad_rest: number;
  ocultar: boolean;

  constructor(private router: Router,
    private routeActive: ActivatedRoute,
    private productoService: ProductoService,
    private toastr: ToastrService) { }

  datos() {
    this.logo = this.routeActive.snapshot.params.logo;
    this.nombre = this.routeActive.snapshot.params.nombre;
    this.ancho = this.routeActive.snapshot.params.ancho;
    this.perfil = this.routeActive.snapshot.params.perfil;
    this.rin = this.routeActive.snapshot.params.rin;
    this.producto = this.routeActive.snapshot.params.producto;
    this.precioCad = this.routeActive.snapshot.params.precio;
    this.precio = parseInt(this.precioCad.split("$")[1])
    this.subtotal = this.routeActive.snapshot.params.subtotal;
    this.cantidad = this.routeActive.snapshot.params.cantidad;
    this.cantidad_rest = this.routeActive.snapshot.params.cantidadRest;
    this.total = this.subtotal + this.total;
    this.ocultar = true;

  }

  actualizarCantidadExistente(): void {


    this.productoService.actualizar_cantidad_prod(this.cantidad_rest, this.nombre).subscribe(
      data => {
        this.toastr.success('Se han finalizado con exito la compra.', 'OK', {
          timeOut: 2100,
          positionClass: 'toast-top-center'
        });
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 2100,
          positionClass: 'toast-top-center',
        });
      }
    )
  }


  finalizarCompra() {
    if (this.ocultar != false) {
      this.actualizarCantidadExistente();
      this.ocultar=false;
    }


  }



  desactivar() {
    this.ocultar = false;
  }


  ngOnInit(): void {
    this.datos();
  }

}
