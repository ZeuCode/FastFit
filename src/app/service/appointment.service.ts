import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})

export class AppointmentService {
  private url = `${base_url}/appointments`;
  private listaCambio = new Subject<Appointment[]>();
  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private Http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.Http.get<Appointment[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(appointment: Appointment) {
    let token = sessionStorage.getItem("token");
    return this.Http.post(this.url, appointment, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Appointment[]) {
    this.listaCambio.next(listaNueva);
  }

  listid(id: number) {
    let token = sessionStorage.getItem("token");
    return this.Http.get<Appointment>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(appointment: Appointment) {
    let token = sessionStorage.getItem("token");
    //return this.Http.put(this.url + '/' + c.idAppointment, c);
    return this.Http.put(this.url, appointment, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.Http.delete(`${this.url}/${id}`, {
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
