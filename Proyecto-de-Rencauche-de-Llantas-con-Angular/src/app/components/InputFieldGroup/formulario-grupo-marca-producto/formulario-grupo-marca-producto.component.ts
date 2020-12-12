import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-marca-producto',
  templateUrl: './formulario-grupo-marca-producto.component.html',
  styleUrls: ['./formulario-grupo-marca-producto.component.css']
})
export class FormularioGrupoMarcaProductoComponent implements OnInit {

  @Input() registroForm: FormGroup;
  @Input() marca: FormControl;

  seleccionItem: string = '';

  marcaa: any[] = [
    { name: 'Aurora' },
    { name: 'Goodyear' },
    { name: 'Laufenn' },
    { name: 'Pirelli' },
    { name: 'Steelmark' }
  ]

  constructor() { }
  
  ngOnInit(): void {
  }

}
