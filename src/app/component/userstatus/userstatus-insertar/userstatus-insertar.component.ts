import { UserStatusService } from './../../../service/UserStatus.service';
import { UserStatus } from './../../../model/UserStatus';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-userstatus-insertar',
  templateUrl: './userstatus-insertar.component.html',
  styleUrls: ['./userstatus-insertar.component.css']
})
export class UserstatusInsertarComponent implements OnInit{


  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  Userstatus:  UserStatus = new  UserStatus();
  mensaje: string = '';

  constructor(private pS:  UserStatusService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      Status: new FormControl(),
      Description: new FormControl(),

    });
  }
  aceptar(): void {

    this.Userstatus.idUS= this.form.value['id'];
    this.Userstatus.status= this.form.value['Status'];
    this.Userstatus.description= this.form.value['Description'];

    if (this.form.value['Status'].length > 0) {
      this.pS.insert(this.Userstatus).subscribe((data) => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        });
      });
      this.router.navigate(['UserStatus']);
    } else {
      this.mensaje = 'Ingrese el nombre del estado de usuario!!';
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listarId(this.id).subscribe(data => {
        //this.propietario = data

        this.form = new FormGroup({
          id: new FormControl(data.idUS),
          Status: new FormControl(data.status),
          Description: new FormControl(data.description),

        });
        console.log(data);
      });
    }
  }
}




