import { Component,OnInit } from '@angular/core';
import { CitaService } from 'src/app/service/cita.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cita-dialogo',
  templateUrl: './cita-dialogo.component.html',
  styleUrls: ['./cita-dialogo.component.css']
})
export class CitaDialogoComponent implements OnInit{
  constructor(private pS: CitaService,
    private dialogRef: MatDialogRef<CitaDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }

}
