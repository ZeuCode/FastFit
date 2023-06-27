import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Observable, Subject } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${base_url}/users`;
  private listaCambio = new Subject<User[]>();
  constructor(private http: HttpClient) {}

  insert(user: User) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, user,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<User[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: User[]) {
    this.listaCambio.next(listaNueva);
  }


}
