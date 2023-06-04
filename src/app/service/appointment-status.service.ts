import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppointmentStatus } from '../model/appointmentStatus';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class AppointmentStatusService {
  private url = `${base_url}/appointmentstatus`;
  private listaCambio = new Subject<AppointmentStatus[]>();
  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<AppointmentStatus[]>(this.url);
  }
  insert(appointment: AppointmentStatus) {
    return this.http.post(this.url, appointment);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: AppointmentStatus[]) {
    this.listaCambio.next(listaNueva);
  }

  listid(id: number) {
    return this.http.get<AppointmentStatus>(`${this.url}/${id}`);
  }

  update(c: AppointmentStatus) {
    return this.http.put(this.url + '/' + c.id, c);
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
