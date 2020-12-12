import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-apellido',
  templateUrl: './formulario-grupo-apellido.component.html',
  styleUrls: ['./formulario-grupo-apellido.component.css']
})
export class FormularioGrupoApellidoComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() apellido:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
