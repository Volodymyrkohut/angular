import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelDetailComponent} from "./components/hotel-detail/hotel-detail.component";
import {HotelsComponent} from "./components/hotels/hotels.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {NoFoundComponent} from "./components/no-found/no-found.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SigninComponent} from "./components/auth/signin/signin.component";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {AuthGuardService} from "./services/auth-guard.service";

// https://www.positronx.io/angular-router-tutorial/
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'auth', children:
      [
        {
          path: 'signin', component: SigninComponent
        },
        {
          path: 'signup', component: SignupComponent
        }
      ]},
  { path: 'about', component: AboutComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotel/:id', component: HotelDetailComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuardService] },
  { path: '**', component: NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})



export class AppRoutingModule { }
