import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-eje-producto',
  templateUrl: './formulario-grupo-eje-producto.component.html',
  styleUrls: ['./formulario-grupo-eje-producto.component.css']
})
export class FormularioGrupoEjeProductoComponent implements OnInit {

  @Input() registroForm: FormGroup;
  @Input() eje_prod: FormControl;

  ejes: any[] = [
    { name: 'Direccional' },
    { name: 'Mixto' },
    { name: 'Traccion' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
