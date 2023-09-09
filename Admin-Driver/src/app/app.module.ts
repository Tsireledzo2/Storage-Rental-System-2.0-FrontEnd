import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { DriverHomeComponent } from './Components/driver-home/driver-home.component';
import { VehicleListComponentComponent } from './Components/vehicle-list-component/vehicle-list-component.component';
import { BookingsListComponentComponent } from './Components/bookings-list-component/bookings-list-component.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { CollectionsComponent } from './Components/collections/collections.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    DriverHomeComponent,
    VehicleListComponentComponent,
    BookingsListComponentComponent,
    NavbarComponent,
    DriverListComponent,
    CollectionsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
