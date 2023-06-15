import { Psi } from "./psi";
import { Turnstatus } from "./turnstatus";

export class Turn{
  idTurn:number=0;
  date:Date=new Date(Date.now());
  duration:number=0;
  turnstatus:Turnstatus=new Turnstatus();
  psychologist:Psi=new Psi();
}
