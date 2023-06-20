import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Turn } from 'src/app/model/turn';
import { TurnService } from 'src/app/service/turn.service';
import { TurnDialogComponent } from './turn-dialog/turn-dialog.component';

@Component({
  selector: 'app-turn-list',
  templateUrl: './turn-list.component.html',
  styleUrls: ['./turn-list.component.css']
})
export class TurnListComponent implements OnInit{
  dataSource: MatTableDataSource  <Turn> = new MatTableDataSource();
  list: Turn[] = [];
  displayedColumns: string[] = ['id', 'date', 'duration', 'TurnStatus','Psychologist_id', 'actions'];

  private idMayor: number = 0;

  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(private turS: TurnService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.turS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.turS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.turS.getConfirmDelete().subscribe(data => {
      data == true ? this.delete(this.idMayor) : false;
    });
  }
  filter(e:any){
    this.dataSource.filter=e.target.value.trim();

  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(TurnDialogComponent);
  }
  delete(id: number) {
    this.turS.delete(id).subscribe(() => {
      this.turS.list().subscribe(data => {
        this.turS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }
}
