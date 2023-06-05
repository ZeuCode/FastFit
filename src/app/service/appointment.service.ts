import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private url = `${base_url}/appointments`;
  private listaCambio = new Subject<Appointment[]>();
  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private Http: HttpClient) {}
  list() {
    return this.Http.get<Appointment[]>(this.url);
  }
  insert(appointment: Appointment) {
    return this.Http.post(this.url, appointment);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Appointment[]) {
    this.listaCambio.next(listaNueva);
  }

  listid(id: number) {
    return this.Http.get<Appointment>(`${this.url}/${id}`);
  }

  update(c: Appointment) {
   //  return this.Http.put(this.url + '/' + c.idAppointment, c);
    return this.Http.put(this.url, c);
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
