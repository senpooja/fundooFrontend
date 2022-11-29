import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  noteArray: any;
  msg: any;

  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.getallnotes()
 }
  getallnotes() {
    this.note.getall().subscribe((request: any) => {
      console.log("request data", request)
    this.noteArray = request
    console.log("request data", this.noteArray)
   this.noteArray= this.noteArray.reverse()
   this.noteArray= this.noteArray.filter((notedata:any)=>{
    return notedata.isTrash == false && notedata.isArchive == false;
    
   })
    })
  }
  receiveMsgfromDisplay($event:any){
    console.log("inside display to get all notes",$event)
    this.getallnotes();
  }

  }
 
  

