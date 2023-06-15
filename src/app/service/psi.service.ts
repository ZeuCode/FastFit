import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Psi } from '../model/psi';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class PsiService {
  private url = `${base_url}/Psychologists`;
  private listaCambio = new Subject<Psi[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Psi[]>(this.url);
  }

  insert(psico: Psi) {
    return this.http.post(this.url, psico);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Psi[]) {
    this.listaCambio.next(listaNueva);
    //this.list();
  }

  listId(id: number) {
    return this.http.get<Psi>(`${this.url}/${id}`);
  }

  update(p: Psi) {
    //return this.http.put(this.url + '/' + p.idPsi, p);
    return this.http.put(this.url, p);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}

