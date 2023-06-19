import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../model/review';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class ReviewService {

  private url = `${base_url}/reviews`;
  private listChange = new Subject<Review[]>();
  private confirmDelete = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Review[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(Review: Review) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, Review, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getList() {
    return this.listChange.asObservable();
  }
  setList(NewList: Review[]) {
    this.listChange.next(NewList);
  }

  listId(Id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Review>(`${this.url}/${Id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(review: Review) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, review, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
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

  byPsi(idPsi: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Review[]>(`${this.url}/${idPsi}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
