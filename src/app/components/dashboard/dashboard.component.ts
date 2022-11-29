import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  value: any;
  constructor(media: MediaMatcher, changeDetectorRef: ChangeDetectorRef, private router:Router,private dataService:DataService ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.dataService.currentMessage.subscribe((res:any)=>{
      console.log(res)
      })
   

  }
  Notes(){
    this.router.navigateByUrl('/dashboard/getallnotes')
  }
  trashopen(){
    this.router.navigateByUrl('/dashboard/trash')
  }
archiveopen(){
  this.router.navigateByUrl('/dashboard/archiv')
}
Logout()
{
  localStorage.removeItem("token");
  this.router.navigateByUrl('/login');
}
ngOnDestroy(): void {
  this.mobileQuery.removeListener(this._mobileQueryListener);
}

searchNote(event:any){
  this.dataService.sendMessage(event.target.value)
}


}


