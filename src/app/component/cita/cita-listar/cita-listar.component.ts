import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitaService } from 'src/app/service/cita.service';
import { Citas } from 'src/app/model/cita';
@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.css']
})
export class CitaListarComponent implements OnInit {


  dataSource: MatTableDataSource<Citas> = new MatTableDataSource();
  lista: Citas[] = [];

  constructor(private pS: CitaService) {

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
    }

    )
  }
  //filtrado
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
