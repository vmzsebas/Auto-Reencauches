import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-nit',
  templateUrl: './formulario-grupo-nit.component.html',
  styleUrls: ['./formulario-grupo-nit.component.css']
})
export class FormularioGrupoNitComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() nit:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
