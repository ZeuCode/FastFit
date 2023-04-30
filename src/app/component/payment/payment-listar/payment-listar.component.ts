import { Component, OnInit, ViewChild } from '@angular/core';
import { payment } from 'src/app/model/payment';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentService } from 'src/app/service/payment.service';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { PaymentDialogoComponent } from './payment-dialogo/payment-dialogo.component';

@Component({
  selector: 'app-payment-listar',
  templateUrl: './payment-listar.component.html',
  styleUrls: ['./payment-listar.component.css'],
})

export class PaymentListarComponent {

  dataSource: MatTableDataSource<payment> = new MatTableDataSource();
  lista: payment[] = [];
  private idMayor: number = 0;

  constructor(private pS: PaymentService, private dialog: MatDialog) { }
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: String[] = [
    'id',
    'codigoPago',
    'idAppointment',
    'tarjeta',
    'fecha',
    'moneda',
    'importe',
    'usuario',
    'ceditar',
  ];

  ngOnInit(): void {

    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }


  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PaymentDialogoComponent);

  }

  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);
      });
    });
  }



}
