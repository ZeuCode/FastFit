import { ClientService } from './../../../service/client.service';
import { Client } from './../../../model/client';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import * as moment from 'moment';

import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-client-insertar',
  templateUrl: './client-insertar.component.html',
  styleUrls: ['./client-insertar.component.css'],
})
export class ClientInsertarComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  client: Client = new Client();
  mensaje: string = '';
  constructor(
    private pC: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

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

    this.client.idClient = this.form.value['id'];
    this.client.userName = this.form.value['userName'];
    this.client.password = this.form.value['password'];
    this.client.names = this.form.value['names'];
    this.client.lastNames = this.form.value['lastNames'];
    this.client.emailAddress = this.form.value['emailAddress'];
    this.client.phoneNumber = this.form.value['phoneNumber'];
    this.client.age = this.form.value['age'];

    if (



      // this.form.value['id'].length *
      //   this.form.value['userName'].length *
      //   this.form.value['password'].length *
      //   this.form.value['names'].length *
      //   this.form.value['lastNames'].length *
      //   this.form.value['emailAddress'].length *
      //   this.form.value['phoneNumber'].length *
      //   this.form.value['age'].length > 0
      this.form.value['userName'].length > 0
    ) {
      //guardar lo actualizado
      if (this.edicion) {
        //
        this.pC.update(this.client).subscribe(() => {
          this.pC.list().subscribe((data) => {
            this.pC.setList(data);
          });
        });
      } else {
        this.pC.insert(this.client).subscribe((data) => {
          this.pC.list().subscribe((data) => {
            this.pC.setList(data);
          });
        });
      }

      this.router.navigate(['clients']);
    } else {
      this.mensaje = 'Ingrese el nombre del cliente!!!!';
    } //Todo: soucionar el error que aparece cuando se da aceptar con los input vacios
  }
  init() {
    if (this.edicion) {
      this.pC.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idClient),
          userName: new FormControl(data.userName),
          password: new FormControl(data.password),
          names: new FormControl(data.names),
          lastNames: new FormControl(data.lastNames),
          emailAddress: new FormControl(data.emailAddress),
          phoneNumber: new FormControl(data.phoneNumber),
          age: new FormControl(data.age),
        });
      });
    }
  }
}
