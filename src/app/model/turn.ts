import { Psi } from "./psi";

export class Turn{
  idTurn:number=0;
  date:Date=new Date(Date.now());
  duration:number=0;
  status:string="";
  psychologist:Psi=new Psi();
}
