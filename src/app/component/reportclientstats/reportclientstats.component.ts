import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/model/client';
import { ClientStatsDTO } from 'src/app/model/clientStatsDTO';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-reportclientstats',
  templateUrl: './reportclientstats.component.html',
  styleUrls: ['./reportclientstats.component.css'],
})
export class ReportclientstatsComponent implements OnInit {


  dataSource: MatTableDataSource<ClientStatsDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['username','names','count1','count2']

  constructor(
    private cS: ClientService) {}
  ngOnInit(): void {

    this.cS.clientStats().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  filter(e:any){
    this.dataSource.filter=e.target.value.trim();

  }
}
