import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Proveedor } from 'src/app/Modelo/Proveedor';
import { ProveedorService } from 'src/app/Service/Proveedor.service';
import { VariableProveedor } from './VariableProveedor'

@Component({
  selector: 'app-listado-proveedores',
  templateUrl: './listado-proveedores.component.html',
  styleUrls: ['./listado-proveedores.component.css']
})
export class ListadoProveedoresComponent implements OnInit {

  /*proveedores: Proveedor[] = [];*/

  /*proveedor_1: Proveedor;*/

  searchKey: string;

  Vprov: VariableProveedor = {
      proveedores: null,
      proveedor: null
  }

  nitPattern: any = /^[0-9\-]{1,100}$/;
  nombrePattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  telefonoPattern: any = /^\d{1,10}$/;
  direccionPattern: any = /^[a-zA-Z0-9À-ÿ\s\-]{1,100}$/;

  registroForm = new FormGroup({
    nit: new FormControl('', [Validators.required, Validators.pattern(this.nitPattern)]),
    nombre: new FormControl('', [Validators.required, Validators.pattern(this.nombrePattern)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(this.telefonoPattern)]),
    direccion: new FormControl('', [Validators.required, Validators.pattern(this.direccionPattern)])
  });

  listData: MatTableDataSource<Proveedor>;
  displayedColumns = ['no', 'nit', 'nombre', 'telefono', 'direccion', 'actualizar', 'eliminar'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private proveedorService: ProveedorService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarProveedores();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  enviarDatos(proveedor: Proveedor) {
    this.Vprov.proveedor = proveedor;
    this.registroForm.reset(
      {
        nit: {value: '', disabled: true},
        nombre: { value: '', disabled: false },
        telefono: { value: '', disabled: true },
        direccion: { value: '', disabled: false }
      }
    )
    this.nit.setValue(proveedor.nit)
    this.nombre.setValue(proveedor.nombre)
    this.telefono.setValue(proveedor.telefono)
    this.direccion.setValue(proveedor.direccion)
  }

  funEnvProveedor(e){
    this.cargarProveedores();
    
  }

  eliminar(proveedor: Proveedor): void {
    this.proveedorService.eliminar_proveedor(proveedor.id).subscribe(
      data => {
        this.toastr.success('Se ha eliminado correctamente.', 'OK', {
          timeOut: 2100,
          positionClass: 'toast-top-center'
        });
        this.cargarProveedores();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 2100,
          positionClass: 'toast-top-center',
        });
      }
    )
    this.cargarProveedores;
  }

  cargarProveedores(): void {
    this.proveedorService.listar_proveedor().subscribe(
      data => {
        this.Vprov.proveedores = data;
        this.listData = new MatTableDataSource(this.Vprov.proveedores);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      },
      err => {
        console.log(err);
      }
    )
  }

  envioProveedor(e){
    alert("hola");
    this.Vprov.proveedores = e;
    this.listData = new MatTableDataSource(this.Vprov.proveedores);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

  get nit() { return this.registroForm.get('nit') };
  get nombre() { return this.registroForm.get('nombre') };
  get telefono() { return this.registroForm.get('telefono') };
  get direccion() { return this.registroForm.get('direccion') };

}
