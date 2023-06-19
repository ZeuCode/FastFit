import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { payment } from '../model/payment';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})

export class PaymentService {
  private url = "http://localhost:8080/payment";
  private listaCambio = new Subject<payment[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private Http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem("token");
    return this.Http.get<payment[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(pay: payment) {
    let token = sessionStorage.getItem("token");
    return this.Http.post(this.url, pay,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  listId(id:number) {
    let token = sessionStorage.getItem("token");
    return this.Http.get<payment>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(p:payment) {
    let token = sessionStorage.getItem("token");
    //return this.Http.put(this.url + '/' + p.idPayment, p);
    return this.Http.put(this.url, p,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.Http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  setList(listaNueva: payment[]) {
    this.listaCambio.next(listaNueva);
    //this.list();
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
