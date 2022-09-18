import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdministracionUsuariosService } from './services/administracion-usuarios.service';

@Component({
  selector: 'app-administracion-usuarios',
  templateUrl: './administracion-usuarios.component.html',
  styleUrls: ['./administracion-usuarios.component.scss']
})
export class AdministracionUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'email', 'telefono', 'ciudad', 'acciones'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  cantidadUsuariosTotal = 0;
  cantidadPostsTotal = 0;
  usuarioSeleccionado: any = null;
  showUsuarioDetalle = false;
  constructor(private administracionService: AdministracionUsuariosService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllPosts();
  }

  getAllUsers() {
    this.administracionService.getAllUsers().subscribe((res) => {
      this.cantidadUsuariosTotal = res.length;
      this.dataSource = new MatTableDataSource(res ? res : []);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getAllPosts() {
    this.administracionService.getAllPosts().subscribe((res) => {
      this.cantidadPostsTotal = res.length;
    });
  }

  viewPersona(row: any) {
    console.log('El usuario seleccionado es: ', row);
    this.usuarioSeleccionado = row;
    this.showUsuarioDetalle = true;
  }

  volverInicio() {
    this.showUsuarioDetalle = false;
  }

}
