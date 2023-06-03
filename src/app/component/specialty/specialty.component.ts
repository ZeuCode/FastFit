import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent implements OnInit {
  constructor(public route: ActivatedRoute){
  }

  ngOnInit(): void {

  }

}
