import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goodyear',
  templateUrl: './goodyear.component.html',
  styleUrls: ['./goodyear.component.css']
})
export class GoodyearComponent implements OnInit {

  logo: string;
  nombre:string;
  ancho:string;
  perfil:number;
  rin: string;
  producto: string;
  precio:string;


  constructor(private router:Router) {
    this.logo = "../../../../../assets/img/Tienda/Logos/GOODYEAR.png";
    this.nombre = "RHS II";
    this.ancho = "315/";
    this.perfil = 80;
    this.rin = "R22.5";
    this.producto = "../../../../../assets/img/Tienda/Imagen_productos/Goodyear/LLANTA_GOODYEAR.png";
    this.precio = "$1.879.000";
  }

  descripcionProd() {
    this.router.navigate(["/descripcion-producto",this.logo,this.nombre,this.ancho,this.perfil,this.rin,this.producto,this.precio]);
  }

  ngOnInit(): void {
  }

}
