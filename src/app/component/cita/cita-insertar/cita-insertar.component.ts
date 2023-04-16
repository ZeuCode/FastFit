import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/service/cita.service';
import { Citas } from 'src/app/model/cita';

@Component({
  selector: 'app-insertar',
  templateUrl: './cita-insertar.component.html',
  styleUrls: ['./cita-insertar.component.css'],
})
export class CitaInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  cita: Citas = new Citas();
  mensaje: string = "Agregado";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(private pS: CitaService, private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      date: new FormControl(),
      client_id: new FormControl(),
      PsychologistID: new FormControl(),
      appointment_id: new FormControl(),
    })
  }

  aceptar(): void {
    this.cita.id = this.form.value['id'];
    this.cita.date = this.form.value['date'];
    this.cita.client_id = this.form.value['client_id'];
    this.cita.PsychologistID = this.form.value['PsychologistID'];
    this.cita.AppointStatusID = this.form.value['appointment_id'];
    if (this.form.value['id'].length > 0) {
      this.pS.insert(this.cita).subscribe((data) => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        })
      })
      this.router.navigate(['citas']);
    }else{
      this.mensaje='Ingrese la cita!!'
    }

  }



}
