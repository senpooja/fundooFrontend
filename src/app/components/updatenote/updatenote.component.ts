import { Component, Inject, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})

export class UpdatenoteComponent implements OnInit {
  title: any;
  discription: any;
  id: any;
  color: any;

  constructor(private note: NotesService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title,
      this.discription = data.note,
      this.id = data.noteID,
      this.color = data.color

  }

  onNoClick(): void {
    this.dialogRef.close();

  }

  ngOnInit(): void {
  }
  closeDialog() {
    let data = {
      title: this.title,
      discription: this.note,
      noteId: this.id
    }
    console.log(data)
    this.note.updatenote(data).subscribe((response: any) => {
      console.log("update responce", response)
      this.dialogRef.close(response)
      
    })
  }

}


