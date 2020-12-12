import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProveedorService } from 'src/app/Service/Proveedor.service';
import { VariableProveedor } from '../../Administrador/Proveedor/listado-proveedores/VariableProveedor';

@Component({
  selector: 'app-formulario-grupo-nit-prov-producto',
  templateUrl: './formulario-grupo-nit-prov-producto.component.html',
  styleUrls: ['./formulario-grupo-nit-prov-producto.component.css']
})
export class FormularioGrupoNitProvProductoComponent implements OnInit {
  
  @Input() registroForm: FormGroup;
  @Input() nit_prov: FormControl;

  Vprov: VariableProveedor ={
    proveedores: null,
    proveedor: null
  }

  constructor(private proveedorService:ProveedorService) { }

  cargarProveedores(): void {
    this.proveedorService.listar_proveedor().subscribe(
      data => {
        this.Vprov.proveedores = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
    this.cargarProveedores();
  }


}
