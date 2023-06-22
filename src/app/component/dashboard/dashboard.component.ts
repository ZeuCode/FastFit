import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  role:string="";
  constructor(
    public route:ActivatedRoute,
    private ls:LoginService
  ){}


  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

  }

}
