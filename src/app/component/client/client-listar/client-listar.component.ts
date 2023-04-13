import { ClientService } from './../../../service/client.service';
import { Client } from './../../../model/client';

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  ];
  constructor(private pC: ClientService) {}
  ngOnInit(): void {
    this.pC.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
