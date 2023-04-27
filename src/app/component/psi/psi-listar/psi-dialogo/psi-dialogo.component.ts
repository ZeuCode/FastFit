import { Component,OnInit } from '@angular/core';
import { PsiService } from 'src/app/service/psi.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-psi-dialogo',
  templateUrl: './psi-dialogo.component.html',
  styleUrls: ['./psi-dialogo.component.css']
})
export class PsiDialogoComponent implements OnInit {
constructor(private pS: PsiService,
  private dialogRef: MatDialogRef<PsiDialogoComponent>){  }
  ngOnInit(): void { }
  confirmar(estado: boolean) {
    this.pS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
