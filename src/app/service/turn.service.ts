import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Turn } from '../model/turn';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class TurnService {

  private url = `${base_url}/turns`;
  private listChange = new Subject<Turn[]>();
  private confirmDelete = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Turn[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(turn: Turn) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, turn, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getList() {
    return this.listChange.asObservable();
  }

  setList(NewList: Turn[]) {
    this.listChange.next(NewList);
  }

  listId(Id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Turn>(`${this.url}/${Id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(turn: Turn) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, turn, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
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
