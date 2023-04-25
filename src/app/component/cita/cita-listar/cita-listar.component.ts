import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitaService } from 'src/app/service/cita.service';
import { Citas } from 'src/app/model/cita';
import { MatDialog } from '@angular/material/dialog'
import { CitaDialogoComponent } from './cita-dialogo/cita-dialogo.component';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.css']
})

export class CitaListarComponent implements OnInit {


  dataSource: MatTableDataSource<Citas> = new MatTableDataSource();
  lista: Citas[] = [];

  private idMayor: number = 0;
  constructor(private pS: CitaService, private dialog:MatDialog) {

  }
  displayedColumns: String[] = [
    'id',
    'date',
    'client_id',
    'PsychologistID',
    'AppointStatusID',
    'ceditar',
 ]
  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  //filtrado
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CitaDialogoComponent);
  }
  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }
}
