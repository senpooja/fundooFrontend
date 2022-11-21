import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  createForm!: FormGroup;
  panelOpenState = false;
  Show = false;
  title: any;
  description: any;
  constructor(private formBuilder: FormBuilder, private note: NotesService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],

    })

  }
  isshow() {
    this.Show = true;
  }
  close() {
    this.Show = false;
    if (this.createForm.valid) {
      let payload = {
        title: this.createForm.value.title,
        note: this.createForm.value.description
      }
      console.log(payload)
      this.note.addnot(payload).subscribe((Response: any) => {
        console.log(Response)
      })
    }
  }
}
