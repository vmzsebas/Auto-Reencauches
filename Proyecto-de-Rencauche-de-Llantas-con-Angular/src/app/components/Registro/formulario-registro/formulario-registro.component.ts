import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/Modelo/Cliente';
import { IniciarSesion } from 'src/app/Modelo/IniciarSesion';
import { ClienteService } from 'src/app/Service/Cliente.service';
import { IniciarSesionService } from 'src/app/Service/IniciarSesion.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  usuarioPattern: any = /^[a-zA-Z0-9\_\-]{8,16}$/;
  nombrePattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  apellidoPattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  cedulaPattern: any = /^\d{1,10}$/;
  passwordPattern: any = /^.{8,18}$/;
  correoPattern: any = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  telefonoPattern: any = /^\d{1,10}$/;

  showMessage = '';
  mensajeV = '';

  registroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern(this.nombrePattern)]),
    apellido: new FormControl('', [Validators.required, Validators.pattern(this.apellidoPattern)]),
    cedula: new FormControl('', [Validators.required, Validators.pattern(this.cedulaPattern)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(this.telefonoPattern)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.correoPattern)]),
    usuario: new FormControl('', [Validators.required, Validators.pattern(this.usuarioPattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    repeat_password: new FormControl('', [Validators.required])
  });



  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private iniciarSesionService: IniciarSesionService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  crear_cliente(): void {
    const cliente = new Cliente(
      this.nombre.value, this.apellido.value,
      this.cedula.value, this.telefono.value, 
      this.email.value, this.usuario.value);
    this.clienteService.crear_cliente(cliente).subscribe(
      data => {
        this.crear_iniciarSesion(cliente);
      },
      err => {
        this.showMessage = '';
        this.showMessage = 'FALSE';
        this.mensajeV = err.error.mensaje;

        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 2100,
          positionClass: 'toast-top-center',
        });
      }
    )
  }


  crear_iniciarSesion(cliente: Cliente): void {
    const iniciarSesion = new IniciarSesion(
      cliente.cedula, this.usuario.value,
      this.password.value, this.repeat_password.value, "usuario", 0);
    this.iniciarSesionService.crear_iniciarSesion(iniciarSesion).subscribe(
      data => {
        this.toastr.success('El registro se ha realizado con exito.', 'OK', {
          timeOut: 2100,
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
          timeOut: 2100,
          positionClass: 'toast-top-center',
        });
      }
    )
  }

  reserField(): void {
    this.registroForm.get('nombre').reset();
    this.registroForm.get('apellido').reset();
    this.registroForm.get('cedula').reset();
    this.registroForm.get('telefono').reset();
    this.registroForm.get('email').reset();
    this.registroForm.get('usuario').reset();
    this.registroForm.get('password').reset();
    this.registroForm.get('repeat_password').reset();
  }

  onRegistrar() {
    console.log('form es Valido ->', this.registroForm.valid);
    if (this.registroForm.valid === true && this.password.value === this.repeat_password.value) {
      this.mensajeV = 'Formulario Enviado Exitosamente!';
      this.showMessage = 'TRUE';
      this.crear_cliente();

    } else {
      this.mensajeV = 'Por favor llenar el formulario correctamente.';
      this.showMessage = 'FALSE';

    }
  }

  formLogin() {
    this.router.navigate(["formulario-login"]);
  }

  validarMensaje() {
    console.log('MENSAJE -> ', this.showMessage)
    return this.showMessage
  }


  get nombre() { return this.registroForm.get('nombre') };
  get apellido() { return this.registroForm.get('apellido') };
  get cedula() { return this.registroForm.get('cedula') };
  get telefono() { return this.registroForm.get('telefono') };
  get email() { return this.registroForm.get('email') };
  get usuario() { return this.registroForm.get('usuario') };
  get password() { return this.registroForm.get('password') };
  get repeat_password() { return this.registroForm.get('repeat_password') };

}
