import { Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gender } from '../model/gender';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private url = `${base_url}/genders`;
  private listaCambio = new Subject<Gender[]>();
  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Gender[]>(this.url);
  }
  insert(g: Gender) {
    return this.http.post(this.url, g);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Gender[]) {
    this.listaCambio.next(listaNueva);
  }

  listid(id: number) {
    return this.http.get<Gender>(`${this.url}/${id}`);
  }

  update(c: Gender) {
    //return this.http.put(this.url + '/' + c.id, c);
    return this.http.put(this.url, c);

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
