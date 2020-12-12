import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/Modelo/Proveedor';
import { ProveedorService } from 'src/app/Service/Proveedor.service';

@Component({
  selector: 'app-formulario-registro-proveedor',
  templateUrl: './formulario-registro-proveedor.component.html',
  styleUrls: ['./formulario-registro-proveedor.component.css']
})
export class FormularioRegistroProveedorComponent implements OnInit {

  nitPattern: any = /^[0-9\-]{1,100}$/;
  nombrePattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  telefonoPattern: any = /^\d{1,10}$/;
  direccionPattern: any =/^[a-zA-Z0-9À-ÿ\s\-]{1,100}$/;

  showMessage = '';
  mensajeV = '';
  registroForm = new FormGroup({
    nit: new FormControl('', [Validators.required, Validators.pattern(this.nitPattern)]),
    nombre: new FormControl('', [Validators.required, Validators.pattern(this.nombrePattern)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(this.telefonoPattern)]),
    direccion: new FormControl('', [Validators.required, Validators.pattern(this.direccionPattern)])
  });


  constructor(private router: Router,
    private proveedorService: ProveedorService,
    private toastr: ToastrService) { }

  crear_proveedor(): void {
    const proveedor = new Proveedor(
      this.nit.value, this.nombre.value,
       this.telefono.value, this.direccion.value);

    this.proveedorService.crear_proveedor(proveedor).subscribe(
      data => {
        this.toastr.success('El registro se ha realizado con exito.', 'OK', {
          timeOut: 2300, 
          positionClass: 'toast-top-center'
        });
        this.reserField();
        this.showMessage = '';
        this.mensajeV = '';
      },
      err => {
        this.showMessage = '';
        this.showMessage = 'FALSE';
        this.mensajeV = err.error.mensaje;

        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 2300, 
          positionClass: 'toast-top-center',
        });
      }
    )
  }

  reserField(): void {
    this.registroForm.get('nit').reset();
    this.registroForm.get('nombre').reset()
    this.registroForm.get('telefono').reset();
    this.registroForm.get('direccion').reset();
  }

  onRegistrar() {
    console.log('form es Valido ->', this.registroForm.valid);
    if (this.registroForm.valid === true) {
      this.mensajeV = 'Formulario Enviado Exitosamente!';
      this.showMessage = 'TRUE';
      this.crear_proveedor();
      
    } else {
      this.mensajeV = 'Por favor llenar el formulario correctamente.';
      this.showMessage = 'FALSE';

    }
  }

  validarMensaje() {
    console.log('MENSAJE -> ', this.showMessage)
    return this.showMessage
  }

  ngOnInit(): void {
  }

  get nit() { return this.registroForm.get('nit')};
  get nombre() { return this.registroForm.get('nombre') };
  get telefono() { return this.registroForm.get('telefono') };
  get direccion() { return this.registroForm.get('direccion') };

}
