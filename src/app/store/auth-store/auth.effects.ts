import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {signInErrorAction, signInRequestAction, signInSuccessAction} from "./auth.actions";
import {catchError, map, switchMap, tap,} from "rxjs/operators";
import {AuthService} from "./services/auth.service";
import {of} from "rxjs";
import {Router} from "@angular/router";


@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() => this.action$.pipe(
    ofType(signInRequestAction),
    switchMap((data: any) => this.authService.signInService({phone: data.phone, password: data.password}).pipe(
      tap((data) => {
        const {accessToken, tokenType} = data.data
        const token: string = `${tokenType} ${accessToken}`;
        this.authService.setToken(token)
      }),
      map(payload => signInSuccessAction(payload.data)),
      tap( () => this.router.navigate(['profile'])),
      catchError((error) => {
        return of(signInErrorAction(error))
      })
    )),
  ))

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
