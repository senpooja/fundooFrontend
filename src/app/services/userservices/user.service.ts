import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private httpservice : HttpService) { }
  
  registration(reqdata:any){

    let header={
      Headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.postservic('/User/Register',reqdata,false,header)

  }
  
  login(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpservice.postservic('/User/Login',reqdata,false,header)

  }
  forgetpassword(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpservice.postservic('/User/ForgetPassWord',reqdata,false,header)

  }
  resetpassword(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpservice.postservic('/User/ResetPassword',reqdata,false,header)

  }



}
