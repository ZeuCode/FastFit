import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Turn } from 'src/app/model/turn';
import { TurnService } from 'src/app/service/turn.service';

@Component({
  selector: 'app-turn-insert',
  templateUrl: './turn-insert.component.html',
  styleUrls: ['./turn-insert.component.css']
})
export class TurnInsertComponent implements OnInit{

  id:number=0; ///update
  edition:boolean=false; //update

  form:FormGroup=new FormGroup({});
  turn:Turn=new Turn();
  mensaje: string = '';

  constructor(private turS: TurnService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit():void {

    this.route.params.subscribe((data:Params)=>{ //update
      this.id=data['id'];
      this.edition=data['id']!=null;
      this.Init();
    })

    this.form=new FormGroup({
      id:new FormControl(),
      date:new FormControl(),
      duration:new FormControl(),
      turnStatus_id:new FormControl(),
      psychologist_id:new FormControl()
    })
  }
  //Init() {


  //  throw new Error('Method not implemented.');
  //}
  accept(): void {

    this.turn.idTurn = this.form.value['id'];
    this.turn.date = this.form.value['date'];
    this.turn.duration = this.form.value['duration'];
    this.turn.turnStatus_id = this.form.value['turnStatus_id'];
    this.turn.psychologist_id = this.form.value['psychologist_id'];

    if (this.form.value['duration'].length > 0) {

      if (this.edition) {
        //guardar pS
        this.turS.update(this.turn).subscribe(()=>{
          this.turS.list().subscribe((data) => {
            this.turS.setList(data);
          });
        });

      }else{
        //metodo insert
        this.turS.insert(this.turn).subscribe((data) => {
          this.turS.list().subscribe((data) => {
            this.turS.setList(data);
          });
        });
      }
      this.router.navigate(['turns']);

    }else{
      this.mensaje='!write comment!'
    }
  }

  Init(){
    if(this.edition){
      this.turS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idTurn),
          date:new FormControl(data.date),
          duration:new FormControl(data.duration),
          turnStatus_id:new FormControl(data.turnStatus_id),
          psychologist_id:new FormControl(data.psychologist_id),
        })
        console.log(data);
      })
    }

  }

}
