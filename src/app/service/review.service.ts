import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Review } from '../model/review';
import { Subject } from 'rxjs';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private url=`${base_url}/reviews`;
  private listChange=new Subject<Review[]>

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Review[]>(this.url);
  }
  insert(Review:Review){
    return this.http.post(this.url, Review)
  }
  getList(){
    return this.listChange.asObservable();
  }
  setList(NewList:Review[]){
    this.listChange.next(NewList);
      }
}
