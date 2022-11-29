import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteArray: any;
  trashlist:any;

  constructor(private note:NotesService,
      ) { }
 

  ngOnInit(): void {
    this.TrashList()

  }
  TrashList() {
    this.note.getall().subscribe((request: any) => {
      console.log("request data", request)
    this.noteArray = request
    console.log("request data", this.noteArray)
    this.noteArray=this.noteArray.reverse();
      this.noteArray=this.noteArray.filter((notedata:any)=>{
      
        return notedata.isArchive==false;
      })
    })
  }
  receiveMsgfromDisplay($event:any){
    console.log("Inside GetAllNotes",$event)
    this.TrashList()
  }
}
