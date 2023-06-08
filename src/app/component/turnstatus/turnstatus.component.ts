import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turnstatus',
  templateUrl: './turnstatus.component.html',
  styleUrls: ['./turnstatus.component.css']
})
export class TurnstatusComponent implements OnInit {
  constructor(public route:ActivatedRoute){

  }
  ngOnInit(): void {
  }

}
