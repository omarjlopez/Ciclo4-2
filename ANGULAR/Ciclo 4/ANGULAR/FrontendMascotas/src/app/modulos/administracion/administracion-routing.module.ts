import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuariosComponent } from './personas/crear-usuarios/crear-usuarios.component';
import { EditarUsuariosComponent } from './personas/editar-usuarios/editar-usuarios.component';

const routes: Routes = [
  {
    path: "crear-usuario",
    component: CrearUsuariosComponent
  },
  {
    path: "editar-usuario",
    component: EditarUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
