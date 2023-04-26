import { Component, OnInit } from '@angular/core';
import { ReviewService } from './../../../service/review.service';
import { Review } from './../../../model/review';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { ReviewDialogComponent } from './review-dialog/review-dialog.component';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit{
  dataSource: MatTableDataSource  <Review> = new MatTableDataSource();
  list: Review[] = [];
  displayedColumns: string[] = ['id', 'content', 'date', 'likes', 'Client_id', 'Psychologist_id', 'actions'];

  private idMayor: number = 0;

  constructor(private RevS: ReviewService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.RevS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.RevS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.RevS.getConfirmDelete().subscribe(data => {
      data == true ? this.delete(this.idMayor) : false;
    });
  }
  filter(e:any){
    this.dataSource.filter=e.target.value.trim();
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ReviewDialogComponent);
  }
  delete(id: number) {
    this.RevS.delete(id).subscribe(() => {
      this.RevS.list().subscribe(data => {
        this.RevS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }
}
