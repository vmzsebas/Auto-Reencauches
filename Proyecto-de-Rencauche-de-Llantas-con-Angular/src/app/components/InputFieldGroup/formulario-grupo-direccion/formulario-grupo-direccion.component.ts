import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-direccion',
  templateUrl: './formulario-grupo-direccion.component.html',
  styleUrls: ['./formulario-grupo-direccion.component.css']
})
export class FormularioGrupoDireccionComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() direccion:FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
