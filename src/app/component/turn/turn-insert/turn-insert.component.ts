import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Turn } from 'src/app/model/turn';
import { TurnService } from 'src/app/service/turn.service';
import { Turnstatus } from 'src/app/model/turnstatus';
import { TurnstatusService } from 'src/app/service/turnstatus.service';
import { Psi } from 'src/app/model/psi';
import { PsiService } from 'src/app/service/psi.service';

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
  listturnstatus:Turnstatus[]=[];
  listpsi:Psi[]=[];
  idTurnstatSelec:number=0;
  idPsysSelec:number=0;
  mensaje: string = ""

  constructor(
    private turS: TurnService,
    private router:Router,
    private route:ActivatedRoute,
    private tstatService:TurnstatusService,
    private psiService:PsiService) { }

  ngOnInit():void {

    this.tstatService.list().subscribe(data => { this.listturnstatus = data });
    this.psiService.list().subscribe(data => { this.listpsi = data });

    this.route.params.subscribe((data:Params)=>{ //update
      this.id=data['id'];
      this.edition=data['id']!=null;
      this.Init();
    })

    this.form = new FormGroup({
      id:new FormControl(),
      date:new FormControl(),
      duration:new FormControl(),
      turnstatus:new FormControl(),
      psychologist:new FormControl()
    })
  }

  accept(): void {

    this.turn.idTurn = this.form.value['id'];
    this.turn.date = this.form.value['date'];
    this.turn.duration = this.form.value['duration'];
    this.turn.turnstatus.status = this.form.value['turnstatus.status'];
    this.turn.psychologist.names = this.form.value['psychologist.names'];

    if (this.idTurnstatSelec > 0) {
      let t = new Turnstatus();
      t.idTurnstatus = this.idTurnstatSelec;
      this.turn.turnstatus=t;
    }
    if (this.idPsysSelec > 0) {
      let p = new Psi();
      p.idPsi= this.idPsysSelec;
      this.turn.psychologist=p;
    }
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


  }

  Init(){
    if(this.edition){
      this.turS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idTurn),
          date:new FormControl(data.date),
          duration:new FormControl(data.duration),
          turnstatus:new FormControl(data.turnstatus.status),
          psychologist:new FormControl(data.psychologist.names),
        })
        console.log(data);
      })
    }

  }

}
