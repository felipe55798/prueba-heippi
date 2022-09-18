import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionPersonalComponentRoutingModule } from './administracion-usuarios-routing.module';
import { MatCardModule } from '@angular/material/card';
import { AdministracionUsuariosComponent } from './administracion-usuarios.component';
import { AdministracionUsuariosService } from './services/administracion-usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    AdministracionUsuariosComponent,
    DetalleUsuarioComponent,
  ],
  imports: [
    CommonModule,
    AdministracionPersonalComponentRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [
    AdministracionUsuariosService,
  ]
})
export class AdministracionUsuariosModule { }
