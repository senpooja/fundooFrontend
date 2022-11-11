import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
 styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

  }

  

  ngOnInit(): void {
   this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required], //this firstName name in .ts file and the formcontrolname in .html file should be exactly same
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required],
    })
  }
  onSubmit() {
    
  }
  

}
