import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  reset!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.reset = this.formBuilder.group({
      newpassword: ['', [Validators.required,]],
      conformpassword: ['', Validators.required, ],
    })
  }
  onSubmit() {
   // this.reset = true;
    if (this.reset.valid) {
      let payload = {
        password: this. reset.value.newpassword,
        confirmPassword: this.reset.value.conformpassword,
        service: "advance"

      }
      this.user.login(payload).subscribe((Response: any) => {
        console.log(Response)
      })
 }
    
  }
  

}
