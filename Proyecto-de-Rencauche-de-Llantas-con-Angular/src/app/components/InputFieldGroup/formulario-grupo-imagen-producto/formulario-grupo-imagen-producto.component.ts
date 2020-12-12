import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo-imagen-producto',
  templateUrl: './formulario-grupo-imagen-producto.component.html',
  styleUrls: ['./formulario-grupo-imagen-producto.component.css']
})
export class FormularioGrupoImagenProductoComponent implements OnInit {

  @Input() registroForm: FormGroup;
  @Input() imagen_prod: FormControl;

  fileToUpload:File;
  constructor() { }

  fileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.imagen_prod.setValue(files.item(0).name);
  }

  ngOnInit(): void {
  }

}
