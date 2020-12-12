import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-nombre',
  templateUrl: './formulario-grupo-nombre.component.html',
  styleUrls: ['./formulario-grupo-nombre.component.css']
})
export class FormularioGrupoNombreComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() nombre:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
