import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appo-insertar',
  templateUrl: './appo-insertar.component.html',
  styleUrls: ['./appo-insertar.component.css']
})
export class AppoInsertarComponent implements OnInit{
  id: number = 0;
  form: FormGroup = new FormGroup({});
  appo: Appointment = new Appointment();
  mensaje: string = "Agregado";
  edicion: boolean = false;
  minFecha: Date = moment().add('days').toDate();
  variable_cambio: string = "";
  constructor(private pS: AppointmentService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null
      this.init();
      this.modificar();
    });
    this.form = new FormGroup({

      id: new FormControl(),
      date: new FormControl(),
      client_id: new FormControl(),
      PsychologistID: new FormControl(),
      appointment_id: new FormControl(),
    });
  }
  modificar(): void {
    if (this.id > 0) {
      this.variable_cambio = "Editar Cita";

    } else {
      this.variable_cambio = "Agregar nueva Cita";
    }
  }


  aceptar(): void {

    this.appo.id = this.form.value['id'];
    this.appo.date = this.form.value['date'];
    this.appo.client_id = this.form.value['client_id'];
    this.appo.PsychologistID = this.form.value['PsychologistID'];
    this.appo.AppointStatusID = this.form.value['appointment_id'];

    if (this.form.value['id'].length > 0 || this.form.value['date'].length > 0) {

      if (this.edicion) {
        //guargadar los datos
        this.pS.update(this.appo).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);

          })
        });

      } else {
        this.pS.insert(this.appo).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);

          });
        });

      }
      this.router.navigate(['Appointment']);
    } else { }
  }
  init() {
    if (this.edicion) {

      this.pS.listid(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          date: new FormControl(data.date),
          client_id: new FormControl(data.client_id),
          PsychologistID: new FormControl(data.PsychologistID),
          appointment_id: new FormControl(data.AppointStatusID),
        });
      });
    }
  }
}
