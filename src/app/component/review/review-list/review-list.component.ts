import { Component, OnInit } from '@angular/core';
import { ReviewService } from './../../../service/review.service';
import { Review } from './../../../model/review';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit{
  dataSource: MatTableDataSource<Review> = new MatTableDataSource();
  list: Review[] = [];
  displayedColumns: string[] = ['id', 'content', 'date', 'likes', 'Client_id', 'Psychologist_id', 'cedit'];

  constructor(private RevS: ReviewService) {}
  ngOnInit(): void {
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
