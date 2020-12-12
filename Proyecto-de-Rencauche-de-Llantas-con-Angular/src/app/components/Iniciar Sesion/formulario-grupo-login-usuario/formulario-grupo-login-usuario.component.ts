import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-login-usuario',
  templateUrl: './formulario-grupo-login-usuario.component.html',
  styleUrls: ['./formulario-grupo-login-usuario.component.css']
})
export class FormularioGrupoLoginUsuarioComponent implements OnInit {

  constructor() { }

  @Input() loginForm:FormGroup;
  @Input() usuario:FormControl;

  ngOnInit(): void {
  }

}
