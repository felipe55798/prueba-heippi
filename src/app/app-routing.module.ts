import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdministracionUsuariosModule } from './administracion-usuarios/administracion-usuarios.module';

const routes: Routes = [
  { 
    path: 'administracion-usuarios', 
    loadChildren: () =>
      import(
        './administracion-usuarios/administracion-usuarios.module'
      ).then((m) => m.AdministracionUsuariosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
