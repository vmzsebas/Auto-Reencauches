import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { parse } from 'path';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoService } from 'src/app/Service/Producto.service';

@Component({
  selector: 'app-descripcion-prod',
  templateUrl: './descripcion-prod.component.html',
  styleUrls: ['./descripcion-prod.component.css']
})
export class DescripcionProdComponent implements OnInit {

  logo: string;
  nombre: string;
  ancho: string;
  perfil: number;
  rin: string;
  producto: string;
  precioCad: string;
  precio: number;
  subtotal: number;
  cantidadAux: number;
  cantidadVerd: boolean;
  showMessage = '';
  mensajeV = '';
  cantidadPatterm: any = /^\d{1,3}$/;
  productos: Producto[];
  registroForm = new FormGroup({
    cantidad: new FormControl('', [Validators.required, Validators.pattern(this.cantidadPatterm)])
  });

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
  }

  onAgregarCarrito() {
    this.saberCantidadExistente(this.nombre);
  }

  validarMensaje() {
    console.log('MENSAJE -> ', this.showMessage)
    return this.showMessage
  }

  saberCantidadExistente(nombre: string): void {
    this.productoService.listar_productos().subscribe(
      data => {
        this.productos = data;
        for (let index = 0; index < this.productos.length; index++) {
          const element = this.productos[index];
          if (nombre == element.nombre_prod) {
            if (this.cantidad != null) {
              this.cantidadAux = element.cantidad_ex_prod - this.cantidad.value;
              if (this.cantidadAux >= 0 && this.registroForm.valid && this.cantidad.value > 0) {
                this.cantidadVerd = true;
                this.precio = parseInt((this.precioCad.split("$")[1]), 10);
                this.subtotal = this.precio * this.cantidad.value;
                this.router.navigate(["/carrito/", this.logo, this.nombre, this.ancho, this.perfil, this.rin, this.producto, this.precioCad, this.subtotal, this.cantidad.value, this.cantidadAux]);
              } else {
                this.mensajeV = 'Por favor llenar la cantidad correctamente.';
                this.showMessage = 'FALSE'
                this.toastr.error('Cantidad no disponible.', 'OK', {
                  timeOut: 2100,
                  positionClass: 'toast-top-center'
                });

                this.cantidadVerd = false;
              }
            } else {
              this.mensajeV = 'Por favor llenar la cantidad correctamente.';
              this.showMessage = 'FALSE'
              this.toastr.error('Cantidad no disponible.', 'OK', {
                timeOut: 2100,
                positionClass: 'toast-top-center'
              });
              this.cantidadVerd = false;
            }
            break;
          }


        }
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
    this.datos();
    this.cantidad.setValue(1);
  }
  get cantidad() { return this.registroForm.get('cantidad') }
}
