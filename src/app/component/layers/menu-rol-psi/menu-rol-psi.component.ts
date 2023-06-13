import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-rol-psi',
  templateUrl: './menu-rol-psi.component.html',
  styleUrls: ['./menu-rol-psi.component.css']
})
export class MenuRolPsiComponent implements OnInit {
  activeButton: number = -1;
  ngOnInit(): void {

  }

  setActiveButton(index: number): void {
    this.activeButton = index;
  }
}
