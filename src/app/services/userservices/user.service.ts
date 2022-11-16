import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  token:any;
 
  constructor(private httpservice : HttpService) {
    this.token = localStorage.getItem("token")
   }
  
  
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
    return this.httpservice.postservic(`/User/ForgetPassWord?EmailId=`+(reqdata.EmailId),reqdata,false,header)

  }
  resetpassword(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.postservic('/User/ResetPassword',reqdata,true,header)

  }



}
