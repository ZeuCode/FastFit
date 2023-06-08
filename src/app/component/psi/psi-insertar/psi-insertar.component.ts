import { PsiService } from './../../../service/psi.service';
import { Psi } from './../../../model/psi';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { specialty } from 'src/app/model/especialidad';
import { EspecialidadService } from 'src/app/service/especialidad.service';
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
  listaSpecialty: specialty[] = [];
  idSpecialtySeleccionado: number = 0;
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor(
    private pS: PsiService,
    private router: Router,
    private route: ActivatedRoute,
    private sS: EspecialidadService,
  ) { }

  ngOnInit(): void {
    this.sS.list().subscribe(dataEsp => { this.listaSpecialty = dataEsp });

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
      rating: new FormControl(),
      userStatus: new FormControl(),
      Gender: new FormControl(),
      specialty: new FormControl(),
    });
  }

  aceptar(): void {

    console.log(this.psi.idPsi);

    this.psi.idPsi = this.form.value['id'];
    this.psi.userName = this.form.value['userName'];
    this.psi.password = this.form.value['password'];
    this.psi.names = this.form.value['namesPsi'];
    this.psi.lastNames = this.form.value['lastNames'];
    this.psi.emailAddress = this.form.value['emailAddress'];
    this.psi.phoneNumber = this.form.value['phoneNumber'];
    this.psi.age = this.form.value['age'];
    this.psi.rating = this.form.value['rating'];
    this.psi.userStatus.idUS = this.form.value['userStatus.idUS'];
    this.psi.Gender.id = this.form.value['Gender.id'];
    this.psi.specialty.name = this.form.value['specialty.name'];
    console.log(this.psi.idPsi);


    if (this.form.value['userName'].length > 0) {
      if (this.edicion) {
        this.pS.update(this.psi).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        let spec = new specialty();
        spec.idSpecialty = this.idSpecialtySeleccionado;
        this.psi.specialty = spec;
        this.pS.insert(this.psi).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          })
        })
      }
      this.router.navigate(['psis']);
    } else {
      this.mensaje = 'Ingrese el nombre del psicólogo!!'
    }
  }

  init() {
    if (this.edicion) {
      console.log(this.id);
      this.pS.listId(this.id).subscribe(data => {
        //this.propietario = data

        this.form = new FormGroup({
          id: new FormControl(data.idPsi),
          userName: new FormControl(data.userName),
          password: new FormControl(data.password),
          names: new FormControl(data.names),
          lastNames: new FormControl(data.lastNames),
          emailAddress: new FormControl(data.emailAddress),
          phoneNumber: new FormControl(data.phoneNumber),
          age: new FormControl(data.age),
          rating: new FormControl(data.rating),
          userStatus: new FormControl(data.userStatus.idUS),
          Gender: new FormControl(data.Gender.id),
          specialty: new FormControl(data.specialty.name)
        });
        console.log(data);
      });
    }
  }
}




