import { Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gender } from '../model/gender';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Gender[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  listr() {
    return this.http.get<Gender[]>(this.url);
  }

  insert(g: Gender) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, g,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Gender[]) {
    this.listaCambio.next(listaNueva);
  }

  listid(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Gender>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(c: Gender) {
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url + '/' + c.id, c);
    return this.http.put(this.url, c, {
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
