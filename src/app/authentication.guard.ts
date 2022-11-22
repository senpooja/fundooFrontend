import { Injectable } from '@angular/core';
import {  CanActivate, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguradServicedService } from './services/authgurad-serviced.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
//  router: any;
  constructor(private Authguardservice:AuthguradServicedService, private router: Router){}
  canActivate(): boolean {  
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.Authguardservice.gettoken();  
}  
  
}
