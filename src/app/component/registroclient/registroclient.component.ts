import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserStatus } from 'src/app/model/UserStatus';
import { Client } from 'src/app/model/client';
import { Gender } from 'src/app/model/gender';
import { ClientService } from 'src/app/service/client.service';
import { GenderService } from 'src/app/service/gender.service';

@Component({
  selector: 'app-registroclient',
  templateUrl: './registroclient.component.html',
  styleUrls: ['./registroclient.component.css'],
})
export class RegistroclientComponent implements OnInit {
  id: number = 0;

  form: FormGroup = new FormGroup({});
  client: Client = new Client();
  mensaje: string = '';

  listaGender: Gender[] = [];

  idGenderSeleccionado: number = 0;

  constructor(
    private pC: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private gS: GenderService
  ) {}

  ngOnInit(): void {
    this.gS.listg().subscribe((dataGender) => {
      this.listaGender = dataGender;
    });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
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
    this.client.gender.gender = this.form.value['gender.gender'];

    if (this.idGenderSeleccionado > 0) {

      let gen = new Gender();
      gen.idGender = this.idGenderSeleccionado;
      this.client.gender = gen;

      let ustatus = new UserStatus();
      ustatus.idUS = 1;
      this.client.userStatus = ustatus;

      this.pC.insertc(this.client).subscribe((data) => {
        this.pC.listc().subscribe((data) => {
          this.pC.setList(data);
        });
      });
    }
    this.router.navigate(['login']);
  }
  init() {}
}
