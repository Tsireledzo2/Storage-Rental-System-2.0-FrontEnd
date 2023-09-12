import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './Module/app-routing.module';
import { AppComponent } from './Module/app.component';
import { CustomerHomepageComponent } from './Components/customer-homepage/customer-homepage.component';
import { HeaderComponent } from './Components/header/header.component';
import { StorageUnitComponent } from './Components/storage-unit/storage-unit.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CustomerDetailsComponent } from './Components/customer-details/customer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './Components/booking/booking.component';
import { AvailableStorageComponent } from './Components/available-storage/available-storage.component';
import { InvoiceEmailComponent } from './Components/invoice-email/invoice-email.component';
import { CustomerLoginComponent } from './Components/customer-login/customer-login.component';
import { CustomerResgistrationComponent } from './Components/customer-resgistration/customer-resgistration.component'; // Import your component here




@NgModule({
  declarations: [
    AppComponent,
    CustomerHomepageComponent,
    HeaderComponent,
    StorageUnitComponent,
    ContactUsComponent,
    AboutUsComponent,
    CustomerDetailsComponent,
    BookingComponent,
    AvailableStorageComponent,
    InvoiceEmailComponent,
    CustomerLoginComponent,
    CustomerResgistrationComponent,
    
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Include HttpClientModule in the imports array
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
 


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
