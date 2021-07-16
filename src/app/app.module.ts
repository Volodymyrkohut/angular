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
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {HeaderComponent} from "./components/layout/header/header.component";
import {LayoutComponent} from "./components/layout/layout/layout.component";
import {SidebarComponent} from "./components/layout/sidebar/sidebar.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "./shared/shared.module";
import {SigninComponent} from "./components/auth/signin/signin.component";

const MatModules = [
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
];

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
    ...LayoutModules,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),

    AppRoutingModule,
    // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    ...MatModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// CommonModule,
// import {CommonModule} from "@angular/common";
