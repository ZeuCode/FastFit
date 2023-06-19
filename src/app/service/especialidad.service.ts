import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { specialty } from '../model/especialidad';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  private url = `${base_url}/specialties`;
  private listaCambio = new Subject<specialty[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private Http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.Http.get<specialty[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(specialty: specialty) {
    let token = sessionStorage.getItem("token");
    return this.Http.post(this.url, specialty,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: specialty[]) {
    this.listaCambio.next(listaNueva);
    //this.list();
  }

  listId(id:number) {
    let token = sessionStorage.getItem("token");
    return this.Http.get<specialty>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(p:specialty) {
    let token = sessionStorage.getItem("token");
    //return this.Http.put(this.url + '/' + p.idSpecialty, p);
    return this.Http.put(this.url, p,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.Http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
