import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-peso-unidad-producto',
  templateUrl: './formulario-grupo-peso-unidad-producto.component.html',
  styleUrls: ['./formulario-grupo-peso-unidad-producto.component.css']
})
export class FormularioGrupoPesoUnidadProductoComponent implements OnInit {

  @Input() registroForm: FormGroup;
  @Input() peso_unidad: FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
