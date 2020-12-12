import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-email',
  templateUrl: './formulario-grupo-email.component.html',
  styleUrls: ['./formulario-grupo-email.component.css']
})
export class FormularioGrupoEmailComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() email:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
