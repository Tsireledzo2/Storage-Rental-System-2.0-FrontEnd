import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { DriverHomeComponent } from './Components/driver-home/driver-home.component';
import { CollectionsComponent } from './Components/collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    DriverHomeComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
