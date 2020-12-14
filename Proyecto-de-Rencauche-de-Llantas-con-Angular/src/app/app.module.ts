import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from '../app/app-routing.module';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ClienteService } from './Service/Cliente.service';
import { ProveedorService } from './Service/Proveedor.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MainComponent } from './components/view/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioRegistroComponent } from './components/Registro/formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from './components/Iniciar Sesion/formulario-login/formulario-login.component';
import { FormularioGrupoLoginUsuarioComponent } from './components/Iniciar Sesion/formulario-grupo-login-usuario/formulario-grupo-login-usuario.component';
import { FormularioGrupoLoginPasswordComponent } from './components/Iniciar Sesion/formulario-grupo-login-password/formulario-grupo-login-password.component';
import { TiendaComponent } from './components/Tienda/tienda/tienda.component';
import { AcercaDeNosotrosComponent } from './components/Acerca de Nosotros/acerca-de-nosotros/acerca-de-nosotros.component';
import { ContactenosComponent } from './components/Contactenos/contactenos/contactenos.component';
import { ListadoClientesComponent } from './components/Administrador/Cliente/listado-clientes/listado-clientes.component';

import { DetalleClientesComponent } from './components/Administrador/Cliente/detalle-clientes/detalle-clientes.component';
import { ActualizarClientesComponent } from './components/Administrador/Cliente/actualizar-clientes/actualizar-clientes.component';
import { FormularioRegistroProveedorComponent } from './components/Proveedor/formulario-registro-proveedor/formulario-registro-proveedor.component';
import { FormularioGrupoApellidoComponent } from './components/InputFieldGroup/formulario-grupo-apellido/formulario-grupo-apellido.component';
import { FormularioGrupoNombreComponent } from './components/InputFieldGroup/formulario-grupo-nombre/formulario-grupo-nombre.component';
import { FormularioGrupoCedulaComponent } from './components/InputFieldGroup/formulario-grupo-cedula/formulario-grupo-cedula.component';
import { FormularioGrupoTelefonoComponent } from './components/InputFieldGroup/formulario-grupo-telefono/formulario-grupo-telefono.component';
import { FormularioGrupoEmailComponent } from './components/InputFieldGroup/formulario-grupo-email/formulario-grupo-email.component';
import { FormularioGrupoUsuarioComponent } from './components/InputFieldGroup/formulario-grupo-usuario/formulario-grupo-usuario.component';
import { FormularioGrupoPasswordComponent } from './components/InputFieldGroup/formulario-grupo-password/formulario-grupo-password.component';
import { FormularioGrupoRepeatPasswordComponent } from './components/InputFieldGroup/formulario-grupo-repeat-password/formulario-grupo-repeat-password.component';
import { FormularioGrupoNitComponent } from './components/InputFieldGroup/formulario-grupo-nit/formulario-grupo-nit.component';
import { ActualizarProveedoresComponent } from './components/Administrador/Proveedor/actualizar-proveedores/actualizar-proveedores.component';
import { ListadoProveedoresComponent } from './components/Administrador/Proveedor/listado-proveedores/listado-proveedores.component';
import { DetalleProveedoresComponent } from './components/Administrador/Proveedor/detalle-proveedores/detalle-proveedores.component';
import { FormularioRegistroAdministradorComponent } from './components/Administrador/Formulario Administrador/formulario-registro-administrador/formulario-registro-administrador.component';
import { AcercaDeNosotros1Component } from './components/Acerca de Nosotros/acerca-de-nosotros1/acerca-de-nosotros1.component';
import { AcercaDeNosotros2Component } from './components/Acerca de Nosotros/acerca-de-nosotros2/acerca-de-nosotros2.component';
import { FormularioGrupoDireccionComponent } from './components/InputFieldGroup/formulario-grupo-direccion/formulario-grupo-direccion.component';
import { TiendaproductosComponent } from './components/Tienda/TiendaProductos/tiendaproductos/tiendaproductos.component';
import { Tiendarow1Component } from './components/Tienda/TiendaProductos/tiendarow1/tiendarow1.component';
import { MatSortModule } from '@angular/material/sort';
import { SteelmarkComponent } from './components/Tienda/TiendaProductos/Steelmark/steelmark/steelmark.component';
import { BarraBusquedaComponent } from './components/Tienda/BarraBusqueda/barra-busqueda/barra-busqueda.component';
import { GoodyearComponent } from './components/Tienda/TiendaProductos/Goodyear/goodyear/goodyear.component';
import { LaufennComponent } from './components/Tienda/TiendaProductos/Laufenn/laufenn/laufenn.component';
import { Laufenn1Component } from './components/Tienda/TiendaProductos/Laufenn/laufenn1/laufenn1.component';
import { Tiendarow2Component } from './components/Tienda/TiendaProductos/tiendarow2/tiendarow2.component';
import { PirelliComponent } from './components/Tienda/TiendaProductos/Pirelli/pirelli/pirelli.component';
import { AuroraComponent } from './components/Tienda/TiendaProductos/Aurora/aurora/aurora.component';
import { Tiendarow3Component } from './components/Tienda/TiendaProductos/tiendarow3/tiendarow3.component';
import { Goodyear1Component } from './components/Tienda/TiendaProductos/Goodyear/goodyear1/goodyear1.component';
import { Goodyear2Component } from './components/Tienda/TiendaProductos/Goodyear/goodyear2/goodyear2.component';
import { Pirelli1Component } from './components/Tienda/TiendaProductos/Pirelli/pirelli1/pirelli1.component';
import { FormularioRegistroProductoComponent } from './components/Administrador/Producto/Registro/formulario-registro-producto/formulario-registro-producto.component';
import { FormularioGrupoMarcaProductoComponent } from './components/InputFieldGroup/formulario-grupo-marca-producto/formulario-grupo-marca-producto.component';
import { FormularioGrupoNitProvProductoComponent } from './components/InputFieldGroup/formulario-grupo-nit-prov-producto/formulario-grupo-nit-prov-producto.component';
import { FormularioGrupoLogoProductoComponent } from './components/InputFieldGroup/formulario-grupo-logo-producto/formulario-grupo-logo-producto.component';
import { FormularioGrupoDescripcionProductoComponent } from './components/InputFieldGroup/formulario-grupo-descripcion-producto/formulario-grupo-descripcion-producto.component';
import { FormularioGrupoBeneficiosProductoComponent } from './components/InputFieldGroup/formulario-grupo-beneficios-producto/formulario-grupo-beneficios-producto.component';
import { FormularioGrupoPrecioProductoComponent } from './components/InputFieldGroup/formulario-grupo-precio-producto/formulario-grupo-precio-producto.component';
import { FormularioGrupoCantidadExProductoComponent } from './components/InputFieldGroup/formulario-grupo-cantidad-ex-producto/formulario-grupo-cantidad-ex-producto.component';
import { FormularioGrupoPesoProductoComponent } from './components/InputFieldGroup/formulario-grupo-peso-producto/formulario-grupo-peso-producto.component';
import { FormularioGrupoPesoUnidadProductoComponent } from './components/InputFieldGroup/formulario-grupo-peso-unidad-producto/formulario-grupo-peso-unidad-producto.component';
import { FormularioGrupoAnchoProductoComponent } from './components/InputFieldGroup/formulario-grupo-ancho-producto/formulario-grupo-ancho-producto.component';
import { FormularioGrupoPefilProductoComponent } from './components/InputFieldGroup/formulario-grupo-pefil-producto/formulario-grupo-pefil-producto.component';
import { FormularioGrupoRinProductoComponent } from './components/InputFieldGroup/formulario-grupo-rin-producto/formulario-grupo-rin-producto.component';
import { FormularioGrupoEjeProductoComponent } from './components/InputFieldGroup/formulario-grupo-eje-producto/formulario-grupo-eje-producto.component';
import { FormularioGrupoTerrenoProductoComponent } from './components/InputFieldGroup/formulario-grupo-terreno-producto/formulario-grupo-terreno-producto.component';
import { FormularioGrupoTipoProductoComponent } from './components/InputFieldGroup/formulario-grupo-tipo-producto/formulario-grupo-tipo-producto.component';
import { FormularioGrupoVehiculoProductoComponent } from './components/InputFieldGroup/formulario-grupo-vehiculo-producto/formulario-grupo-vehiculo-producto.component';
import { FormularioGrupoImagenProductoComponent } from './components/InputFieldGroup/formulario-grupo-imagen-producto/formulario-grupo-imagen-producto.component';
import { DescripcionProdComponent } from './components/Tienda/Descripcion/descripcion-prod/descripcion-prod.component';



@NgModule({
  declarations: [
  AppComponent,
  MainComponent,
  MenuComponent,
  FooterComponent,
  InicioComponent,
  FormularioRegistroComponent,
  FormularioLoginComponent,
  FormularioGrupoLoginUsuarioComponent,
  FormularioGrupoLoginPasswordComponent,
  TiendaComponent,
  AcercaDeNosotrosComponent,
  ContactenosComponent,
  ListadoClientesComponent,
  DetalleClientesComponent,
  ActualizarClientesComponent,
  FormularioRegistroProveedorComponent,
  FormularioGrupoApellidoComponent,
  FormularioGrupoNombreComponent,
  FormularioGrupoCedulaComponent,
  FormularioGrupoTelefonoComponent,
  FormularioGrupoEmailComponent,
  FormularioGrupoUsuarioComponent,
  FormularioGrupoPasswordComponent,
  FormularioGrupoRepeatPasswordComponent,
  FormularioGrupoNitComponent,
  ActualizarProveedoresComponent,
  ListadoProveedoresComponent,
  DetalleProveedoresComponent,
  FormularioRegistroAdministradorComponent,
  AcercaDeNosotros1Component,
  AcercaDeNosotros2Component,
  FormularioGrupoDireccionComponent,
  TiendaproductosComponent,
  Tiendarow1Component,
  SteelmarkComponent,
  BarraBusquedaComponent,
  GoodyearComponent,
  LaufennComponent,
  Laufenn1Component,
  Tiendarow2Component,
  PirelliComponent,
  AuroraComponent,
  Tiendarow3Component,
  Goodyear1Component,
  Goodyear2Component,
  Pirelli1Component,
  FormularioRegistroProductoComponent,
  FormularioGrupoMarcaProductoComponent,
  FormularioGrupoNitProvProductoComponent,
  FormularioGrupoLogoProductoComponent,
  FormularioGrupoDescripcionProductoComponent,
  FormularioGrupoBeneficiosProductoComponent,
  FormularioGrupoPrecioProductoComponent,
  FormularioGrupoCantidadExProductoComponent,
  FormularioGrupoPesoProductoComponent,
  FormularioGrupoPesoUnidadProductoComponent,
  FormularioGrupoAnchoProductoComponent,
  FormularioGrupoPefilProductoComponent,
  FormularioGrupoRinProductoComponent,
  FormularioGrupoEjeProductoComponent,
  FormularioGrupoTerrenoProductoComponent,
  FormularioGrupoTipoProductoComponent,
  FormularioGrupoVehiculoProductoComponent,
  FormularioGrupoImagenProductoComponent,
  DescripcionProdComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,    
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot({preventDuplicates: true}),
    MatSortModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/auto-reencauches/'},ClienteService, ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
