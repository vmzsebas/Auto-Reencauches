import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  precio:number;
  total: number=0;
  subtotal:number;
  cantidad:number;
  ocultar:boolean;

  constructor(private router: Router,
    private routeActive: ActivatedRoute) { }

  datos() {
    this.logo = this.routeActive.snapshot.params.logo;
    this.nombre = this.routeActive.snapshot.params.nombre;
    this.ancho = this.routeActive.snapshot.params.ancho;
    this.perfil = this.routeActive.snapshot.params.perfil;
    this.rin = this.routeActive.snapshot.params.rin;
    this.producto = this.routeActive.snapshot.params.producto;
    this.precioCad = this.routeActive.snapshot.params.precio;
    this.precio = parseInt(this.precioCad.split("$")[1])
    this.subtotal =  this.routeActive.snapshot.params.subtotal;
    this.cantidad =  this.routeActive.snapshot.params.cantidad;
    this.total = this.subtotal + this.total;
    this.ocultar= true;

  }

  desactivar(){
    this.total == null
    this.ocultar=false;
  }

  
  ngOnInit(): void {
    this.datos();
  }

}
