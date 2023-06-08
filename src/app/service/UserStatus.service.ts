import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<UserStatus[]>(this.url);
  }
  insert(UserStatus: UserStatus) {
    return this.http.post(this.url, UserStatus);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: UserStatus[]) {
    this.listaCambio.next(listaNueva);
  }
  listId(id: number) {
    return this.http.get<UserStatus>(`${this.url}/${id}`);
  }

  update(p: UserStatus) {
    //return this.http.put(this.url + '/' + p.idUS, p);
    return this.http.put(this.url, UserStatus);
  }
  listarId(id: number) {
    return this.http.get<UserStatus>(`${this.url}/${id}`);
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

