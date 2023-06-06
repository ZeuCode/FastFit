import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppointmentStatus } from '../model/appointmentStatus';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class AppointmentstatusService {
  private url = `${base_url}/appointmentstatus`;
  private listaCambio = new Subject<AppointmentStatus[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<AppointmentStatus[]>(this.url);
  }
  insert(appStatus: AppointmentStatus) {
    return this.http.post(this.url, appStatus);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: AppointmentStatus[]) {
    this.listaCambio.next(listaNueva);
  }
  listId(id: number) {
    return this.http.get<AppointmentStatus>(`${this.url}/${id}`);
  }

  update(a: AppointmentStatus) {
    return this.http.put(this.url + '/' + a.id, a);
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
