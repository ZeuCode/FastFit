import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';
import { AppoDialogoComponent } from './appo-dialogo/appo-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-appo-listar',
  templateUrl: './appo-listar.component.html',
  styleUrls: ['./appo-listar.component.css'],
})
export class AppoListarComponent implements OnInit {
  role: string = '';
  dataSource: MatTableDataSource<Appointment> = new MatTableDataSource();
  lista: Appointment[] = [];

  private idMayor: number = 0;
  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(
    private pS: AppointmentService,
    private dialog: MatDialog,
    private ls: LoginService
  ) {}
  displayedColumns: String[] = [
    'idAppointment',
    'client',
    'appointmentStatus',
    'turn',
    'ceditar',
  ];
  ngOnInit(): void {
    this.role = this.ls.showRole();
    console.log(this.role);
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
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(AppoDialogoComponent);
  }
  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data); /* se ejecuta la línea 27 */
      });
    });
  }
  getAppointmentsByFecha() {
    this.pS.get_LIST_Fecha_filtro().subscribe((appointments) => {
      // Process the appointments received from the service
      // For example, you can assign the appointments to a property in your component:
      this.lista = appointments;
    });
  }
}
