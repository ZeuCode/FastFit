import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Turn[]>(this.url);
  }
  insert(turn: Turn) {
    return this.http.post(this.url, turn);
  }
  getList() {
    return this.listChange.asObservable();
  }
  setList(NewList: Turn[]) {
    this.listChange.next(NewList);
  }
  listId(Id:number){
    return this.http.get<Turn>(`${this.url}/${Id}`);
  }
  update(r:Turn){
    return this.http.put(this.url,r);
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
