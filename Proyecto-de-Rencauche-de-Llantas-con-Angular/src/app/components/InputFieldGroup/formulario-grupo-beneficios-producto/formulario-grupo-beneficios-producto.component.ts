import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-beneficios-producto',
  templateUrl: './formulario-grupo-beneficios-producto.component.html',
  styleUrls: ['./formulario-grupo-beneficios-producto.component.css']
})
export class FormularioGrupoBeneficiosProductoComponent implements OnInit {

  @Input() registroForm: FormGroup;
  @Input() beneficios_prod: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
