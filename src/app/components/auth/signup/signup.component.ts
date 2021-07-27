import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {
  @ViewChild('stepper') public myStepper: MatStepper | undefined

  isFetching = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private auth: AuthService) {

    this.firstFormGroup = this._formBuilder.group({
      phone: ['38050286802', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      code: ['7777', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      name: ['Володимир', Validators.required],
      surname: ['Когут', Validators.required],
      email: ['volo@gmail.com', Validators.required],
      sex: ['1', Validators.required],
      birthday: ['03.07.1993', Validators.required],
    });
  }

  signUpInitial() {

    this.isFetching = true
    this.auth.signUpInitial({
      phone: this.firstFormGroup.get('phone')?.value
    }).subscribe((response: any) => {
      this.myStepper?.next();
      this.isFetching = false
    }, (error: any) => {

      // console.log("error",error);

      this.isFetching = false

      // @ts-ignore
      // this.firstFormGroup.get('phone').setErrors({serverError: true})
      this.firstFormGroup.get('phone').setErrors({serverError: 'Помилка з сервера'})

    })

  }

  getErrorMessagePhone() {
    if(this.firstFormGroup.get('phone')?.touched || this.firstFormGroup.get('phone')?.invalid){
      if (this.firstFormGroup.get('phone')?.errors?.required) {
        return 'Заповніть поле телефон';
      }

      if (this.firstFormGroup.get('phone')?.errors?.serverError) {
        return this.firstFormGroup.get('phone')?.errors?.serverError
      }
    }

    return;
  }


  ngOnInit() {

  }


}
