import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppointmentstatusService } from 'src/app/service/appointmentstatus.service';

@Component({
  selector: 'app-appointmentstatus-dialogo',
  templateUrl: './appointmentstatus-dialogo.component.html',
  styleUrls: ['./appointmentstatus-dialogo.component.css']
})
export class AppointmentstatusDialogoComponent implements OnInit {
  constructor(
    private pC: AppointmentstatusService,
    private dialogRef: MatDialogRef<AppointmentstatusDialogoComponent>
  ) {}
  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.pC.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
