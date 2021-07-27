import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {authReducer} from "./auth.reducer";

export const AUTH_REDUCER = "auth";

const store = {
  [AUTH_REDUCER]: authReducer,
}

@NgModule({
  imports: [
    StoreModule.forRoot(store)],
  exports: [StoreModule]
})


export class AuthStoreModule {
}
