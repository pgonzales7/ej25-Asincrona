import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tbldatos } from '../models/tbldatos';


export interface Response{
  status: string;
  response: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  // Crear una instancia de HttpClient
  constructor(private http: HttpClient) { }

  // Crear una funcion por cada servicio de la API
  getVista(): Observable<Tbldatos[]>{
  let rutaVista = environment.apiUrl + 'vista/';
  return this.http.get<Tbldatos[]>(rutaVista);
  }
  getBuscar(id:string):Observable<Tbldatos[]>{
  let rutaBuscar = environment.apiUrl + 'buscar/' + id;
  return this.http.get<Tbldatos[]>(rutaBuscar);
  }
  getNuevo(datos: Tbldatos):Observable<Tbldatos>{
  let rutaNuevo = environment.apiUrl + 'nuevo/';
  return this.http.post<Tbldatos>(rutaNuevo, datos);
  }
  getEditar(datos: Tbldatos):Observable<Tbldatos>{
  let rutaEditar = environment.apiUrl + 'editar/';
  return this.http.put<Tbldatos>(rutaEditar, datos);
  }
  getEliminar(id:string):Observable<string>{
  let rutaEliminar = environment.apiUrl + 'eliminar/' + id;
  return this.http.delete<string>(rutaEliminar);
  }
}
