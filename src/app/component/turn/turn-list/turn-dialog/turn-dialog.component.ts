import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TurnService } from 'src/app/service/turn.service';

@Component({
  selector: 'app-turn-dialog',
  templateUrl: './turn-dialog.component.html',
  styleUrls: ['./turn-dialog.component.css']
})
export class TurnDialogComponent implements OnInit{
  constructor(private turS: TurnService,
  private dialogRef: MatDialogRef<TurnDialogComponent>){  }
  ngOnInit(): void { }
  confirm(estado: boolean) {
    this.turS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
