import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Gender } from 'src/app/model/gender';
import { GenderService } from 'src/app/service/gender.service';
import { GenderDialogComponent } from './gender-dialog/gender-dialog.component';

@Component({
  selector: 'app-gender-listar',
  templateUrl: './gender-listar.component.html',
  styleUrls: ['./gender-listar.component.css']
})
export class GenderListarComponent implements OnInit{

  dataSource: MatTableDataSource<Gender> = new MatTableDataSource();
  lista: Gender[] = [];
  private idMayor: number = 0;

  constructor(private pS: GenderService, private dialog: MatDialog) { }
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: String[] = [
    'id',
    'gender',
    'abbreviation',
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
    this.dialog.open(GenderDialogComponent);

  }

  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);
      });
    });
  }

}
