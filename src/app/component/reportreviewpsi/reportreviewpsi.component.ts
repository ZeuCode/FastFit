import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReviewpsiDTO } from 'src/app/model/reviewpsiDTO';
import { ReviewService } from 'src/app/service/review.service';


@Component({
  selector: 'app-reportreviewpsi',
  templateUrl: './reportreviewpsi.component.html',
  styleUrls: ['./reportreviewpsi.component.css']
})
export class ReportreviewpsiComponent implements OnInit {
  dataSource: MatTableDataSource<ReviewpsiDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['psicologo','promedio','suma','max','min']
  constructor(private pS: ReviewService) { }
  ngOnInit(): void {
    this.pS.byPsi().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  filter(e:any){
    this.dataSource.filter=e.target.value.trim();

  }
}
