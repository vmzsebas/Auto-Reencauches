import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-precio-producto',
  templateUrl: './formulario-grupo-precio-producto.component.html',
  styleUrls: ['./formulario-grupo-precio-producto.component.css']
})
export class FormularioGrupoPrecioProductoComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() precio_prod:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
