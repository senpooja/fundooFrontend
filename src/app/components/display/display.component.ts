import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

@Input() NoteList:any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '400px',
      height: 'auto',
      panelClass: "updateDialog",
      data:note,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      
    })
 

  }
 
}
