import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-usuario',
  templateUrl: './formulario-grupo-usuario.component.html',
  styleUrls: ['./formulario-grupo-usuario.component.css']
})
export class FormularioGrupoUsuarioComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() usuario:FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
