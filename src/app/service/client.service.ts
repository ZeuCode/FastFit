import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {environment} from '../../../src/environments/environment'
import {Client} from '../model/client'

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ClientService {
private url=`${base_url}/clients`
private listaCambio = new Subject<Client[]>();
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Client[]>(this.url)
  }
  insert(client: Client) {
    return this.http.post(this.url, client);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Client[]) {
    this.listaCambio.next(listaNueva);
    this.list() //porque funciona?
  }

}
