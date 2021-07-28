import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {authTokenSelector} from "../auth.selectors";
import {Store} from "@ngrx/store";
import {first, mergeMap} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(authTokenSelector).pipe(
      first(),
      mergeMap(token => {
        const authReq = !!token ? request.clone({
          setHeaders: {Authorization: token},
        }) : request;

        return next.handle(authReq);
      }),
    );
  }
}
