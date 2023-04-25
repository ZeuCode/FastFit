import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CitaService } from 'src/app/service/cita.service';
import { Citas } from 'src/app/model/cita';

@Component({
  selector: 'app-insertar',
  templateUrl: './cita-insertar.component.html',
  styleUrls: ['./cita-insertar.component.css'],
})
export class CitaInsertarComponent implements OnInit {
  id: number = 0;
  form: FormGroup = new FormGroup({});
  cita: Citas = new Citas();
  mensaje: string = "Agregado";
  edicion: boolean = false;
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(private pS: CitaService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null
      this.init();

    });
      this.form = new FormGroup({

        id: new FormControl(),
        date: new FormControl(),
        client_id: new FormControl(),
        PsychologistID: new FormControl(),
        appointment_id: new FormControl(),
      });
  }
  aceptar(): void {

    this.cita.id = this.form.value['id'];
    this.cita.date = this.form.value['date'];
    this.cita.client_id = this.form.value['client_id'];
    this.cita.PsychologistID = this.form.value['PsychologistID'];
    this.cita.AppointStatusID = this.form.value['appointment_id'];

    if (this.form.value['date'].length > 0) {

      if (this.edicion) {
        //guargadar los datos
        this.pS.update(this.cita).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          })
        });

      } else {
        this.pS.insert(this.cita).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });

      }
      this.router.navigate(['citas']);
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
