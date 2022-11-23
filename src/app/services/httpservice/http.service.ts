import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseurl;

  constructor(private httpclient : HttpClient) { }

  postservic(url:string,reqdata:any,token:boolean=false,httpoptions:any){
    return this.httpclient.post(this.baseUrl+url, reqdata, token && httpoptions)
   

  }
  getservic(url:string,token:boolean=false,httpoptions:any){
    return this.httpclient.get(this.baseUrl+url, token && httpoptions)

  }
  putservic(url:string,reqdata:any,token:boolean=false,httpoptions:any){
    return this.httpclient.post(this.baseUrl+url, reqdata, token && httpoptions)
   

  }
  deleteservic(){

  }
  patchservic(){

  }
}
