import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-ancho-producto',
  templateUrl: './formulario-grupo-ancho-producto.component.html',
  styleUrls: ['./formulario-grupo-ancho-producto.component.css']
})
export class FormularioGrupoAnchoProductoComponent implements OnInit {

@Input() registroForm:FormGroup;
@Input() ancho_prod:FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
