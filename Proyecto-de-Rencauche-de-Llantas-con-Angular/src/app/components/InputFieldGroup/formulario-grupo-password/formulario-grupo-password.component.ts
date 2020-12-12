import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-password',
  templateUrl: './formulario-grupo-password.component.html',
  styleUrls: ['./formulario-grupo-password.component.css']
})
export class FormularioGrupoPasswordComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() password:FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
