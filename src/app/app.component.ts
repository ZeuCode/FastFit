import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FastFit';
  activeButton: number = -1;

  role:string="";
  constructor(private loginService: LoginService) {
  }

  cerrar() {
    this.role = '';
    sessionStorage.clear();
  }

  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }

  validarRol() {
    if (this.role == 'ADMIN' || this.role == 'USER' || this.role == 'PSICO') {
      return true;
    } else {
      return false;
    }
  }

  setActiveButton(index: number): void {
    this.activeButton = index;
  }

}
