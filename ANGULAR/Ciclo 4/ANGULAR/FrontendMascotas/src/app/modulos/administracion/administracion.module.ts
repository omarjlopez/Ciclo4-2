import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuariosComponent } from './personas/crear-usuarios/crear-usuarios.component';
import { EditarUsuariosComponent } from './personas/editar-usuarios/editar-usuarios.component';
import { EliminarUsuariosComponent } from './personas/eliminar-usuarios/eliminar-usuarios.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    CrearUsuariosComponent,
    EditarUsuariosComponent,
    EliminarUsuariosComponent,
    CrearProductoComponent,
    EliminarProductoComponent,
    EditarProductoComponent,
    BuscarProductoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
