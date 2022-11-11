import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forget!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.forget = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
    
  }
  onSubmit() {
  }

}
