import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  form: FormGroup;

  constructor(private auth: AuthService, private router: Router) {
    this.form = new FormGroup({
      phone: new FormControl('380502868023', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      password: new FormControl('123123123', [Validators.required, Validators.minLength(3)]),
    })
  }

  ngOnInit() {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['profile'])
    }
  }


  getErrorMessage() {

    if(this.form.get('phone')?.touched && this.form.get('phone')?.invalid){
      if (this.form.get('phone')?.errors?.required) {
        return 'Заповніть поле телефон';
      }

      if (this.form.get('phone')?.errors?.pattern) {
        return 'Не валідний телефон'
      }
    }

    if(this.form.get('password')?.touched && this.form.get('password')?.invalid){
      if (this.form.get('password')?.errors?.required) {
        return 'Замало символів';
      }

      if (this.form.get('password')?.errors?.minlength) {
        return `Це поле повинно містити не менше
         ${this.form.get('password')?.errors?.minlength.requiredLength}
          символи
         ${this.form.get('password')?.errors?.minlength.actualLength}
         `;
      }
    }

    return;
  }

  makeLogin() {
    const user = {
      phone: this.form.value.phone,
      password: this.form.value.password,
    }

    this.auth.signIn(user).subscribe((response) => {
      this.form.reset();

      console.log("Resp",response);

      // data:
      //   accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmRldjI0LmJ1a292ZWwubmV0XC9iMjRcL2Rlc2t0b3BcL2F1dGhcL2xvZ2luLXBob25lIiwiaWF0IjoxNjI2NDI4ODM1LCJleHAiOjE2NTc5NjQ4MzUsIm5iZiI6MTYyNjQyODgzNSwianRpIjoiR0wzV0Fva1ZhWmZBUWVHSiIsInN1YiI6MzgwOTIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.nh-wB4wGoXLNnng6hyyvaNnWCXch_90ZNQi_AI_44Ak"
      // expiresIn: 31536000
      // tokenType: "bearer"

      this.router.navigate(['profile'])
    });


    console.log("user",user);
  }
}
