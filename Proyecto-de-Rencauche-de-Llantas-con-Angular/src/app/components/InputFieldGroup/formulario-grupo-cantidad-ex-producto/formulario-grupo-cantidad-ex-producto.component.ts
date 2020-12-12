import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-cantidad-ex-producto',
  templateUrl: './formulario-grupo-cantidad-ex-producto.component.html',
  styleUrls: ['./formulario-grupo-cantidad-ex-producto.component.css']
})
export class FormularioGrupoCantidadExProductoComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() cantidad_ex_prod: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
