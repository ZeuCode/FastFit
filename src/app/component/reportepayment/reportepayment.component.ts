import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { paymentRep1DTO } from 'src/app/model/reporte1DTO';
import { LoginService } from 'src/app/service/login.service';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-reportepayment',
  templateUrl: './reportepayment.component.html',
  styleUrls: ['./reportepayment.component.css']
})
export class ReportepaymentComponent implements OnInit {

  role:string="";

  dataSource: MatTableDataSource<paymentRep1DTO> = new MatTableDataSource();
  displayedColumns: string[] = ['Moneda', 'Cantidad', 'Total'];

  constructor(
    private pS: PaymentService,
    private ls:LoginService
  ){}

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);


    this.pS.bycurrency().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data)
    })

  }


}
