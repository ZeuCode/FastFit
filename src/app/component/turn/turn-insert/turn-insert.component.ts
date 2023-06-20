import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Turn } from 'src/app/model/turn';
import { TurnService } from 'src/app/service/turn.service';
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
  listpsi:Psi[]=[];
  idPsysSelec:number=0;
  mensaje: string = ""

  constructor(
    private turS: TurnService,
    private router:Router,
    private route:ActivatedRoute,
    private psiService:PsiService) { }

  ngOnInit():void {

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
      status:new FormControl(),
      psychologist:new FormControl()
    })
  }

  accept(): void {

    this.turn.idTurn = this.form.value['id'];
    this.turn.date = this.form.value['date'];
    this.turn.duration = this.form.value['duration'];
    this.turn.status = this.form.value['status'];
    this.turn.psychologist.names = this.form.value['psychologist.names'];

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
          status:new FormControl(data.status),
          psychologist:new FormControl(data.psychologist.names),
        })
        console.log(data);
      })
    }

  }

}
