import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  panelOpenState = false;
  Show = false;
  title: any;
  description: any;
  constructor() { }

  ngOnInit(): void {
  }
  isshow() {
    this.Show = true;
  }
  close() {
    this.Show=false;
  }

}
