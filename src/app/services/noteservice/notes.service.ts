import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token:any;
  constructor(private http:HttpService) {
    this.token = localStorage.getItem("token")
   }
   addnot(reqpaylod: any){
    console.log("inside note service",reqpaylod);
    console.log(this.token)

    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ this.token
      })
    }
    return this.http.postservic('/Note/Add',reqpaylod,true,header)

  }
  getall(){

    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': 'Bearer ' +this.token
      })
    }
    return this.http.getservic('/Note/AllNotes',true,header)

  }
  
}
