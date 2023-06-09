import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { Client } from '../model/client';
import { ClientStatsDTO } from '../model/clientStatsDTO';

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
    let token = sessionStorage.getItem("token");
    return this.http.get<Client[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(client: Client) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, client,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  listc() {
    return this.http.get<Client[]>(`${base_url}/public/client`);
  }

  insertc(client: Client) {
    return this.http.post(`${base_url}/public/client`, client);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Client[]) {
    this.listaCambio.next(listaNueva);
  }

  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Client>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(c: Client) {
    let token = sessionStorage.getItem("token");
   // return this.http.put(this.url + '/' + c.id, c);
   return this.http.put(this.url, c, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }

  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  clientStats():Observable<ClientStatsDTO[]> {
    let token = sessionStorage.getItem("token");

    return this.http.get<ClientStatsDTO[]>(`${this.url}/clientStats`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }



}
