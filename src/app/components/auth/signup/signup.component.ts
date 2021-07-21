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
      phone: ['380502868023', Validators.required]
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
    }, () => {
      this.isFetching = false
    })

  }

  ngOnInit() {

  }


}
