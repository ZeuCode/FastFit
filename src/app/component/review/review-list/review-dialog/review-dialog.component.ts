import { Component,OnInit } from '@angular/core';
import { ReviewService } from 'src/app/service/review.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css']
})
export class ReviewDialogComponent implements OnInit{
  constructor(private revS: ReviewService,
  private dialogRef: MatDialogRef<ReviewDialogComponent>){  }
  ngOnInit(): void { }
  confirmar(estado: boolean) {
    this.revS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
