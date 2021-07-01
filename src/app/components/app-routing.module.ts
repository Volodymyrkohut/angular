import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelDetailComponent} from "./hotel-detail/hotel-detail.component";
import {HotelsComponent} from "./hotels/hotels.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NoFoundComponent} from "./no-found/no-found.component";
import {ProfileComponent} from "./profile/profile.component";

// https://www.positronx.io/angular-router-tutorial/
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotel/:id', component: HotelDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})



export class AppRoutingModule { }
