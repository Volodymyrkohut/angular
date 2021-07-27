import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { Store} from "@ngrx/store";
// import {isAuthSelector} from "../store/auth-store/auth.selectors";
import {AuthService} from "../store/auth-store/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  // isAuth$: Observable<any> = this.store$.pipe(select(isAuthSelector))

  constructor(private store$: Store, private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | any {

    if (this.authService.isAuthenticated()) {
      return true
    } else {
      this.authService.signOut()
      this.router.navigate(['/auth', 'signin'], {
        queryParams: {
          auth: false
        }
      })
    }

  }

}
