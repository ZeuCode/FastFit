import { UserStatusService } from './../../../service/UserStatus.service';
import { UserStatus } from './../../../model/UserStatus';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { UserstatusDialogoComponent } from './userstatus-dialogo/userstatus-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-userstatus-listar',
  templateUrl: './userstatus-listar.component.html',
  styleUrls: ['./userstatus-listar.component.css']
})
export class UserstatusListarComponent implements OnInit {

  dataSource: MatTableDataSource<UserStatus> = new MatTableDataSource();
  lista: UserStatus[] = [];
  displayedColumns: string[] = ['id', 'Status', 'Description','ceditar'];
  private idMayor: number = 0;
  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(private pS: UserStatusService, private dialog: MatDialog) {}
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
    this.dialog.open(UserstatusDialogoComponent);
  }
  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }



}
