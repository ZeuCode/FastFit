import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentStatus } from 'src/app/model/appointmentStatus';
import { Client } from 'src/app/model/client';
import { Psi } from 'src/app/model/psi';
import { AppointmentStatusService } from 'src/app/service/appointment-status.service';
import { AppointmentService } from 'src/app/service/appointment.service';
import { ClientService } from 'src/app/service/client.service';
import { PsiService } from 'src/app/service/psi.service';

@Component({
  selector: 'app-appo-insertar',
  templateUrl: './appo-insertar.component.html',
  styleUrls: ['./appo-insertar.component.css'],
})
export class AppoInsertarComponent implements OnInit {
  id: number = 0;
  form: FormGroup = new FormGroup({});
  appointment: Appointment = new Appointment();
  mensaje: string = 'Agregado';
  edicion: boolean = false;

  minFecha: Date = moment().add(-1, 'days').toDate();

  variable_cambio: string = '';
  // lo ultimo agregado
  listastatus: AppointmentStatus[] = [];
  listaclient: Client[] = [];
  listapsi: Psi[] = [];
  idApStatSelected: number = 0;
  idclientSelected: number = 0;
  idpsySelected: number = 0;


  //agregando appointment service
  constructor(
    private pS: AppointmentService,
    private router: Router,
    private route: ActivatedRoute,
    private sS: AppointmentStatusService,
    private cS: ClientService,
    private iS: PsiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
      this.modificar();
    });
    this.sS.list().subscribe((datasta) => {
      this.listastatus = datasta;
    });
    this.cS.list().subscribe((datacl) => {
      this.listaclient = datacl;
    });
    this.iS.list().subscribe((datapsy) => {
      this.listapsi = datapsy;
    });
    this.form = new FormGroup({
      id: new FormControl(),
      date: new FormControl(),
      client: new FormControl(),
      psychologist: new FormControl(),
      appointmentStatus: new FormControl(),
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
    this.appointment.idAppointment = this.form.value['id'];
    this.appointment.date = this.form.value['date'];
    this.appointment.client.names = this.form.value['client.names'];
    this.appointment.psychologist.names = this.form.value['psychologist.names'];
    this.appointment.appointmentStatus.status =this.form.value['appointmentStatus.status'];

    if (this.idApStatSelected > 0) {
      let a = new AppointmentStatus();
      a.idAppStatus = this.idApStatSelected;
      this.appointment.appointmentStatus = a;
    }
    if (this.idclientSelected > 0) {
      let c = new Client();
      c.idClient = this.idclientSelected;
      this.appointment.client = c;
    }
    if (this.idpsySelected > 0) {
      let i = new Psi();
      i.idPsi = this.idpsySelected;
      this.appointment.psychologist = i;
    }

    if (this.edicion) {
      //guardar pS
      this.pS.update(this.appointment).subscribe(() => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        });
      });
    } else {
      //metodo insertar
      this.pS.insert(this.appointment).subscribe((data) => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        })
      })
    }
    this.router.navigate(['pages/appointments']);

  }

  init() {
    if (this.edicion) {
      this.pS.listid(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idAppointment),
          date: new FormControl(data.date),
          client: new FormControl(data.client.names),
          psychologist: new FormControl(data.psychologist.names),
          appointmentStatus: new FormControl(data.appointmentStatus.status),
        });
        console.log(data);
      });
    }
  }
}
