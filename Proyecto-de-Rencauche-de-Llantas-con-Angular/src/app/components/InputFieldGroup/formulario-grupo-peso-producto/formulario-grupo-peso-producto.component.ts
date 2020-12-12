import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-peso-producto',
  templateUrl: './formulario-grupo-peso-producto.component.html',
  styleUrls: ['./formulario-grupo-peso-producto.component.css']
})
export class FormularioGrupoPesoProductoComponent implements OnInit {

@Input() registroForm:FormGroup;
@Input() peso_prod:FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
