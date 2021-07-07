import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import {FormsModule} from "@angular/forms";
import {HotelRoomItemComponent} from "./components/hotel-detail/hotel-room-item/hotel-room-item.component";
import {HotelRoomListComponent} from "./components/hotel-detail/hotel-room-list/hotel-room-list.component";
import {HotelTestComponent} from "./components/hotel-detail/hotel-test/hotel-test.component";
import {StyleDirective} from "./directives/style.directive";
import {IfnotDirective} from "./directives/ifnot.directive";
import {MultyPipe} from "./pipes/multy.pipe";

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
    IfnotDirective,
    MultyPipe,
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
