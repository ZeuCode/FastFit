import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppointmentStatusService } from 'src/app/service/appointment-status.service';

@Component({
  selector: 'app-appsta-dialog',
  templateUrl: './appsta-dialog.component.html',
  styleUrls: ['./appsta-dialog.component.css']
})
export class AppstaDialogComponent {
  constructor(private gS: AppointmentStatusService, private dialogRef: MatDialogRef<AppstaDialogComponent>){ }

  ngOnInit(): void {
  }

  confirmar(estado: boolean){
    this.gS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
