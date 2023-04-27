import { PsiService } from './../../../service/psi.service';
import { Psi } from './../../../model/psi';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-psi-insertar',
  templateUrl: './psi-insertar.component.html',
  styleUrls: ['./psi-insertar.component.css'],
})
export class PsiInsertarComponent implements OnInit {

  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  psi: Psi = new Psi();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(private pS: PsiService, private router: Router, private route: ActivatedRoute) {}

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
      rating:new FormControl(),
      UserStatus_Id: new FormControl(),
      Speciality_id:new FormControl(),
      Gender_id: new FormControl(),
    });
  }
  aceptar(): void {

    this.psi.id= this.form.value['id'];
    this.psi.userName= this.form.value['userName'];
    this.psi.password= this.form.value['password'];
    this.psi.names= this.form.value['namesPsi'];
    this.psi.lastNames= this.form.value['lastNames'];
    this.psi.emailAddress= this.form.value['emailAddress'];
    this.psi.phoneNumber= this.form.value['phoneNumber'];
    this.psi.age= this.form.value['age'];
    this.psi.rating= this.form.value['rating'];
    this.psi.UserStatus_Id= this.form.value['UserStatus_Id'];
    this.psi.Speciality_id= this.form.value['Speciality_id'];
    this.psi.Gender_id= this.form.value['Gender_id'];


    if (this.form.value['userName'].length > 0) {
      this.pS.insert(this.psi).subscribe((data) => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        });
      });
      this.router.navigate(['psis']);
    } else {
      this.mensaje = 'Ingrese el nombre del psicologo!!';
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listarId(this.id).subscribe(data => {
        //this.propietario = data

        this.form = new FormGroup({
          id: new FormControl(data.id),
          userName: new FormControl(data.userName),
          password: new FormControl(data.password),
          names: new FormControl(data.names),
          lastNames: new FormControl(data.lastNames),

          emailAddress: new FormControl(data.emailAddress),
          phoneNumber: new FormControl(data.phoneNumber),
          age: new FormControl(data.age),
          rating: new FormControl(data.rating),
          UserStatus_Id: new FormControl(data.UserStatus_Id),

          Speciality_id: new FormControl(data.Speciality_id),
          Gender_id: new FormControl(data.Gender_id),


        });
        console.log(data);
      });
    }
  }
}




