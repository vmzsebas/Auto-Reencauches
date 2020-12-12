import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/Modelo/Producto'
import { ProductoService } from 'src/app/Service/Producto.service';

@Component({
  selector: 'app-formulario-registro-producto',
  templateUrl: './formulario-registro-producto.component.html',
  styleUrls: ['./formulario-registro-producto.component.css']
})
export class FormularioRegistroProductoComponent implements OnInit {

  usuarioPattern: any = /^[a-zA-Z0-9\_\-]{8,16}$/;
  nombrePattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  descripcion_prodPattern: any = /^[a-zA-ZÀ-ÿ.,\s]{10,300}$/;
  beneficios_prodPattern: any = /^[a-zA-ZÀ-ÿ.,\s]{10,300}$/;
  apellidoPattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  cedulaPattern: any = /^\d{1,10}$/;
  passwordPattern: any = /^.{8,18}$/;
  correoPattern: any = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  telefonoPattern: any = /^\d{1,10}$/;
  precio_prodPattern: any = /^\d{1,15}$/;
  cantidad_ex_prodPattern: any = /^\d{1,15}$/;
  peso_prodPattern: any = /^\d{1,15}$/;
  peso_unidadPattern: any = /^[a-zA-Z\s]{1,40}$/;
  ancho_prodPattern: any = /^\d{1,15}$/;
  perfil_prodPattern: any = /^\d{1,15}$/;
  rin_prodPattern: any = /^[\d]+\.+[\d]$/;
  eje_prodPattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  terreno_prodPattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  tipo_prodPattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  vehiculoPattern: any = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  showMessage = '';
  mensajeV = '';

  registroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern(this.nombrePattern)]),
    marca: new FormControl('', Validators.required),
    nit_prov: new FormControl('', Validators.required),
    descripcion_prod: new FormControl('', [Validators.required, Validators.pattern(this.descripcion_prodPattern)]),
    beneficios_prod: new FormControl('', [Validators.required, Validators.pattern(this.beneficios_prodPattern)]),
    logo_prod: new FormControl('', [Validators.required]),
    imagen_prod: new FormControl('', [Validators.required]),
    precio_prod: new FormControl('', [Validators.required, Validators.pattern(this.precio_prodPattern)]),
    cantidad_ex_prod: new FormControl('', [Validators.required, Validators.pattern(this.cantidad_ex_prodPattern)]),
    peso_prod: new FormControl('', [Validators.required, Validators.pattern(this.precio_prodPattern)]),
    peso_unidad: new FormControl('', [Validators.required, Validators.pattern(this.peso_unidadPattern)]),
    ancho_prod: new FormControl('', [Validators.required, Validators.pattern(this.ancho_prodPattern)]),
    perfil_prod: new FormControl('', [Validators.required, Validators.pattern(this.perfil_prodPattern)]),
    rin_prod: new FormControl('', [Validators.required, Validators.pattern(this.rin_prodPattern)]),
    eje_prod: new FormControl('', [Validators.required, Validators.pattern(this.eje_prodPattern)]),
    terreno_prod: new FormControl('', [Validators.required, Validators.pattern(this.terreno_prodPattern)]),
    tipo_prod: new FormControl('', [Validators.required, Validators.pattern(this.tipo_prodPattern)]),
    vehiculo: new FormControl('', [Validators.required, Validators.pattern(this.vehiculoPattern)])

  });

  validarMensaje() {
    console.log('MENSAJE -> ', this.showMessage)
    return this.showMessage
  }

  crear_producto(): void {
    const producto = new Producto(
      this.nombre.value, this.marca.value, this.nit_prov.value,
      this.logo_prod.value, this.imagen_prod.value, 
      this.descripcion_prod.value,this.beneficios_prod.value, 
      this.precio_prod.value, this.cantidad_ex_prod.value, 
      this.peso_prod.value, this.peso_unidad.value, 
      this.ancho_prod.value,this.perfil_prod.value, 
      this.rin_prod.value, this.eje_prod.value, 
      this.terreno_prod.value, this.tipo_prod.value, 
      this.vehiculo.value
    );

    this.productoService.crear_producto(producto).subscribe(
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
    this.registroForm.get('nombre').reset();

    this.registroForm.get('marca').reset();

    this.registroForm.get('nit_prov').reset();
    this.registroForm.get('descripcion_prod').reset();
    this.registroForm.get('beneficios_prod').reset();
    this.registroForm.get("logo_prod").reset();
    this.registroForm.get("imagen_prod").reset();
    this.registroForm.get("precio_prod").reset();
    this.registroForm.get("cantidad_ex_prod").reset();
    this.registroForm.get("peso_prod").reset();
    this.registroForm.get("peso_unidad").reset();
    this.registroForm.get("ancho_prod").reset();
    this.registroForm.get("perfil_prod").reset();
    this.registroForm.get("rin_prod").reset();

    this.registroForm.get("eje_prod").reset();

    this.registroForm.get("terreno_prod").reset();
    this.registroForm.get("tipo_prod").reset();
    this.registroForm.get("vehiculo").reset();
  }

  onRegistrar() {

    console.log('form es Valido ->', this.nombre.value);
    if (this.registroForm.valid === true && this.marca.value != "" && this.nit_prov.value != ""
      && this.marca.value != "" && this.eje_prod.value != "" && this.terreno_prod.value != ""
      && this.tipo_prod.value != "" && this.vehiculo.value != "") {
      this.mensajeV = 'Formulario Enviado Exitosamente!';
      this.showMessage = 'TRUE';
      this.crear_producto();
    } else {
      this.mensajeV = 'Por favor llenar el formulario correctamente.';
      this.showMessage = 'FALSE';

    }
  }


  constructor(private router: Router,
    private productoService: ProductoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  get nombre() { return this.registroForm.get('nombre') };
  get marca() { return this.registroForm.get('marca') };
  get nit_prov() { return this.registroForm.get('nit_prov') };
  get descripcion_prod() { return this.registroForm.get('descripcion_prod') };
  get beneficios_prod() { return this.registroForm.get('beneficios_prod') };
  get logo_prod() { return this.registroForm.get("logo_prod") }
  get imagen_prod() { return this.registroForm.get("imagen_prod") }
  get precio_prod() { return this.registroForm.get("precio_prod") }
  get cantidad_ex_prod() { return this.registroForm.get("cantidad_ex_prod") }
  get peso_prod() { return this.registroForm.get("peso_prod") }
  get peso_unidad() { return this.registroForm.get("peso_unidad") }
  get ancho_prod() { return this.registroForm.get("ancho_prod") }
  get perfil_prod() { return this.registroForm.get("perfil_prod") }
  get rin_prod() { return this.registroForm.get("rin_prod") }
  get eje_prod() { return this.registroForm.get("eje_prod") }
  get terreno_prod() { return this.registroForm.get("terreno_prod") }
  get tipo_prod() { return this.registroForm.get("tipo_prod") }
  get vehiculo() { return this.registroForm.get("vehiculo") }

}
