import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url = "http://churrasco.uk.to:3005/login";
  public token;
  public urlProducts="http://churrasco.uk.to:3005/products";

  constructor(private http: HttpClient) {

   }

   getLoginToken(user:string, pass: string){
    return this.http.post(this.url,{
      "username": "challenge", //user,//  pass//
      "password":  "ch411enge"
     });

    
   }
   getProducts(){    
     return this.http.get(this.urlProducts,{
       headers: {Authorization: 'Bearer '+ this.token}
     })
   }
   
   public settoken(v : string) {
     this.token = v;
    // console.log("setToken: "+this.token);
   }
    
}
