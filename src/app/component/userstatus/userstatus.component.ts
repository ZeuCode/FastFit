import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.css']
})
export class UserstatusComponent {
  constructor(public route:ActivatedRoute) {

  }
  ngOnInit(): void {

  }

}
