import { Component, OnInit} from '@angular/core';
import { payment } from 'src/app/model/payment';
import{MatTableDataSource} from '@angular/material/table';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment-listar',
  templateUrl: './payment-listar.component.html',
  styleUrls: ['./payment-listar.component.css']
})

export class PaymentListarComponent {

  dataSource: MatTableDataSource<payment>=new MatTableDataSource();
  lista:payment[]=[];

  constructor(private pS:PaymentService){
  }

  displayedColumns:String[]=['numero','codigoPago','fecha','tarjeta','cliente','psicologo','estado']
  ngOnInit(): void {
    this.pS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    }

    )
  }
}
