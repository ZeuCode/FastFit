import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointmentstatus',
  templateUrl: './appointmentstatus.component.html',
  styleUrls: ['./appointmentstatus.component.css'],
})
export class AppointmentstatusComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}
}
