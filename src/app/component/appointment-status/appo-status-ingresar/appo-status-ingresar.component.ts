import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentStatus } from 'src/app/model/appointmentStatus';
import { AppointmentStatusService } from 'src/app/service/appointment-status.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-appo-status-ingresar',
  templateUrl: './appo-status-ingresar.component.html',
  styleUrls: ['./appo-status-ingresar.component.css'],
})
export class AppoStatusIngresarComponent implements OnInit {
  id: number = 0;

  form: FormGroup = new FormGroup({});
  appostat: AppointmentStatus = new AppointmentStatus();
  mensaje: string = 'Agregado';
  edicion: boolean = false;
  // lo ultimo agregado
  //agregando appointment service
  constructor(
    private pS: AppointmentStatusService,
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
    this.appostat.idAppStatus = this.form.value['id'];
    this.appostat.status = this.form.value['status'];
    this.appostat.description = this.form.value['description'];

    if (this.form.value['status'].length > 0) {
      if (this.edicion) {
        //guargadar los datos
        this.pS.update(this.appostat).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        console.log(this.appostat);
        this.pS.insert(this.appostat).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['pages/appointmentstatus']);
    } else {
      this.mensaje = 'write status!!';
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listid(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idAppStatus),
          status: new FormControl(data.status),
          description: new FormControl(data.description),
        });
        console.log(data);
      });
    }
  }
}
