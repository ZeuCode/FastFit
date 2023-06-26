import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Psi } from '../model/psi';
import { psispecialtyDTO } from '../model/psispecialtyDTO';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class PsiService {
  private url = `${base_url}/Psychologists`;
  private listaCambio = new Subject<Psi[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Psi[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(psico: Psi) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, psico,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Psi[]) {
    this.listaCambio.next(listaNueva);
    //this.list();
  }

  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Psi>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(p: Psi) {
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url + '/' + p.idPsi, p);
    return this.http.put(this.url, p,{
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

  getSpecCountByPsi(): Observable<psispecialtyDTO[]> {
    return this.http.get<psispecialtyDTO[]>(`${this.url}/psi-count`);

  }


}

