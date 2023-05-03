import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/service/payment.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-dialogo',
  templateUrl: './payment-dialogo.component.html',
  styleUrls: ['./payment-dialogo.component.css']
})
export class PaymentDialogoComponent implements OnInit {

  constructor(private pS: PaymentService, private dialogRef: MatDialogRef<PaymentDialogoComponent>){ }

  ngOnInit(): void { }

  confirmar(estado: boolean){
    this.pS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }


}
