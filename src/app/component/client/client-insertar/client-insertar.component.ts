import { ClientService } from './../../../service/client.service';
import { Client } from './../../../model/client';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import * as moment from 'moment';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Gender } from 'src/app/model/gender';
import { UserStatus } from 'src/app/model/UserStatus';
import { GenderService } from 'src/app/service/gender.service';
import { UserStatusService } from 'src/app/service/UserStatus.service';
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

  listaGender: Gender[] = [];
  listarUserStatus: UserStatus[] = [];

  idGenderSeleccionado: number = 0;
  idUserStatusSeleccionado: number = 0;

  constructor(
    private pC: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private gS: GenderService,
    private uS: UserStatusService
  ) {}

  ngOnInit(): void {
    this.gS.list().subscribe((dataGender) => {
      this.listaGender = dataGender;
    });
    this.uS.list().subscribe((dataUserStatus) => {
      this.listarUserStatus = dataUserStatus;
    });

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
      userStatus: new FormControl(),
      gender: new FormControl(),
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
    this.client.userStatus.status = this.form.value['userStatus.status'];
    this.client.gender.gender = this.form.value['gender.gender'];

    if (this.idGenderSeleccionado > 0) {
      let gen = new Gender();
      gen.idGender = this.idGenderSeleccionado;
      this.client.gender = gen;
    }
    if (this.idUserStatusSeleccionado > 0) {
      let ustatus = new UserStatus();
      ustatus.idUS = this.idUserStatusSeleccionado;
      this.client.userStatus = ustatus;
    }

    if (this.edicion) {
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
    this.router.navigate(['pages/clients']);
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
          userStatus: new FormControl(data.userStatus.status),
          gender: new FormControl(data.gender.gender),
        });
        this.idGenderSeleccionado = data.gender.idGender;
        this.idUserStatusSeleccionado = data.userStatus.idUS;
      });
    }
  }
}
