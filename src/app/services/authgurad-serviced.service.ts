import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguradServicedService {
  token: any;
  constructor() {
   // this.token = localStorage.getItem("token")
  }
  gettoken(){  
    return !!localStorage.getItem("token");  
    }  
}
