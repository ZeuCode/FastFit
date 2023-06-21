import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
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

  constructor(
    private pC: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private gS: GenderService
  ) {}

  ngOnInit(): void {
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
    this.client.userStatus.idUS = 1;
    this.client.gender.gender = this.form.value['gender'];

    this.pC.insert(this.client).subscribe((data) => {
      this.pC.list().subscribe((data) => {
        this.pC.setList(data);
      });
    });

    this.router.navigate(['login']);
  }
  init() {}
}
