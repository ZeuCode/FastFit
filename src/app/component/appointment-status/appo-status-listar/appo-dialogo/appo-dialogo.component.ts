import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppointmentStatusService } from 'src/app/service/appointment-status.service';

@Component({
  selector: 'app-appo-dialogo',
  templateUrl: './appo-dialogo.component.html',
  styleUrls: ['./appo-dialogo.component.css']
})
export class AppoDialogoComponent implements OnInit {
  constructor(private pS: AppointmentStatusService,
    private dialogRef: MatDialogRef<AppoDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
