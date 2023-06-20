import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppointmentStatus } from '../model/appointmentStatus';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<AppointmentStatus[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(appointment: AppointmentStatus) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, appointment, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: AppointmentStatus[]) {
    this.listaCambio.next(listaNueva);
  }

  listid(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<AppointmentStatus>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(c: AppointmentStatus) {
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url + '/' + c.id, c);
    return this.http.put(this.url, c,{
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
}
