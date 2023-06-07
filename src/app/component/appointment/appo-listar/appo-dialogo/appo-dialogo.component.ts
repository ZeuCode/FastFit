import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appo-dialogo',
  templateUrl: './appo-dialogo.component.html',
  styleUrls: ['./appo-dialogo.component.css']
})
export class AppoDialogoComponent implements OnInit{
  constructor(private pS: AppointmentService,
    private dialogRef: MatDialogRef<AppoDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
