import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-rol-admin',
  templateUrl: './menu-rol-admin.component.html',
  styleUrls: ['./menu-rol-admin.component.css']
})
export class MenuRolAdminComponent implements OnInit{

  activeButton: number = -1;
  ngOnInit(): void {

  }

  setActiveButton(index: number): void {
    this.activeButton = index;
  }


}
