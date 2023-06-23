import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Review } from 'src/app/model/review';
import { LoginService } from 'src/app/service/login.service';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-reportepsireview',
  templateUrl: './reportepsireview.component.html',
  styleUrls: ['./reportepsireview.component.css']
})
export class ReportepsireviewComponent implements OnInit{

  role:string="";

  dataSource: MatTableDataSource  <Review> = new MatTableDataSource();
  list: Review[] = [];
  displayedColumns: string[] = ['content', 'date', 'likes', 'client_id', 'psychologist_id'];

  constructor(
    private RevS: ReviewService,
    private ls:LoginService) {}

  ngOnInit(): void {

    this.role=this.ls.showRole();
    console.log(this.role);

    this.RevS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.RevS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  filter(e:any){
    this.dataSource.filter=e.target.value.trim();

  }

}
