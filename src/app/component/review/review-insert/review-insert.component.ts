import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Review } from 'src/app/model/review';
import * as moment from 'moment';
import { ReviewService } from 'src/app/service/review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-insert',
  templateUrl: './review-insert.component.html',
  styleUrls: ['./review-insert.component.css']
})
export class ReviewInsertComponent implements OnInit{

  form:FormGroup=new FormGroup({});
  review:Review=new Review();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor(private revS: ReviewService, private router:Router) { }

  ngOnInit():void {
    this.form=new FormGroup({
      id:new FormControl(),
      content:new FormControl(),
      date:new FormControl(),
      likes:new FormControl(),
      Client_id:new FormControl(),
      Psychologist_id:new FormControl()
    })
  }
  accept(): void {

    this.review.id = this.form.value['id'];
    this.review.content = this.form.value['content'];
    this.review.date = this.form.value['date'];
    this.review.likes = this.form.value['likes'];
    this.review.Client_id = this.form.value['Client_id'];
    this.review.Psychologist_id = this.form.value['Psychologist_id'];

    if (this.form.value['content'].length > 0) {
      this.revS.insert(this.review).subscribe((data) => {
        this.revS.list().subscribe((data) => {
          this.revS.setList(data);
        })
      })
      this.router.navigate(['reviews']);
    }else{
      this.mensaje='write comment!!'
    }
  }
}

