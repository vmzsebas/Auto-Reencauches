import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-tipo-producto',
  templateUrl: './formulario-grupo-tipo-producto.component.html',
  styleUrls: ['./formulario-grupo-tipo-producto.component.css']
})
export class FormularioGrupoTipoProductoComponent implements OnInit {

  @Input() registroForm: FormGroup;
  @Input() tipo_prod: FormControl;

  tipos: any[] = [
    { name: 'Nuevo' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
