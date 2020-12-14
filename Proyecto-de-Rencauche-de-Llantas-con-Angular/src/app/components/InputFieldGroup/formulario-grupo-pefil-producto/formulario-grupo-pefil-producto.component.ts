import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-pefil-producto',
  templateUrl: './formulario-grupo-pefil-producto.component.html',
  styleUrls: ['./formulario-grupo-pefil-producto.component.css']
})
export class FormularioGrupoPefilProductoComponent implements OnInit {

@Input() registroForm:FormGroup;
@Input() perfil_prod:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
