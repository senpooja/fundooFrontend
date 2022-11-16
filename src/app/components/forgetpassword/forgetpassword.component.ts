import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forget!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,private user: UserService) {
    
   }

  ngOnInit(): void {
    this.forget = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
    
    
  }
  onSubmit() {
    this.submitted = true;
    if (this.forget.valid) {
      let payload = {
        EmailId: this.forget.value.email,
        //password: this.forget.value.password,
        service: "advance"

      }
      console.log(payload);
      this.user.forgetpassword(payload).subscribe((Response: any) => {
        console.log(Response)
      })
 }
    
  }

}
