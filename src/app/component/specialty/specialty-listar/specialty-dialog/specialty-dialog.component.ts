import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-specialty-dialog',
  templateUrl: './specialty-dialog.component.html',
  styleUrls: ['./specialty-dialog.component.css']
})
export class SpecialtyDialogComponent implements OnInit {
  constructor(private pS: EspecialidadService, private dialogRef: MatDialogRef<SpecialtyDialogComponent>){ }

  ngOnInit(): void {
  }

  confirmar(estado: boolean){
    this.pS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
