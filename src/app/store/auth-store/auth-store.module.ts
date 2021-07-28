import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {authReducer} from "./auth.reducer";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./interseptors/auth.interseptor.interceptor";

export const AUTH_REDUCER = "auth";

const store = {
  [AUTH_REDUCER]: authReducer,
}

@NgModule({
  imports: [
    StoreModule.forRoot(store)],
  exports: [StoreModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})


export class AuthStoreModule {
}
