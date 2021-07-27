import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {NoFoundComponent} from './components/no-found/no-found.component';
import {HotelsComponent} from './components/hotels/hotels.component';
import {HotelDetailComponent} from './components/hotel-detail/hotel-detail.component';
import {ProfileComponent} from './components/profile/profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HotelRoomItemComponent} from "./components/hotel-detail/hotel-room-item/hotel-room-item.component";
import {HotelRoomListComponent} from "./components/hotel-detail/hotel-room-list/hotel-room-list.component";
import {HotelTestComponent} from "./components/hotel-detail/hotel-test/hotel-test.component";
import {StyleDirective} from "./directives/style.directive";
import {IfnotDirective} from "./directives/ifnot.directive";
import {MultyPipe} from "./pipes/multy.pipe";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from "./components/layout/header/header.component";
import {LayoutComponent} from "./components/layout/layout/layout.component";
import {SidebarComponent} from "./components/layout/sidebar/sidebar.component";
import {SharedModule} from "./shared/shared.module";
import {SigninComponent} from "./components/auth/signin/signin.component";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {SearchPipe} from "./pipes/search.pipe";
import {MaterialModule} from "./shared/material.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {AuthStoreModule} from "./store/auth-store/auth-store.module";
import { EffectsModule } from '@ngrx/effects';
import {AuthEffects} from "./store/auth-store/auth.effects";

const LayoutModules = [
  HeaderComponent,
  LayoutComponent,
  SidebarComponent,
]

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
    SigninComponent,
    SignupComponent,
    SearchPipe,
    ...LayoutModules,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    AuthStoreModule,
    EffectsModule.forRoot([AuthEffects]),
    // StoreModule.forRoot({},{}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}

// CommonModule,
// import {CommonModule} from "@angular/common";
