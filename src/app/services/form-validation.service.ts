import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";


@Injectable({
  providedIn: 'root'
})


export class FormValidationService {

  constructor() {

  }

  getFormErrors(Form: any) {
    if(Form.get('phone')?.touched && Form.get('phone')?.invalid) {
      if (Form.get('phone')?.errors?.required) {
        return 'Заповніть поле телефон';
      }

      if (Form.get('phone')?.errors?.serverError) {
        return Form.get('phone')?.errors?.serverError
      }
    }

    return;
  }

}
