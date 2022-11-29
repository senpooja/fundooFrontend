import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @Output() displaytoGetAllNotes = new EventEmitter<string>();
  noteArray: any;
  //trashlist:any;
  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this. ArchiveList()
  }
  ArchiveList() {
    this.note.getall().subscribe((request: any) => {
      console.log("request data", request)
    this.noteArray = request
    console.log("request data", this.noteArray);
    this.noteArray=this.noteArray.reverse()
    this.noteArray=this.noteArray.filter((notedata:any)=>{
      return notedata.isTrash==false;
     

 })
 })
    
 }
 receiveMsgfromDisplay($event:any){
  console.log("Inside GetAllNotes",$event)
  this. ArchiveList()
}

}