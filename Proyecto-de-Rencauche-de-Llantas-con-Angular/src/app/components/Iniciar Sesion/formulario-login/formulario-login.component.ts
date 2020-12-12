import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IniciarSesionService } from 'src/app/Service/IniciarSesion.service';
@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  usuarioPattern: any = /^[a-zA-Z0-9\_\-]{8,16}$/;
  passwordPattern: any = /^.{8,18}$/;

  showMessage = '';
  mensajeV = '';

  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.pattern(this.usuarioPattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)])
  });


  constructor(private router: Router,
    private iniciarSesionService: IniciarSesionService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Sesion(): void {

    this.iniciarSesionService.listar_iniciarSesion().subscribe(

      data => {
        data.forEach(element => {
          if (element.usuario == this.usuario.value) {
            if (element.password == this.password.value) {
              this.showMessage = 'TRUE';
              this.mensajeV = 'Has iniciado sesion satisfactoriamente.';
              this.toastr.success('Has iniciado sesion satisfactoriamente.', 'Ok', {
                timeOut: 2100,
                positionClass: 'toast-top-center'
              });
            } else {
              this.showMessage = 'FALSE';
              this.mensajeV = 'La contraseña que estas ingresando no esta registrada.';
              this.toastr.error('La contraseña que estas ingresando no esta registrada.', 'Fail', {
                timeOut: 2100,
                positionClass: 'toast-top-center'
              });
            }
          } else {
            this.showMessage = 'FALSE';
            this.mensajeV = 'El usuario que estas ingresando no esta registrado.';
            this.toastr.error('El usuario que estas ingresando no esta registrado.', 'Fail', {
              timeOut: 2100,
              positionClass: 'toast-top-center'
            });
          }
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
    this.loginForm.get('usuario').reset();
    this.loginForm.get('password').reset();
  }

  onSesion() {
    if (this.loginForm.valid === true) {
      this.mensajeV = 'Formulario Enviado Exitosamente!';
      this.showMessage = 'TRUE';
      this.Sesion();
    } else {
      this.mensajeV = 'Por favor llenar el formulario correctamente.';
      this.showMessage = 'FALSE';
    }
  }

  validarMensaje() {
    console.log('MENSAJE -> ', this.showMessage)
    return this.showMessage
  }

  formRegistrar() {
    this.router.navigate(["formulario-registro"]);
  }

  get usuario() { return this.loginForm.get('usuario') };
  get password() { return this.loginForm.get('password') };

}
