import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "../../../services/storage.service";
import {select, Store} from "@ngrx/store";
import {
  authenticatedAction,
  notAuthenticatedAction
} from "../auth.actions";
import {authTokenSelector} from "../auth.selectors";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  // accessToken: string = ''

  // public error$: Subject<any> = new Subject<any>()
  //
  AUTH_TOKEN_KEY = 'auth_token'

  //
  get token(): string | null {
    const token: string | null = this.storageService.getItem(this.AUTH_TOKEN_KEY)

    return token
  };

  constructor(private storageService: StorageService, private http: HttpClient, private store$: Store) {
    // this.store$.pipe(select(authTokenSelector)).subscribe((token) => {
    //   this.accessToken = token;
    // })


    // В випадку якщо є токен в локал сторі повідомляю ngrx store
    if (this.isAuthenticated()) {
      this.store$.dispatch(authenticatedAction())
    } else {
      this.store$.dispatch(notAuthenticatedAction())
    }
  }


  signInService(user: any): Observable<any> {
    return this.http.post('https://api.dev24.bukovel.net/b24/desktop/auth/login-phone', user); //'https://api.nites.cloud/extranet/auth/login-phone', user)
  }

  signOut() {
    this.store$.dispatch(notAuthenticatedAction())
    this.setToken('')
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  //
  setToken(token: any) {
    this.storageService.setItem(this.AUTH_TOKEN_KEY, token)
  }

  getTestProfile() {
    return this.http.get('https://api.dev24.bukovel.net/b24/desktop/account').pipe(
        tap((response: any) => {
            console.log("response",response);
            return response
        }),
      ).subscribe();
  }

  // handleError(error: HttpErrorResponse) {
  //   // const {message} = error.error.error;
  //
  //     this.error$.next({
  //       phone: 'Такий телефон вже існує'
  //     })
  //
  //
  //   return throwError(error)
  // }

  // реєстрація
  // signUpInitial(data: any) {
  //   return this.http.post('https://api.dev24.bukovel.net/b24/desktop/auth/register/initialize', data).pipe(
  //     tap((response: any) => {
  //         // console.log("response",response);
  //         // return response
  //     }),
  //     catchError(this.handleError.bind(this))
  //   );
  // }


  // signUpConfirm(data: any) {
  //   return this.http.post('https://api.dev24.bukovel.net/b24/desktop/auth/register/confirm-code', data).pipe(
  //     tap((response: any) => {
  //
  //     }),
  //   );
  // }

  // signUpComplete(data: any) {
  //   return this.http.post('https://api.dev24.bukovel.net/b24/desktop/auth/register/complete', data).pipe(
  //     tap((response: any) => {
  //
  //     }),
  //   );
  // }
}
