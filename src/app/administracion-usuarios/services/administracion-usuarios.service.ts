import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdministracionUsuariosService {

  urlBack = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  /**
   * Permite obtener todos los usuarios registrados
   * @returns lista con todos los usuarios registrados
   */
  getAllUsers() {
    return this.http.get<any>(`${this.urlBack}/users`)
  }

  /**
   * Permite obtener todos los posts registrados por los usuarios
   * @returns una lista con los ports registrados
   */
  getAllPosts() {
    return this.http.get<any>(`${this.urlBack}/posts`)
  }

  /**
   * Permite obtener los posts registrados por un usuario en particular
   * @param idUser el id del usuario que se busca
   * @returns una lista con los posts del usuario
   */
  getPostsByUserId(idUser: number) {
    return this.http.get<any>(`${this.urlBack}/users/${idUser}/posts`)
  }

  /**
   * Permite obtener los albums de un usuario en particular
   * @param idUser el id del usuario que se busca
   * @returns una lista con los albums del usuario
   */
   getAlbumsByUserId(idUser: number) {
    return this.http.get<any>(`${this.urlBack}/albums/${idUser}/photos`)
  }
}
