import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-repeat-password',
  templateUrl: './formulario-grupo-repeat-password.component.html',
  styleUrls: ['./formulario-grupo-repeat-password.component.css']
})
export class FormularioGrupoRepeatPasswordComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() repeat_password:FormControl;
  @Input() password:FormControl;

  constructor() { }

  validarRepeatPassword() {
    console.log('jumm nose que sera -> ',this.password.value)
    if ((this.password.value === this.repeat_password.value)) {
      return "TRUE"
    } else {
      return "FALSE"
    }
  }
  ngOnInit(): void {
  }

}
