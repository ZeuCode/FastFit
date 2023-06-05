import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentStatus } from 'src/app/model/appointmentStatus';
import { AppointmentStatusComponent } from '../appointment-status.component';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentStatusService } from 'src/app/service/appointment-status.service';
import { AppstaDialogComponent } from './appsta-dialog/appsta-dialog.component';


@Component({
  selector: 'app-appo-status-listar',
  templateUrl: './appo-status-listar.component.html',
  styleUrls: ['./appo-status-listar.component.css'],
})
export class AppoStatusListarComponent implements OnInit {
  dataSource: MatTableDataSource<AppointmentStatus> = new MatTableDataSource();
  lista: AppointmentStatus[] = [];

  private idMayor: number = 0;
  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(
    private pS: AppointmentStatusService,
    private dialog: MatDialog
  ) {}
  displayedColumns: String[] = ['id', 'status', 'description', 'acciones'];

  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pS.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  //filtrado


  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(AppstaDialogComponent);
  }
  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data); /* se ejecuta la línea 27 */
      });
    });
  }
}
