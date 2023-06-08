import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TurnstatusService } from 'src/app/service/turnstatus.service';

@Component({
  selector: 'app-turnstatusdialog',
  templateUrl: './turnstatusdialog.component.html',
  styleUrls: ['./turnstatusdialog.component.css']
})
export class TurnstatusdialogComponent  implements OnInit{
  constructor(private revS: TurnstatusService,
  private dialogRef: MatDialogRef<TurnstatusdialogComponent>){  }
  ngOnInit(): void { }
  confirm(estado: boolean) {
    this.revS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
