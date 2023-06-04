import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
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
    return this.Http.get<specialty[]>(this.url);
  }

  insert(specialty: specialty) {
    return this.Http.post(this.url, specialty);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: specialty[]) {
    this.listaCambio.next(listaNueva);
    //this.list();
  }

  listId(id:number) {
    return this.Http.get<specialty>(`${this.url}/${id}`);
  }

  update(p:specialty) {
    //return this.Http.put(this.url + '/' + p.idSpecialty, p);
    return this.Http.put(this.url, p);
  }

  eliminar(id: number) {
    return this.Http.delete(`${this.url}/${id}`);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
