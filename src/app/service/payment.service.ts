import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { payment } from '../model/payment';

const base_url = Environment.base

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  private url = `${base_url}/payments`
  private listaCambio =new Subject<payment[]>

  constructor(private Http: HttpClient) { }
  list() {
    return this.Http.get<payment[]>(this.url)
  }
  insert(payment: payment){
    return this.Http.post(this.url, payment);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  setList(listaNueva:payment[]){
this.listaCambio.next(listaNueva);
  }
}
