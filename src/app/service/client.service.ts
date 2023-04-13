import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import {environment} from '../../../src/environments/environment'
import {Client} from '../model/client'

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ClientService {
private url=`${base_url}/clients`
  constructor(private htttp:HttpClient) { }
  list(){
    return this.htttp.get<Client[]>(this.url)
  }
}
