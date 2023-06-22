import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  displayedColumns: string[] = ['nombrecli', 'content', 'points', 'date'];

  private idMayor: number = 0;
  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(private RevS: ReviewService, private dialog: MatDialog, private ls:LoginService) {}
  ngOnInit(): void {

    this.role=this.ls.showRole();
    console.log(this.role);

    this.RevS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.RevS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  filter(e:any){
    this.dataSource.filter=e.target.value.trim();

  }

}
