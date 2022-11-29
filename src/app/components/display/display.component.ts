import { animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, Observable, interval, BehaviorSubject, } from 'rxjs';
import { DataService } from 'src/app/services/dataServices/data.service';


import { UpdatenoteComponent } from '../updatenote/updatenote.component';






@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
 refreshUsers$=new BehaviorSubject<boolean>(true);
@Input() NoteList:any;
@Output() displaytoGetAllNotes = new EventEmitter<string>();
  msg: any;
  Search='';

  constructor(public dialog: MatDialog, private dataService:DataService ) { }

  ngOnInit(): void {
    
  this.dataService.currentMessage.subscribe((res:any)=>{
   console.log(res)
   this.Search=res;
   })


  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '400px',
      height: 'auto',
      //panelClass: "updateDialog",
     data:note,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      
    })
 

  }
  receiveMsgIconsToDisplay($event:any){
    console.log("msg icon to display",$event)
    this.msg = $event;
    this.displaytoGetAllNotes.emit(this.msg);
  }
  
}
 

