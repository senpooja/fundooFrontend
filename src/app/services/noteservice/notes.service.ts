import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})

export class NotesService {
  
  Trash(req: { NotesId: any[]; }) {
    throw new Error('Method not implemented.');
  }

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
  updatenote(data:any){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token

      })
    }
    return this.http.putservic(`/Note/Update?noteId=${data.noteId}`,data,true,header)
  }
  trashnote(req:any){
    console.log(req)
    let header={

      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token

      })
    }
    return this.http.putservic(`/Note/Trash?NotesId=${req.NotesId}`,req,true,header)

  }
 Archiv(req:any){
    console.log(req)
    let header={

      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token

      })
    }
    return this.http.putservic(`/Note/Archive?NotesId=${req.NotesId}`,req,true,header)

  }
  changecColor(data:any){
    console.log(data)
    let header={

      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token

      })
    }
    return this.http.putservic(`/Note/Color?NoteId=${data.NotesId}&color=${data.color}`,data,true,header)   

  }
  
}
