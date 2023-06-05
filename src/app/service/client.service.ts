import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { Client } from '../model/client';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private url = `${base_url}/client`;
  private listaCambio = new Subject<Client[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Client[]>(this.url);
  }
  insert(client: Client) {
    return this.http.post(this.url, client);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Client[]) {
    this.listaCambio.next(listaNueva);
  }
  listId(id: number) {
    return this.http.get<Client>(`${this.url}/${id}`);
  }

  update(c: Client) {
   // return this.http.put(this.url + '/' + c.id, c);
   return this.http.put(this.url, c);

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
