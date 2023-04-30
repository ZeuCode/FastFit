import { ClientService } from './../../../service/client.service';
import { Client } from './../../../model/client';

import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ClientDialogoComponent } from './client-dialogo/client-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-client-listar',
  templateUrl: './client-listar.component.html',
  styleUrls: ['./client-listar.component.css'],
})
export class ClientListarComponent implements OnInit {
  dataSource: MatTableDataSource<Client> = new MatTableDataSource();
  lista: Client[] = [];
  displayedColumns: string[] = [
    'numero',
    'username',
    'password',
    'names',
    'lastNames',
    'edad',
    'emailAddress',
    'phoneNumber',
    'ceditar',
  ];
  private idMayor: number = 0;
  constructor(private pC: ClientService, private dialog: MatDialog) {}
  @ViewChild('paginator') paginator!: MatPaginator;

  ngOnInit(): void {
    this.pC.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pC.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pC.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ClientDialogoComponent);
  }

  eliminar(id: number) {
    this.pC.eliminar(id).subscribe(() => {
      this.pC.list().subscribe((data) => {
        this.pC.setList(data);
      });
    });
  }
}
