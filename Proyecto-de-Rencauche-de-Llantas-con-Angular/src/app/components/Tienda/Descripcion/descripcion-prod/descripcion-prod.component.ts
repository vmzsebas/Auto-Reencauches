import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  precio: string;

  constructor(private router: Router,
    private routeActive: ActivatedRoute) { }

  datos() {
    this.logo= this.routeActive.snapshot.params.logo;
    this.nombre = this.routeActive.snapshot.params.nombre;
    this.ancho = this.routeActive.snapshot.params.ancho;
    this.perfil = this.routeActive.snapshot.params.perfil;
    this.rin = this.routeActive.snapshot.params.rin;
    this.producto = this.routeActive.snapshot.params.producto;
    this.precio = this.routeActive.snapshot.params.precio;
  }

  ngOnInit(): void {
    this.datos();
  }

}
