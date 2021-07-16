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
        this.setToken(response)
      }),
    ); //'https://api.nites.cloud/extranet/auth/login-phone', user)
  }

  signOut() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  setToken(response: any) {
    const {accessToken, tokenType} = response.data
    const token = `${tokenType} ${accessToken}`;

    if (accessToken) {
      this.storageService.setItem(this.AUTH_TOKEN_KEY, token)
    }
  }
}
