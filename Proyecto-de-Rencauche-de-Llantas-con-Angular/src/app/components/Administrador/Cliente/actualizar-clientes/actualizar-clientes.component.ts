import { Component, OnInit, NgModule, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/Modelo/Cliente';
import { IniciarSesion } from 'src/app/Modelo/IniciarSesion';
import { ClienteService } from 'src/app/Service/Cliente.service';
import { IniciarSesionService } from 'src/app/Service/IniciarSesion.service';
import { VariableCliente } from '../listado-clientes/VariableCliente';
import { VariableInicioSesion } from '../listado-clientes/VariableInicioSesion';

let clientes: Cliente[] = null;

@Component({
  selector: 'app-actualizar-clientes',
  templateUrl: './actualizar-clientes.component.html',
  styleUrls: ['./actualizar-clientes.component.css']
})
export class ActualizarClientesComponent implements OnInit {

  @Input() registroForm: FormControl;
  @Input() Vcli: VariableCliente = {
    clientes: null,
    cliente: null
  };
  @Input() Vinicio: VariableInicioSesion;
  @Output() envioClientes = new EventEmitter<Cliente[]>()

  displayedColumns = ['no', 'nombre', 'apellido', 'cedula', 'telefono', 'email', 'rol', 'usuario', 'password', 'repeat_password', 'actualizar', 'eliminar'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  showMessage = '';
  mensajeV = '';



  cargarProductos(): void {
    var asteriscos1:string='';
    this.clienteService.listar_cliente().subscribe(
      data => {
        this.Vcli.clientes = data;
        for (let index = 0; index < this.Vcli.clientes.length; index++) {
          const element = this.Vcli.clientes[index];
          for (let indexx = 0; indexx < this.Vinicio.inicio_sesion.length; indexx++) {
            const element1 = this.Vinicio.inicio_sesion[indexx];
            if (element.cedula == element1.cedula) {
              this.Vcli.clientes[index].rol = element1.rol;
              this.Vcli.clientes[index].usuario = element1.usuario
              asteriscos1 = this.cargarContraseñaAsteriscos(element1.password);
              this.Vcli.clientes[index].password = asteriscos1;
              this.Vcli.clientes[index].repeat_password = asteriscos1
              break;
            }

          }
        }

        this.envioClientes.emit(this.Vcli.clientes);
      },
      err => {
        console.log(err);
      }
    )
  }
  cargarIniciarSesionCedula(): void {

    this.iniciarSesionService.listar_iniciarSesion().subscribe(
      data => {
        this.Vinicio.inicio_sesion = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  cargarContraseñaAsteriscos(password: string): string {
    var asteriscos: string = '';
    for (let index = 1; index <= password.length; index++) {
      if (index <= password.length) {
        asteriscos = '*' + asteriscos;
      }
    }
    return asteriscos;
  }

  actualizar_cliente(): void {
    const cliente = new Cliente(
      this.nombre.value, this.apellido.value,
      this.cedula.value, this.telefono.value,
      this.email.value, this.usuario.value);

    this.clienteService.actualizar_cliente(this.Vcli.cliente.id, cliente).subscribe(
      data => {
        for (let index = 0; index < this.Vinicio.inicio_sesion.length; index++) {
          const element = this.Vinicio.inicio_sesion[index];
          if (cliente.cedula == element.cedula) {
            this.actualizar_iniciarSesion(this.Vcli.cliente.id);
            break;
          }
        }

        this.cargarIniciarSesionCedula();
        this.cargarProductos();
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


  actualizar_iniciarSesion(id: number): void {
    const iniciarSesion = new IniciarSesion(
      this.cedula.value, this.usuario.value, this.password.value,
      this.repeat_password.value, "", 0);

    this.iniciarSesionService.actualizar_iniciar_sesion(id, iniciarSesion).subscribe(
      data => {
        this.toastr.success('Se han actualizado los campos correctamente.', 'OK', {
          timeOut: 2100,
          positionClass: 'toast-top-center'
        });
        this.reserField();
        this.showMessage = '';
        this.mensajeV = '';
        this.cargarIniciarSesionCedula();
        this.cargarProductos();
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
    this.registroForm.reset(
      {
        nombre: { value: '', disabled: true },
        apellido: { value: '', disabled: true },
        cedula: { value: '', disabled: true },
        telefono: { value: '', disabled: true },
        email: { value: '', disabled: true },
        usuario: { value: '', disabled: true },
        password: { value: '', disabled: true },
        repeat_password: { value: '', disabled: true },
      }
    )
  }

  onUpdate() {
    console.log('form es Valido ->', this.registroForm.valid);
    if (this.registroForm.valid === true && this.password.value === this.repeat_password.value) {
      this.mensajeV = 'Formulario Enviado Exitosamente!';
      this.showMessage = 'TRUE';
      this.actualizar_cliente();
    } else {
      this.mensajeV = 'Por favor llenar el formulario correctamente.';
      this.showMessage = 'FALSE';

    }

  }

  cerrarFormulario(): void {
    this.Vcli.cliente = null;
  }

  vecesClickBoton = 0;
  validarClickBoton(): void {
    if (this.vecesClickBoton == 0) {
      this.vecesClickBoton++;
    } else {
      this.vecesClickBoton--;
    }

  }

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private iniciarSesionService: IniciarSesionService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
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
