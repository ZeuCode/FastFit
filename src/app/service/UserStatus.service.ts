import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserStatus } from '../model/UserStatus';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})

export class UserStatusService {
  private url = `${base_url}/UserStatuss`;
  private listaCambio = new Subject<UserStatus[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<UserStatus[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(UserStatus: UserStatus) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, UserStatus, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: UserStatus[]) {
    this.listaCambio.next(listaNueva);
  }

  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<UserStatus>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(p: UserStatus) {
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url + '/' + p.idUS, p);
    return this.http.put(this.url, UserStatus, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });

  }

  listarId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<UserStatus>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
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

