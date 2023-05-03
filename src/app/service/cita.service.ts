import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { Subject } from 'rxjs';
import { Citas } from '../model/cita';


const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private url = `${base_url}/citas`
  private listaCambio = new Subject<Citas[]>
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private Http: HttpClient) { }
  list() {
    return this.Http.get<Citas[]>(this.url)
  }
  insert(cita: Citas) {
    return this.Http.post(this.url, cita);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Citas[]) {
    this.listaCambio.next(listaNueva);
  }


  listid(id: number) {
    return this.Http.get<Citas>(`${this.url}/${id}`);
  }

  update(c: Citas) {
    return this.Http.put(this.url + "/" + c.id, c);

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


