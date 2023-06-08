import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Review } from 'src/app/model/review';
import { ReviewService } from 'src/app/service/review.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

let date: Date = new Date();//para asignar la fecha de manera automatica

@Component({
  selector: 'app-review-insert',
  templateUrl: './review-insert.component.html',
  styleUrls: ['./review-insert.component.css']
})
export class ReviewInsertComponent implements OnInit{

  id:number=0; ///update
  edition:boolean=false; //update

  form:FormGroup=new FormGroup({});
  review:Review=new Review();
  mensaje: string = '';

  constructor(private revS: ReviewService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit():void {

    this.route.params.subscribe((data:Params)=>{ //update
      this.id=data['id'];
      this.edition=data['id']!=null;
      this.Init();
    })

    this.form=new FormGroup({
      id:new FormControl(),
      content:new FormControl(),
      date:new FormControl(),
      likes:new FormControl(),
      client_id:new FormControl(),
      psychologist_id:new FormControl()
    })
  }
  //Init() {
  //  throw new Error('Method not implemented.');
  //}
  accept(): void {

    this.review.idReview = this.form.value['id'];
    this.review.content = this.form.value['content'];
    //this.review.date = this.form.value['date'];
    this.review.date = date;
    this.review.likes = this.form.value['likes'];
    this.review.client_id = this.form.value['client_id'];
    this.review.psychologist_id = this.form.value['psychologist_id'];

    if (this.form.value['content'].length > 0) {

      if (this.edition) {
        //guardar pS
        this.revS.update(this.review).subscribe(()=>{
          this.revS.list().subscribe((data) => {
            this.revS.setList(data);
          });
        });

      }else{
        //metodo insertar
        this.revS.insert(this.review).subscribe((data) => {
          this.revS.list().subscribe((data) => {
            this.revS.setList(data);
          });
        });
      }
      this.router.navigate(['reviews']);

    }else{

      this.mensaje='write comment!!'
    }
  }

  Init(){
    if(this.edition){
      this.revS.listId(this.id).subscribe((data)=>{

        this.form=new FormGroup({
          id:new FormControl(data.idReview),
          content:new FormControl(data.content),
          date:new FormControl(data.date),
          likes:new FormControl(data.likes),
          client_id:new FormControl(data.client_id),
          psychologist_id:new FormControl(data.psychologist_id),
        })
        console.log(data);
      })
    }

  }

}
