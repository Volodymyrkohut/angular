import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  get token(): string {
    return ''
  };

  constructor(private http: HttpClient) {

  }


  signIn(user: any): Observable<any> {
    return this.http.post( 'https://api.dev24.bukovel.net/b24/desktop/auth/login-phone', user).pipe(
      tap(this.setToken)
    ); //'https://api.nites.cloud/extranet/auth/login-phone', user)
  }

  signOut() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: any) {
    const {accessToken, tokenType} = response
    console.log(response);

    // expiresIn - час закінчення токену

    const token =  `${accessToken} ${tokenType}`;

  }
}
