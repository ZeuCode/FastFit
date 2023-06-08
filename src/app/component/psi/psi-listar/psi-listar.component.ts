import { PsiService } from './../../../service/psi.service';
import { Psi } from './../../../model/psi';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { PsiDialogoComponent } from './psi-dialogo/psi-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-psi-listar',
  templateUrl: './psi-listar.component.html',
  styleUrls: ['./psi-listar.component.css'],
})
export class PsiListarComponent implements OnInit {
  dataSource: MatTableDataSource<Psi> = new MatTableDataSource();
  lista: Psi[] = [];
  displayedColumns: string[] = ['id', 'userName','names', 'lastNames', 'emailAddress', 'phoneNumber', 'age', 'rating','userStatus','genero','specialty','ceditar'];
  private idMayor: number = 0;

  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(private pS: PsiService, private dialog: MatDialog) {}

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
    this.dialog.open(PsiDialogoComponent);
  }

  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
