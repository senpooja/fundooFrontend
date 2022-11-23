import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  title:any;
  discription:any;
  id:any;
  color:any;

  constructor(private note:NotesService,
    public dialogRef : MatDialogRef<UpdatenoteComponent>,public dialog: MatDialog,
   @Inject(MAT_DIALOG_DATA) public data: any
   ) {
    this.title = data.title, 
    this.discription = data.note,
    this.id=data.noteId,
    this.color=data.color

   }
   
   onNoClick():void{
    this.dialogRef.close();
    
   }

  ngOnInit(): void {
  }
  closeDialog(){
    let data = {
     title:this.title,
    discription:this.discription,
    noteId:this.id
    }
    this.note.updatenote(data).subscribe((Response:any)=>{
      console.log("update responce",Response)
    })
  }
  
  }


