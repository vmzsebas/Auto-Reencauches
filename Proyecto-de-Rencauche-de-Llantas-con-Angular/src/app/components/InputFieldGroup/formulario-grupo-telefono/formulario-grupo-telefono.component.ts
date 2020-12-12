import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-telefono',
  templateUrl: './formulario-grupo-telefono.component.html',
  styleUrls: ['./formulario-grupo-telefono.component.css']
})
export class FormularioGrupoTelefonoComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() telefono:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
