import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GenderService } from 'src/app/service/gender.service';

@Component({
  selector: 'app-gender-dialog',
  templateUrl: './gender-dialog.component.html',
  styleUrls: ['./gender-dialog.component.css']
})
export class GenderDialogComponent {
  constructor(private gS: GenderService, private dialogRef: MatDialogRef<GenderDialogComponent>){ }

  ngOnInit(): void {
  }

  confirmar(estado: boolean){
    this.gS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
