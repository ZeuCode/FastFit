import { Component,OnInit } from '@angular/core';
import { UserStatusService } from 'src/app/service/UserStatus.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-userstatus-dialogo',
  templateUrl: './userstatus-dialogo.component.html',
  styleUrls: ['./userstatus-dialogo.component.css']
})
export class UserstatusDialogoComponent {

  constructor(private pS: UserStatusService,
    private dialogRef: MatDialogRef<UserstatusDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
  }
  
