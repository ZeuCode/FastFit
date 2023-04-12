import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Review } from '../model/review';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private url=`${base_url}/reviews`;

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Review[]>(this.url);
  }
}
