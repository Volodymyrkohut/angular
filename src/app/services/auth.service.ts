import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {StorageService} from "./storage.service";


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  AUTH_TOKEN_KEY = 'auth_token'

  get token(): string | null {
    const token: string | null = this.storageService.getItem(this.AUTH_TOKEN_KEY)

    return token
  };

  constructor(private storageService: StorageService, private http: HttpClient) {}


  signIn(user: any): Observable<any> {
    return this.http.post('https://api.dev24.bukovel.net/b24/desktop/auth/login-phone', user).pipe(
      tap((response: any) => {
        const {accessToken, tokenType} = response.data
        const token = `${tokenType} ${accessToken}`;

        this.setToken(token)
      }),
    ); //'https://api.nites.cloud/extranet/auth/login-phone', user)
  }

  signOut() {
    this.setToken('')
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  setToken(token: any) {
      this.storageService.setItem(this.AUTH_TOKEN_KEY, token)
  }


  // реєстрація
  signUpInitial(data: any) {
    return this.http.post('https://api.dev24.bukovel.net/b24/desktop/auth/register/initialize', data).pipe(
      tap((response: any) => {
          console.log("response",response);
      }),
    );
  }

  signUpConfirm(data: any) {
    return this.http.post('https://api.dev24.bukovel.net/b24/desktop/auth/register/confirm-code', data).pipe(
      tap((response: any) => {

      }),
    );
  }

  signUpComplete(data: any) {
    return this.http.post('https://api.dev24.bukovel.net/b24/desktop/auth/register/complete', data).pipe(
      tap((response: any) => {

      }),
    );
  }
}
