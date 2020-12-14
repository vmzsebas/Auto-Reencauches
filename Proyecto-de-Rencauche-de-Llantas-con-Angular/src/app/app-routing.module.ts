import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeNosotrosComponent } from './components/Acerca de Nosotros/acerca-de-nosotros/acerca-de-nosotros.component';
import { ActualizarClientesComponent } from './components/Administrador/Cliente/actualizar-clientes/actualizar-clientes.component';
import { DetalleClientesComponent } from './components/Administrador/Cliente/detalle-clientes/detalle-clientes.component';
import { ListadoClientesComponent } from './components/Administrador/Cliente/listado-clientes/listado-clientes.component';
import { FormularioRegistroAdministradorComponent } from './components/Administrador/Formulario Administrador/formulario-registro-administrador/formulario-registro-administrador.component';
import { FormularioRegistroProductoComponent } from './components/Administrador/Producto/Registro/formulario-registro-producto/formulario-registro-producto.component';
import { ActualizarProveedoresComponent } from './components/Administrador/Proveedor/actualizar-proveedores/actualizar-proveedores.component';
import { ListadoProveedoresComponent } from './components/Administrador/Proveedor/listado-proveedores/listado-proveedores.component';
import { ContactenosComponent } from './components/Contactenos/contactenos/contactenos.component';
import { FormularioLoginComponent } from './components/Iniciar Sesion/formulario-login/formulario-login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioRegistroProveedorComponent } from './components/Proveedor/formulario-registro-proveedor/formulario-registro-proveedor.component';
import { FormularioRegistroComponent } from './components/Registro/formulario-registro/formulario-registro.component';
import { DescripcionProdComponent } from './components/Tienda/Descripcion/descripcion-prod/descripcion-prod.component';

import { TiendaComponent } from './components/Tienda/tienda/tienda.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'acerca-de-nosotros', component: AcercaDeNosotrosComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'formulario-registro', component: FormularioRegistroComponent },
  { path: 'formulario-login', component: FormularioLoginComponent },
  { path: 'admin-listado-cliente', component: ListadoClientesComponent },
  { path: 'admin-listado-proveedor', component: ListadoProveedoresComponent },
  { path: 'admin-detalle-id/:id', component: DetalleClientesComponent },
  { path: 'admin-actualizar-cliente/:id', component: ActualizarClientesComponent },
  { path: 'admin-actualizar-proveedor/:id', component: ActualizarProveedoresComponent },
  { path: 'admin-formulario-registro-proveedor', component: FormularioRegistroProveedorComponent },
  { path: 'admin-formulario-registro-administrador', component: FormularioRegistroAdministradorComponent },
  { path: 'admin-formulario-registro-producto', component: FormularioRegistroProductoComponent },
  { path: 'descripcion-producto/:logo/:nombre/:ancho/:perfil/:rin/:producto/:precio', component:DescripcionProdComponent},
  { path: '**', pathMatch: 'full', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
