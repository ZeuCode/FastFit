import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Role } from '../model/role';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private url = `${base_url}/roles`;
  private listaCambio = new Subject<Role[]>();
  constructor(private http: HttpClient) {}


  insert(role: Role) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, role,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Role[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: Role[]) {
    this.listaCambio.next(listaNueva);
  }


}
