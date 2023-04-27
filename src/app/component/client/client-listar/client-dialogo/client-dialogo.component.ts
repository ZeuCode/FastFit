import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-dialogo',
  templateUrl: './client-dialogo.component.html',
  styleUrls: ['./client-dialogo.component.css'],
})
export class ClientDialogoComponent implements OnInit {
  constructor(
    private pC: ClientService,
    private dialogRef: MatDialogRef<ClientDialogoComponent>
  ) {}
  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.pC.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
