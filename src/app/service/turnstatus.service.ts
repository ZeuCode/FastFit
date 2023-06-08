import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Turnstatus } from '../model/turnstatus';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Turnstatus[]>(this.url);
  }
  insert(turnst: Turnstatus) {
    return this.http.post(this.url, turnst);
  }
  getList() {
    return this.listChange.asObservable();
  }
  setList(NewList: Turnstatus[]) {
    this.listChange.next(NewList);
  }
  listId(Id:number){
    return this.http.get<Turnstatus>(`${this.url}/${Id}`);
  }
  update(turnst:Turnstatus){
    return this.http.put(this.url,turnst)
  }
  delete(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDelete() {
    return this.confirmDelete.asObservable();
  }
  setConfirmDelete(estat: Boolean) {
    this.confirmDelete.next(estat);
  }
}
