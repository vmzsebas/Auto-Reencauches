import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/Modelo/Proveedor';
import { ProveedorService } from 'src/app/Service/Proveedor.service';
import { VariableProveedor } from '../listado-proveedores/VariableProveedor';

@Component({
  selector: 'app-actualizar-proveedores',
  templateUrl: './actualizar-proveedores.component.html',
  styleUrls: ['./actualizar-proveedores.component.css']
})
export class ActualizarProveedoresComponent implements OnInit {

  @Input() registroForm: FormControl;
  @Input() Vprov: VariableProveedor = {
    proveedores: null,
    proveedor: null
  };
  @Output() envioProveedores = new EventEmitter<Proveedor[]>()

  showMessage = '';
  mensajeV = '';

  listData: MatTableDataSource<Proveedor>;
  displayedColumns = ['no', 'nit', 'nombre', 'telefono', 'direccion', 'actualizar', 'eliminar'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  cargarProductos(): void {
    this.proveedorService.listar_proveedor().subscribe(
      data => {
        this.Vprov.proveedores = data;
        for (let indexx = 0; indexx < this.Vprov.proveedores.length; indexx++) {
          const element1 = this.Vprov.proveedores[indexx];
          alert("sera que si hay datos: "+element1.nombre);
        }
        this.envioProveedores.emit(this.Vprov.proveedores);
      },
      err => {
        console.log(err);
      }
    )
  }

  actualizar_proveedor(): void {
    const proveedor = new Proveedor(
      this.nit.value, this.nombre.value,
       this.telefono.value, this.direccion.value);

    this.proveedorService.actualizar_proveedor(this.Vprov.proveedor.id, proveedor).subscribe(
      data => {
        this.toastr.success('Se han actualizado los campos correctamente.', 'OK', {
          timeOut: 2100,
          positionClass: 'toast-top-center'
        });
        this.cargarProductos();
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
    this.registroForm.reset(
      {
        nit: { value: '', disabled:true},
        nombre: { value: '', disabled: true },
        telefono: { value: '', disabled: true },
        direccion: { value: '', disabled: true }
      }
    )
  }

  onUpdate() {
    console.log('form es Valido ->', this.registroForm.valid);
    if (this.registroForm.valid === true) {
      this.mensajeV = 'Formulario Enviado Exitosamente!';
      this.showMessage = 'TRUE';
      this.actualizar_proveedor();
      /*this.envioProveedores.emit(this.proveedores);*/
    } else {
      this.mensajeV = 'Por favor llenar el formulario correctamente.';
      this.showMessage = 'FALSE';

    }
  }

  cerrarFormulario(){
    this.Vprov.proveedor=null;
  }

  vecesClickBoton = 0;
  validarClickBoton(): void {
    if (this.vecesClickBoton == 0) {
      this.vecesClickBoton++;
    } else {
      this.vecesClickBoton--;
    }

  }


  constructor(private proveedorService:ProveedorService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  validarMensaje() {
    console.log('MENSAJE -> ', this.showMessage)
    return this.showMessage
  }

  get nit() { return this.registroForm.get('nit') };
  get nombre() { return this.registroForm.get('nombre') };
  get telefono() { return this.registroForm.get('telefono') };
  get direccion() { return this.registroForm.get('direccion') };

}
