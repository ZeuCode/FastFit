import { Client } from "./client";
import { Psi } from "./psi";

export class Review{
  idReview:number=0;
  content:string="";
  date:Date=new Date(Date.now());
  likes:number=0;
  client:Client=new Client();
  psychologist:Psi=new Psi();
}

