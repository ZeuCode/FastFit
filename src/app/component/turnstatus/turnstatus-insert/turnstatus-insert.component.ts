import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Turnstatus } from 'src/app/model/turnstatus';
import { TurnstatusService } from 'src/app/service/turnstatus.service';

@Component({
  selector: 'app-turnstatus-insert',
  templateUrl: './turnstatus-insert.component.html',
  styleUrls: ['./turnstatus-insert.component.css']
})
export class TurnstatusInsertComponent implements OnInit{

  id:number=0; ///update
  edition:boolean=false; //update

  form:FormGroup=new FormGroup({});
  turnstat:Turnstatus=new Turnstatus();
  mensaje: string = '';

  constructor(private turS: TurnstatusService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit():void {

    this.route.params.subscribe((data:Params)=>{ //update
      this.id=data['id'];
      this.edition=data['id']!=null;
      this.Init();
    })

    this.form=new FormGroup({
      id:new FormControl(),
      status:new FormControl(),
      description:new FormControl(),
    })
  }
  accept(): void {

    this.turnstat.idTurnstatus = this.form.value['id'];
    this.turnstat.status = this.form.value['status'];
    this.turnstat.description = this.form.value['description'];

    if (this.form.value['status'].length > 0) {

      if (this.edition) {
        //guardar pS
        this.turS.update(this.turnstat).subscribe(()=>{
          this.turS.list().subscribe((data) => {
            this.turS.setList(data);
          });
        });

      }else{
        //metodo insert
        this.turS.insert(this.turnstat).subscribe((data) => {
          this.turS.list().subscribe((data) => {
            this.turS.setList(data);
          });
        });
      }
      this.router.navigate(['pages/turnstatus']);

    }else{
      this.mensaje='!write comment!'
    }
  }

  Init(){
    if(this.edition){
      this.turS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idTurnstatus),
          status:new FormControl(data.status),
          description:new FormControl(data.description),
        })
        console.log(data);
      })
    }

  }

}
