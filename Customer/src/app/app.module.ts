import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './Module/app-routing.module';
import { AppComponent } from './Module/app.component';
import { CustomerHomepageComponent } from './Components/customer-homepage/customer-homepage.component';
import { HeaderComponent } from './Components/header/header.component';
import { StorageUnitComponent } from './Components/storage-unit/storage-unit.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CustomerDetailsComponent } from './Components/customer-details/customer-details.component';
import { BookingComponent } from './Components/booking/booking.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerHomepageComponent,
    HeaderComponent,
    StorageUnitComponent,
    ContactUsComponent,
    AboutUsComponent,
    CustomerDetailsComponent,
    BookingComponent
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
