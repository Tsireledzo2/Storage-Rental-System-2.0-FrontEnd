import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './Module/app-routing.module';
import { AppComponent } from './Module/app.component';
import { CustomerHomepageComponent } from './Components/customer-homepage/customer-homepage.component';
import { HeaderComponent } from './Components/header/header.component';
import { StorageUnitComponent } from './Components/storage-unit/storage-unit.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CustomerDetailsComponent } from './Components/customer-details/customer-details.component';
import { ViewEmailComponent } from './Components/viewEmail/view-email.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerHomepageComponent,
    HeaderComponent,
    StorageUnitComponent,
    ContactUsComponent,
    AboutUsComponent,
    CustomerDetailsComponent,
    ViewEmailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Include HttpClientModule in the imports array
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
