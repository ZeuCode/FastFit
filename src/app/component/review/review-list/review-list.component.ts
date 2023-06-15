import { Component, OnInit,ViewChild } from '@angular/core';
import { ReviewService } from './../../../service/review.service';
import { Review } from './../../../model/review';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { ReviewDialogComponent } from './review-dialog/review-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit{

  role:string="";

  dataSource: MatTableDataSource  <Review> = new MatTableDataSource();
  list: Review[] = [];
  displayedColumns: string[] = ['id', 'content', 'date', 'likes', 'client_id', 'psychologist_id', 'actions'];

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
