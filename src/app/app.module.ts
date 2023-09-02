import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Module/app-routing.module';
import { AppComponent } from './Module/app.component';
import { CustomerHomepageComponent } from './Components/customer-homepage/customer-homepage.component';
import { AdminHomepageComponent } from './Components/admin-homepage/admin-homepage.component';
import { DriverHomepageComponent } from './Components/driver-homepage/driver-homepage.component';
import { HeaderComponent } from './Components/header/header.component';
import { StorageUnitComponent } from './storage-unit/storage-unit.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerHomepageComponent,
    AdminHomepageComponent,
    DriverHomepageComponent,
    HeaderComponent,
    StorageUnitComponent,
    ContactUsComponent,
    AboutUsComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
