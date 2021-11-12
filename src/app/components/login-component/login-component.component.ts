import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {LoginService} from "../../services/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  public show = false;
  public Form : any;

  constructor(private loginServices:LoginService,
              private route: ActivatedRoute,
              private router:Router ) { 
                 this.Form = new FormGroup({
                  userName: new FormControl(localStorage.getItem('username')),
                  password: new FormControl(localStorage.getItem('password')),
                  rememberme:new FormControl(localStorage.getItem('rememberme'))
                });
              }

  ngOnInit(): void {
  }


   mostrar() {
   
  this.show = true;
  
  const { userName, password, rememberme} = this.Form.value;
  console.log(userName);
  console.log(password);
  console.log(rememberme);

  
  this.loginServices.getLoginToken(userName, password).subscribe(data =>{
    const token = data['token'];
    this.loginServices.settoken(token);
    //console.log(token);
    localStorage.setItem("username", userName);
    localStorage.setItem("password", password);
    localStorage.setItem("rememberme", rememberme);
    this.goToproducts();
  });
 
  }
  
  goToproducts() {
    this.router.navigate(['products']);
  }

}
