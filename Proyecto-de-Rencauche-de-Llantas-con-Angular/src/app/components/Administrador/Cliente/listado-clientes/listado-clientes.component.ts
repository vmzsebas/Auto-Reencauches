import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
import { Cliente } from 'src/app/Modelo/Cliente';
import { IniciarSesion } from 'src/app/Modelo/IniciarSesion';
import { ClienteService } from 'src/app/Service/Cliente.service';
import { IniciarSesionService } from 'src/app/Service/IniciarSesion.service';
import { VariableCliente } from './VariableCliente'
import { VariableInicioSesion } from './VariableInicioSesion';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {


  /*clientes: Cliente[] = [];

  cliente_1: Cliente;*/

  searchKey: string;

  clienteService1: ClienteService;
  iniciarSesionService1: IniciarSesionService;
  Vcli: VariableCliente = {
    clientes: null,
    cliente: null
  }

  Vinicio: VariableInicioSesion = {
    inicio_sesion: null
  }

  usuarioPattern: any = /^[a-zA-Z0-9\_\-]{8,16}$/;
  nombrePattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  apellidoPattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  cedulaPattern: any = /^\d{1,10}$/;
  passwordPattern: any = /^.{8,18}$/;
  correoPattern: any = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  telefonoPattern: any = /^\d{1,10}$/;

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

  listData: MatTableDataSource<Cliente>;
  displayedColumns = ['no', 'nombre', 'apellido', 'cedula', 'telefono', 'email', 'rol', 'usuario', 'password', 'repeat_password', 'actualizar', 'eliminar'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router1: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private iniciarSesionService: IniciarSesionService,
    private toastr: ToastrService) { 
      this.iniciarSesionService1 = iniciarSesionService;
      this.clienteService1 = clienteService;
    }

  ngOnInit(): void {
    this.cargarIniciarSesionCedula();
    this.cargarProductos();
  }

  enviarDatos(cliente: Cliente) {
    this.Vcli.cliente = cliente;

    this.registroForm.reset(
      {
        nombre: { value: '', disabled: false },
        apellido: { value: '', disabled: false },
        cedula: { value: '', disabled: true },
        telefono: { value: '', disabled: false },
        email: { value: '', disabled: false },
        usuario: { value: '', disabled: false },
        password: { value: '', disabled: false },
        repeat_password: { value: '', disabled: false },
      }
    )
    this.nombre.setValue(cliente.nombre)
    this.apellido.setValue(cliente.apellido)
    this.cedula.setValue(cliente.cedula)
    this.telefono.setValue(cliente.telefono)
    this.email.setValue(cliente.email)
    this.usuario.setValue(cliente.usuario)
    this.password.setValue(cliente.password)
    this.repeat_password.setValue(cliente.repeat_password)

  }

  eliminar(cliente: Cliente): void {
    this.clienteService.eliminar_cliente(cliente.id).subscribe(
      data => {
        this.toastr.success('Se ha eliminado correctamente.', 'OK', {
          timeOut: 2100,
          positionClass: 'toast-top-center'
        });
        this.cargarProductos();
        this.Vcli.cliente = null;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 2100,
          positionClass: 'toast-top-center',
        });
      }
    )
    this.cargarProductos;
  }

  /*cargarProductos(): void {
    var asteriscos1: string;
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
        this.listData = new MatTableDataSource(this.Vcli.clientes);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;

      },
      err => {
        console.log(err);
      }
    )
  }*/

  cargarProductos(): void {
    var asteriscos1: string;
    this.clienteService.listar_cliente1().subscribe(
      data => {
        this.Vcli.clientes = data;

        this.listData = new MatTableDataSource(this.Vcli.clientes);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;

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

  envioCliente(e){
    this.Vcli.clientes = e;
    this.listData = new MatTableDataSource(this.Vcli.clientes);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
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
