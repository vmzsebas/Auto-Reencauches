import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-descripcion-producto',
  templateUrl: './formulario-grupo-descripcion-producto.component.html',
  styleUrls: ['./formulario-grupo-descripcion-producto.component.css']
})
export class FormularioGrupoDescripcionProductoComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() descripcion_prod:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
