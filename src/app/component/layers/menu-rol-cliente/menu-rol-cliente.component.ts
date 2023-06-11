import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-rol-cliente',
  templateUrl: './menu-rol-cliente.component.html',
  styleUrls: ['./menu-rol-cliente.component.css']
})
export class MenuRolClienteComponent implements OnInit {

  activeButton: number = -1;
  ngOnInit(): void {
  }
  setActiveButton(index: number): void {
    this.activeButton = index;
}
}
