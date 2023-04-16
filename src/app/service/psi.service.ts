import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Psi } from '../model/psi';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class PsiService {
  private url = `${base_url}/psychologists`;
  private listaCambio = new Subject<Psi[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Psi[]>(this.url);
  }
  insert(Psi: Psi) {
    return this.http.post(this.url, Psi);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Psi[]) {
    this.listaCambio.next(listaNueva);
  }
}

