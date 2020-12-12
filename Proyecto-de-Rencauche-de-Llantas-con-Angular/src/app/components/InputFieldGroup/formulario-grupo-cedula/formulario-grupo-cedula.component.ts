import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-cedula',
  templateUrl: './formulario-grupo-cedula.component.html',
  styleUrls: ['./formulario-grupo-cedula.component.css']
})
export class FormularioGrupoCedulaComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() cedula:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
