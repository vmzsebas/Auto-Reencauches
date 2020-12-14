import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-steelmark',
  templateUrl: './steelmark.component.html',
  styleUrls: ['./steelmark.component.css']
})
export class SteelmarkComponent implements OnInit {
  logo: string;
  nombre:string;
  ancho:string;
  perfil:number;
  rin: string;
  producto: string;
  precio:string;

  constructor(private router: Router) { 
    this.logo = "../../../../../assets/img/Tienda/Logos/STEELMARK.png"
    this.nombre="AHS";
    this.ancho="215/";
    this.perfil=75;
    this.rin ="R17.5";
    this.producto="../../../../../assets/img/Tienda/Imagen_productos/Steelmark/LLANTA_STEELMARK.png"
    this.precio="$596.000";
  }

  descripcionProd() {
    this.router.navigate(["/descripcion-producto",this.logo,this.nombre,this.ancho,this.perfil,this.rin,this.producto,this.precio]);
  }

  ngOnInit(): void {
  }

}
