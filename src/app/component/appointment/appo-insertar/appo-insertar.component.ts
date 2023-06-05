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
  appo: Appointment = new Appointment();
  mensaje: string = 'Agregado';
  edicion: boolean = false;
  minFecha: Date = moment().add('days').toDate();
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

      this.sS.list().subscribe((datasta) => {
        this.listastatus = datasta;
      });
      this.cS.list().subscribe((datacl) => {
        this.listaclient = datacl;
      });
      this.iS.list().subscribe((datapsy) => {
        this.listapsi = datapsy;
      });
    });
    this.form = new FormGroup({
      idAppointment: new FormControl(),
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
    this.appo.idAppointment = this.form.value['id'];
    this.appo.date = this.form.value['date'];
    this.appo.client.id = this.form.value['client'];
    this.appo.psychologist.idPsi = this.form.value['psychologist'];
    this.appo.appointmentStatus.id = this.form.value['AppointStatus'];
    if (this.form.value['client'] > 0) {
      if (this.idApStatSelected > 0) {
        let a = new AppointmentStatus();
        a.id = this.idApStatSelected;
        this.appo.appointmentStatus = a;
      }
      if (this.idclientSelected > 0) {
        let c = new Client();
        c.id = this.idclientSelected;
        this.appo.client = c;
      }
      if (this.idpsySelected > 0) {
        let i = new Psi();
        i.idPsi = this.idpsySelected;
        this.appo.psychologist = i;
      }
      if (this.edicion) {
        this.pS.update(this.appo).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
        this.router.navigate(['Appointments']);
      } else {
        this.pS.insert(this.appo).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
        this.router.navigate(['Appointments']);
      }
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listid(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idAppointment: new FormControl(data.idAppointment),
          date: new FormControl(data.date),
          client: new FormControl(data.client.id),
          psychologist: new FormControl(data.psychologist.idPsi),
          appointmentStatus: new FormControl(data.appointmentStatus.id),
        });
        console.log(data);
      });
    }
  }
}
