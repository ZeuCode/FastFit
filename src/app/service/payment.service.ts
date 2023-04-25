import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { payment } from '../model/payment';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})

export class PaymentService {
  private url = `${base_url}/payments`;
  private listaCambio = new Subject<payment[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private Http: HttpClient) {}

  list() {
    return this.Http.get<payment[]>(this.url);
  }

  insert(payment: payment) {
    return this.Http.post(this.url, payment);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: payment[]) {
    this.listaCambio.next(listaNueva);
    this.list();
  }

  listId(id:number) {
    return this.Http.get<payment>(`${this.url}/${id}`);
  }

  update(p:payment) {
    return this.Http.put(this.url + '/' + p.id, p);
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
