import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-login-password',
  templateUrl: './formulario-grupo-login-password.component.html',
  styleUrls: ['./formulario-grupo-login-password.component.css']
})
export class FormularioGrupoLoginPasswordComponent implements OnInit {

  @Input() loginForm:FormGroup;
  @Input() password:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
