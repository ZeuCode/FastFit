import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Review } from 'src/app/model/review';
import { ReviewService } from 'src/app/service/review.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from 'src/app/model/client';
import { Psi } from 'src/app/model/psi';
import { ClientService } from 'src/app/service/client.service';
import { PsiService } from 'src/app/service/psi.service';

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
  listcli:Client[]=[];
  listpsi:Psi[]=[];
  idCliSelec:number=0;
  idPsysSelec:number=0;

  constructor(private revS: ReviewService, private router:Router, private route:ActivatedRoute,private clientService:ClientService,private psiService:PsiService) { }

  ngOnInit():void {
    this.clientService.list().subscribe(data => { this.listcli = data });
    this.psiService.list().subscribe(data => { this.listpsi = data });

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
      client:new FormControl(),
      psychologist:new FormControl()
    })
  }
  accept(): void {

    this.review.idReview = this.form.value['id'];
    this.review.content = this.form.value['content'];
    //this.review.date = this.form.value['date'];
    this.review.date = date;
    this.review.likes = this.form.value['likes'];
    this.review.client.names = this.form.value['client.names'];
    this.review.psychologist.names = this.form.value['psychologist.names'];

    if (this.idCliSelec > 0) {
      let c = new Client();
      c.idClient = this.idCliSelec;
      this.review.client=c;
    }
    if (this.idPsysSelec > 0) {
      let p = new Psi();
      p.idPsi= this.idPsysSelec;
      this.review.psychologist=p;
    }

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


  }

  Init(){
    if(this.edition){
      this.revS.listId(this.id).subscribe((data)=>{

        this.form=new FormGroup({
          id:new FormControl(data.idReview),
          content:new FormControl(data.content),
          date:new FormControl(data.date),
          likes:new FormControl(data.likes),
          client:new FormControl(data.client.names),
          psychologist:new FormControl(data.psychologist.names),
        })
        console.log(data);
      })
    }

  }

}
