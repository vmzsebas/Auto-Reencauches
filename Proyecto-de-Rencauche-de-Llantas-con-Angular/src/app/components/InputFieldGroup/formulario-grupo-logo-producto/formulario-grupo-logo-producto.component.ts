import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-logo-producto',
  templateUrl: './formulario-grupo-logo-producto.component.html',
  styleUrls: ['./formulario-grupo-logo-producto.component.css']
})
export class FormularioGrupoLogoProductoComponent implements OnInit {

  @Input() registroForm:FormGroup;
  @Input() logo_prod:FormControl;

  fileToUpload: File = null

  constructor() { }

  fileInput(files: FileList){
    this.fileToUpload = files.item(0);
    this.logo_prod.setValue(files.item(0).name);
  }

  ngOnInit(): void {
  }

}
