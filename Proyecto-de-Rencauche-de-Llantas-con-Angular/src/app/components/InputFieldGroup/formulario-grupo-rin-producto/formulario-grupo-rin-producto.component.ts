import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-rin-producto',
  templateUrl: './formulario-grupo-rin-producto.component.html',
  styleUrls: ['./formulario-grupo-rin-producto.component.css']
})
export class FormularioGrupoRinProductoComponent implements OnInit {

  @Input() registroForm: FormGroup;
  @Input() rin_prod: FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
