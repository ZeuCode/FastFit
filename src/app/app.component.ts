import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FastFit';
  activeButton: number = -1;
  ngOnInit(): void {
  }
  setActiveButton(index: number): void {
    this.activeButton = index;
}

}
