import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
 styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
constructor(private formBuilder: FormBuilder, private user : UserService) { }
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
    this.submitted = true;
    if (this.registerForm.valid) {
     let payload = {    //this payload is a json object
        firstName: this.registerForm.value.firstName, // leftside firstname is exactly same as that of backend API and rightside firstname i.e., ,firstName should be exact same as that of formcontrolname in .html file or same as written above in ngonit 
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.userName,
        password: this.registerForm.value.password,
        service: "advance"
      }
      this.user.registration(payload).subscribe((Response: any) => {
        console.log(Response)
      })

  
}
}
}
