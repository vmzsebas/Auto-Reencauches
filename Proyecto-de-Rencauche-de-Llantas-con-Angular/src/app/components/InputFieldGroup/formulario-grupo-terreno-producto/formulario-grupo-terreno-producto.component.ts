import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-terreno-producto',
  templateUrl: './formulario-grupo-terreno-producto.component.html',
  styleUrls: ['./formulario-grupo-terreno-producto.component.css']
})
export class FormularioGrupoTerrenoProductoComponent implements OnInit {

  @Input() registroForm: FormGroup;
  @Input() terreno_prod: FormControl;

  terrenos: any[] = [
    { name: 'Mixto' },
    { name: 'Regional' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
