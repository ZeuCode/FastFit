import { ClientService } from './../../../service/client.service';
import { Client } from './../../../model/client';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import * as moment from 'moment';

import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-client-insertar',
  templateUrl: './client-insertar.component.html',
  styleUrls: ['./client-insertar.component.css'],
})
export class ClientInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  client: Client = new Client();
  mensaje: string = '';
  constructor(private pC: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      userName: new FormControl(),
      password: new FormControl(),
      names: new FormControl(),
      lastNames: new FormControl(),
      emailAddress: new FormControl(),
      phoneNumber: new FormControl(),
      age: new FormControl(),
    });
  }

  aceptar(): void {
    this.client.id = this.form.value['id'];
    this.client.userName = this.form.value['userName'];
    this.client.password = this.form.value['password'];
    this.client.names = this.form.value['names'];
    this.client.lastNames= this.form.value['lastNames'];
    this.client.emailAddress= this.form.value['emailAddress'];
    this.client.phoneNumber = this.form.value['phoneNumber'];
    this.client.age = this.form.value['age'];
    if (this.form.value['userName'].length > 0) {
      this.pC.insert(this.client).subscribe((data) => {
        this.pC.list().subscribe((data) => {
          this.pC.setList(data);
        });
      });
      this.router.navigate(['clients']);
    } else {
      this.mensaje = 'Ingrese el nombre del cliente!!!!';
    }//Todo: soucionar el error que aparece cuando se da aceptar con los input vacios
  }



}
