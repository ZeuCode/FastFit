import { Component, OnInit,ViewChild } from '@angular/core';
import { AppointmentStatus } from 'src/app/model/appointmentStatus';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentstatusService } from 'src/app/service/appointmentstatus.service';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentstatusDialogoComponent } from './appointmentstatus-dialogo/appointmentstatus-dialogo.component';
@Component({
  selector: 'app-appointmentstatus-list',
  templateUrl: './appointmentstatus-list.component.html',
  styleUrls: ['./appointmentstatus-list.component.css'],
})
export class AppointmentstatusListComponent implements OnInit {
  dataSource: MatTableDataSource<AppointmentStatus> = new MatTableDataSource();
  lista: AppointmentStatus[] = [];
  displayedColumns: string[] = ['numero', 'status', 'description'];
  private idMayor: number = 0;
  constructor(
    private pC: AppointmentstatusService,
    private dialog: MatDialog
  ) {}
  @ViewChild('paginator') paginator!: MatPaginator;
  ngOnInit(): void {
    this.pC.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pC.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pC.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(AppointmentstatusDialogoComponent);
  }

  eliminar(id: number) {
    this.pC.eliminar(id).subscribe(() => {
      this.pC.list().subscribe((data) => {
        this.pC.setList(data);
      });
    });
  }
}
