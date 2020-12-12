import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-vehiculo-producto',
  templateUrl: './formulario-grupo-vehiculo-producto.component.html',
  styleUrls: ['./formulario-grupo-vehiculo-producto.component.css']
})
export class FormularioGrupoVehiculoProductoComponent implements OnInit {

  @Input() registroForm: FormGroup;
  @Input() vehiculo: FormControl;
  
  vehiculos: any[]=[
    {name:'Camion Liviano'},
    {name:'Camion Pesado'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
