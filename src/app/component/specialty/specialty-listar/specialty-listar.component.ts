import { Component,OnInit, ViewChild } from '@angular/core';
import { specialty } from 'src/app/model/especialidad';
import { MatTableDataSource } from '@angular/material/table';
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { SpecialtyDialogComponent } from './specialty-dialog/specialty-dialog.component';

@Component({
  selector: 'app-specialty-listar',
  templateUrl: './specialty-listar.component.html',
  styleUrls: ['./specialty-listar.component.css']
})
export class SpecialtyListarComponent implements OnInit{
  dataSource: MatTableDataSource<specialty> = new MatTableDataSource();
  lista: specialty[] = [];
  private idMayor: number = 0;

  constructor(private pS: EspecialidadService, private dialog: MatDialog) { }

  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: String[] = [
    'id',
    'name',
    'description',
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
    this.dialog.open(SpecialtyDialogComponent);
  }

  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);
      });
    });
  }




}
