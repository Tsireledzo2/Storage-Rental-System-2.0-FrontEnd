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
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { InvoiceEmailComponent } from './Components/invoice-email/invoice-email.component';
import { LoginComponent } from './Admin-Driver-Components/login/login.component';
import { FooterComponent } from './Admin-Driver-Components/footer/footer.component';
import { DriverHomeComponent } from './Admin-Driver-Components/driver-home/driver-home.component';
import { CollectionsComponent } from './Admin-Driver-Components/collections/collections.component';
import { NavbarComponent } from './Admin-Driver-Components/navbar/navbar.component';
import { BookingsListComponentComponent } from './Admin-Driver-Components/bookings-list-component/bookings-list-component.component';
import { AdminHomeComponent } from './Admin-Driver-Components/admin-home/admin-home.component';
import { DriverListComponent } from './Admin-Driver-Components/driver-list/driver-list.component';
import { VehicleListComponentComponent } from './Admin-Driver-Components/vehicle-list-component/vehicle-list-component.component';
import { EmployeeHeaderComponent } from './Admin-Driver-Components/employee-header/employee-header.component';
import { CollectionsListComponent } from './Admin-Driver-Components/collections-list/collections-list.component';

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
    CustomerLoginComponent,
    ResetPasswordComponent,
    InvoiceEmailComponent,

    LoginComponent,
    FooterComponent,
    DriverHomeComponent,
    CollectionsComponent,
    NavbarComponent,
    BookingsListComponentComponent,
    AdminHomeComponent,
    DriverListComponent,
    VehicleListComponentComponent,
    EmployeeHeaderComponent,
    CollectionsListComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
