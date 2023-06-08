import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Turnstatus } from 'src/app/model/turnstatus';
import { TurnstatusService } from 'src/app/service/turnstatus.service';
import { TurnstatusdialogComponent } from './turnstatusdialog/turnstatusdialog.component';

@Component({
  selector: 'app-turnstatus-list',
  templateUrl: './turnstatus-list.component.html',
  styleUrls: ['./turnstatus-list.component.css']
})
export class TurnstatusListComponent implements OnInit{
  dataSource: MatTableDataSource  <Turnstatus> = new MatTableDataSource();
  list: Turnstatus[] = [];
  displayedColumns: string[] = ['id', 'status', 'description', 'actions'];

  private idMayor: number = 0;
  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(private RevS: TurnstatusService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.RevS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.RevS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.RevS.getConfirmDelete().subscribe(data => {
      data == true ? this.delete(this.idMayor) : false;
    });
  }
  filter(e:any){
    this.dataSource.filter=e.target.value.trim();

  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(TurnstatusdialogComponent);
  }
  delete(id: number) {
    this.RevS.delete(id).subscribe(() => {
      this.RevS.list().subscribe(data => {
        this.RevS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }
}
