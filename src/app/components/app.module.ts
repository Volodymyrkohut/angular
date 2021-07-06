import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from "@angular/forms";
import {HotelRoomItemComponent} from "./hotel-detail/hotel-room-item/hotel-room-item.component";
import {HotelRoomListComponent} from "./hotel-detail/hotel-room-list/hotel-room-list.component";
import {HotelTestComponent} from "./hotel-detail/hotel-test/hotel-test.component";
import {StyleDirective} from "../directives/style.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NoFoundComponent,
    HotelsComponent,
    HotelDetailComponent,
    ProfileComponent,
    HotelRoomItemComponent,
    HotelRoomListComponent,
    HotelTestComponent,
    StyleDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
    // CommonModule,
// import {CommonModule} from "@angular/common";
