import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() Vmain;
  
  inicio(){
    this.router.navigate(["/inicio"]);
  }
  tienda(){
    this.router.navigate(["/tienda"]);
  }
  aboutUs(){
    this.router.navigate(["/acerca-de-nosotros"]);
  }
  contactenos(){
    this.router.navigate(["/contactenos"]);
  }

  formRegistrar(){
    this.router.navigate(["/formulario-registro"]);
  }
  formLogin(){
    this.router.navigate(["/formulario-login"]);
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
