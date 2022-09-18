import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdministracionUsuariosService } from '../../services/administracion-usuarios.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {

  displayedColumns: string[] = ['titulo', 'url'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() usuario: any;
  cantidadPostsUsuario = 0;
  constructor(private administracionService: AdministracionUsuariosService) { }

  ngOnInit(): void {
    this.getUserPosts();
    this.getUserAlbums();
  }

  getUserPosts() {
    this.administracionService.getPostsByUserId(this.usuario.id).subscribe((res) => {
      this.cantidadPostsUsuario = res.length;
    })
  }

  getUserAlbums() {
    this.administracionService.getAlbumsByUserId(this.usuario.id).subscribe((res) => {
      this.dataSource = new MatTableDataSource(res ? res : []);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
