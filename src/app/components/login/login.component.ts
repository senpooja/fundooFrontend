import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required,],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      let payload = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password,
        service: "advance"

      }
      this.user.login(payload).subscribe((response: any) => {
        console.log(response)
        localStorage.setItem("token",response.data)
      })
 }
  }
}