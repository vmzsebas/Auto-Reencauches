import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Variable } from './variable_main';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Vmain: Variable = {
    tipoMenu: "INICIO",
    tipoMenuAux: "INICIO",
    tipoSubMenu: "INICIO",
    tipoSubMenuAux: "INICIO"
  }

  tipoMenuSelHtml() {
    var tip = this.Vmain.tipoMenu.trim()
    var tipSubMenu = this.Vmain.tipoSubMenu.trim()
    this.Vmain.tipoMenuAux = tip
    this.Vmain.tipoSubMenuAux = tipSubMenu
    
    if (tip == "INICIO" && tipSubMenu == "INICIO") {
      return "<span class='glyphicon glyphicon-home' aria-hidden='true'></span>"
    }

    if (tip == "TIENDA" && tipSubMenu == "TIENDA") {
      return "<img type='image/png' src='../../../../assets/img/tienda.png' width='35'>"
    }
    if (tip == "ACERCA DE NOSOTROS" && tipSubMenu == "ACERCA DE NOSOTROS") {
      return "<img type='image/png' src='../../../assets/img/sobre-nosotros.png' width='35'>"
    }
    if (tip == "CONTACTENOS" && tipSubMenu == "CONTACTENOS") {
      return "<span class='glyphicon glyphicon-earphone' aria-hidden='true'></span>"
    }

    if (tip == "REGISTRAR" && tipSubMenu == "REGISTRAR") {
      return "<span class='glyphicon glyphicon-user' aria-hidden='true'></span>"
    }

    if (tip == "INICIAR SESION" && tipSubMenu == "INICIAR SESION") {
      return "<span class='glyphicon glyphicon-log-in' aria-hidden='true'></span>"
    }
    if (tip == "CARRITO" && tipSubMenu == "CARRITO") {
      return "<span class='glyphicon glyphicon-shopping-cart' aria-hidden='true'></span>"
    }
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
