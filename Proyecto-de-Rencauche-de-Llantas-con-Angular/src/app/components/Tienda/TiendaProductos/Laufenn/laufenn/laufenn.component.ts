import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laufenn',
  templateUrl: './laufenn.component.html',
  styleUrls: ['./laufenn.component.css']
})
export class LaufennComponent implements OnInit {

  logo: string;
  nombre: string;
  ancho: string;
  perfil: number;
  rin: string;
  producto: string;
  precio: string;

  constructor(private router:Router) {
    this.logo = "../../../../../assets/img/Tienda/Logos/LAUFENN.png";
    this.nombre = "LF21";
    this.ancho = "250/"
    this.perfil = 9
    this.rin = "R17.5";
    this.producto = "../../../../../assets/img/Tienda/Imagen_productos/Laufenn/LLANTA_LAUFENN.png";
    this.precio = "$612.000";
  }
  descripcionProd() {
    this.router.navigate(["/descripcion-producto",this.logo,this.nombre,this.ancho,this.perfil,this.rin,this.producto,this.precio]);
  }
  ngOnInit(): void {
  }

}
