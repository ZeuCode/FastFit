import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AppointmentStatus } from 'src/app/model/appointmentStatus';
import { AppointmentstatusService } from 'src/app/service/appointmentstatus.service';

@Component({
  selector: 'app-appointmentstatus-insert',
  templateUrl: './appointmentstatus-insert.component.html',
  styleUrls: ['./appointmentstatus-insert.component.css']
})
export class AppointmentstatusInsertComponent implements OnInit{
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  appStatus: AppointmentStatus = new AppointmentStatus();
  mensaje: string = '';
  constructor(
    private pC: AppointmentstatusService,
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
      status: new FormControl(),
      description: new FormControl(),
    });
  }

  aceptar(): void {

    this.appStatus.id = this.form.value['id'];
    this.appStatus.status = this.form.value['status'];
    this.appStatus.description = this.form.value['description'];

    if (



      // this.form.value['id'].length *
      //   this.form.value['userName'].length *
      //   this.form.value['password'].length *
      //   this.form.value['names'].length *
      //   this.form.value['lastNames'].length *
      //   this.form.value['emailAddress'].length *
      //   this.form.value['phoneNumber'].length *
      //   this.form.value['age'].length > 0
      this.form.value['status'].length > 0
    ) {
      //guardar lo actualizado
      if (this.edicion) {
        //
        this.pC.update(this.appStatus).subscribe(() => {
          this.pC.list().subscribe((data) => {
            this.pC.setList(data);
          });
        });
      } else {
        this.pC.insert(this.appStatus).subscribe((data) => {
          this.pC.list().subscribe((data) => {
            this.pC.setList(data);
          });
        });
      }

      this.router.navigate(['appointmentstatus']);
    } else {
      this.mensaje = 'Ingrese el nombre del cliente!!!!';
    } //Todo: soucionar el error que aparece cuando se da aceptar con los input vacios
  }
  init() {
    if (this.edicion) {
      this.pC.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          status: new FormControl(data.status),
          description: new FormControl(data.description),
        });
      });
    }
  }
}
