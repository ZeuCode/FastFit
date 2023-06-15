import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtRequest } from 'src/app/model/jwtRequest';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = ""
  password: string = ""
  mensaje: string = ""

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService
  ){

  }

  ngOnInit(): void {
  }

  login(){

    let request = new JwtRequest();
    request.username=this.username;
    request.password=this.password;

    this.loginService.login(request).subscribe((data:any) =>{
      sessionStorage.setItem("token",data.jwttoken);
      this.router.navigate(['/Dashboard']);
    })
  }

  verificar(){
    let token = sessionStorage.getItem("token");
    return token!=null;
  }

  showRole(){
    let token = sessionStorage.getItem("token");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.role;
  }



}
