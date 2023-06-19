import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Turnstatus } from '../model/turnstatus';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class TurnstatusService {

  private url = `${base_url}/turnstatus`;
  private listChange = new Subject<Turnstatus[]>();
  private confirmDelete = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Turnstatus[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(turnst: Turnstatus) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, turnst,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getList() {
    return this.listChange.asObservable();
  }

  setList(NewList: Turnstatus[]) {
    this.listChange.next(NewList);
  }

  listId(Id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Turnstatus>(`${this.url}/${Id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(turnst:Turnstatus){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,turnst,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmDelete() {
    return this.confirmDelete.asObservable();
  }

  setConfirmDelete(estat: Boolean) {
    this.confirmDelete.next(estat);
  }
}
