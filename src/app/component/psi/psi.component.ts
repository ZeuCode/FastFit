import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-psi',
  templateUrl: './psi.component.html',
  styleUrls: ['./psi.component.css']
})
export class PsiComponent implements OnInit{
  constructor(public route:ActivatedRoute) {

  }
  ngOnInit(): void {

  }

}
