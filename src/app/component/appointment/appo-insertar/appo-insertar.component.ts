import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentStatus } from 'src/app/model/appointmentStatus';
import { AppointmentStatusService } from 'src/app/service/appointment-status.service';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appo-insertar',
  templateUrl: './appo-insertar.component.html',
  styleUrls: ['./appo-insertar.component.css'],
})
export class AppoInsertarComponent implements OnInit {
  id: number = 0;
  form: FormGroup = new FormGroup({});
  appo: Appointment = new Appointment();
  mensaje: string = 'Agregado';
  edicion: boolean = false;
  minFecha: Date = moment().add('days').toDate();
  variable_cambio: string = '';
  // lo ultimo agregado
  listastatus: AppointmentStatus[] = [];
  idApStatSelected: number = 0;
  //agregando appointment service
  constructor(
    private pS: AppointmentService,
    private router: Router,
    private route: ActivatedRoute,
    private sS: AppointmentStatusService
  ) {}
  ngOnInit(): void {
    this.sS.list().subscribe((data) => {
      this.listastatus = data;
    });
    this.route.params.subscribe((data: Params) => {
      this.id = data['idAppointment'];
      this.edicion = data['idAppointment'] != null;
      this.init();
      this.modificar();
      this.form = new FormGroup({
        idAppointment: new FormControl(),
        date: new FormControl(),
        // client: new FormControl(),
        //psychologist: new FormControl(),
        //agregado form de status
        appointmentStatus: new FormControl(),
      });
    });
  }
  modificar(): void {
    if (this.id > 0) {
      this.variable_cambio = 'Editar Cita';
    } else {
      this.variable_cambio = 'Agregar nueva Cita';
    }
  }

  aceptar(): void {
    this.appo.idAppointment = this.form.value['id'];
    this.appo.date = this.form.value['date'];
    // this.appo.client = this.form.value['client_id'];
    // this.appo.psychologist = this.form.value['PsychologistID'];
    this.appo.appointmentStatus.id = this.form.value['AppointStatus.id'];
    if (this.idApStatSelected > 0) {
      let a = new AppointmentStatus();
      a.id = this.idApStatSelected;
      this.appo.appointmentStatus = a;
      this.pS.insert(this.appo).subscribe(() => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        });
      });
    }
    if (this.form.value['idAppointment'].length > 0) {
      if (this.edicion) {
        //guargadar los datos
        this.pS.update(this.appo).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.appo).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['Appointments']);
    } else {
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listid(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idAppointment: new FormControl(data.idAppointment),
          date: new FormControl(data.date),
          //  client: new FormControl(data.client),
          // psychologist: new FormControl(data.psychologist),
          appointmentStatus: new FormControl(data.appointmentStatus),
        });
      });
    }
  }
}
