import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notecard:any;
  isDelete: boolean = false;
  isArchiv: boolean=false;

  data:any;
color: any;
  isDisplaynoteComponent:boolean=false;
  Trash: boolean = false;


NotesId:any;
  constructor(public note : NotesService) {  }
 
  ngOnInit(): void {
  
  
  }
  colors: Array<any>=[
    {code:'#fff',name:"white"},
    {code:'#f28b82',name:"red"},
    {code:'#fbbc04',name:"orange"},
    {code:'#ffff00',name:"yellow"},
    {code:'#ccff90',name:"green"},
    {code:'#a7ffeb',name:"teal"},
    {code:'#cbf0f8',name:"blue"},
    {code:'#aecbfa',name:"darkblue"},
    {code:'#d7aefb',name:"purple"},
    {code:'#e6c9a8',name:"brown"},
    

  ]
  setcolor(color:any){
    console.log('color', color);
    console.log(this.notecard);
    this.notecard.color=color;
    let data={
      color:color,
    NotesId:[this.notecard.noteID],
    }
    console.log(data);
    this.note.changecColor(data).subscribe((response:any)=>{
      console.log(response);
    })
  }

  
  
  
  
  trash(){
    let req={
    NotesId:[this.notecard.noteID],

    }
    console.log(req)
    this.note.trashnote(req).subscribe((response: any) => {
      console.log(response)

   
  
    })
  }
  archive(){
    let req={
      NotesId:[this.notecard.noteID],

      
    }
    console.log(req)
    this.note.Archiv(req).subscribe((response:any)=>{
      console.log(response)
    }
    
    ) } 
   
  
    }


