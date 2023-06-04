import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { AppointmentStatus } from 'src/app/model/appointmentStatus';
import { AppointmentStatusComponent } from '../appointment-status.component';
import { AppointmentStatusService } from 'src/app/service/appointment-status.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-appo-status-ingresar',
  templateUrl: './appo-status-ingresar.component.html',
  styleUrls: ['./appo-status-ingresar.component.css']
})
export class AppoStatusIngresarComponent implements OnInit{
  id: number = 0;
  form: FormGroup = new FormGroup({});
  appostat: AppointmentStatus = new AppointmentStatus();
  mensaje: string = "Agregado";
  edicion: boolean = false;
  minFecha: Date = moment().add('days').toDate();
  variable_cambio: string = "";
  // lo ultimo agregado
  lista_status:AppointmentStatus[]=[];
  idApStatSelected: number = 0;
  //agregando appointment service
  constructor(private pS: AppointmentStatusService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null
      this.init();
      this.modificar();
    });
    this.form = new FormGroup({

      id: new FormControl(),
      status: new FormControl(),
      description: new FormControl(),


    });
  }
  modificar(): void {
    if (this.id > 0) {
      this.variable_cambio = "Editar Cita Estado";

    } else {
      this.variable_cambio = "Agregar nueva Estado de Cita";
    }
  }


  aceptar(): void {

    this.appostat.id = this.form.value['id'];
    this.appostat.status = this.form.value['status'];
    this.appostat.description = this.form.value['description'];

    if (this.form.value['id'].length > 0|| this.form.value['status'] ) {

      if (this.edicion) {
        //guargadar los datos
        this.pS.update(this.appostat).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);

          })
        });

      } else {
        this.pS.insert(this.appostat).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);

          });
        });

      }
      this.router.navigate(['AppointmentStatus']);
    } else { }
  }
  init() {
    if (this.edicion) {

      this.pS.listid(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          status: new FormControl(data.status),
          description: new FormControl(data.description),

        });
      });
    }
  }
}
