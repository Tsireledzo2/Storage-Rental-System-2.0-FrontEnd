import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageUnitComponent } from '../Components/storage-unit/storage-unit.component';
import { AboutUsComponent } from '../Components/about-us/about-us.component';
import { ContactUsComponent } from '../Components/contact-us/contact-us.component';
import { BookingComponent } from '../Components/booking/booking.component';
import { CustomerHomepageComponent } from '../Components/customer-homepage/customer-homepage.component';
import { AvailableStorageComponent } from '../Components/available-storage/available-storage.component';
import { CustomerDetailsComponent } from '../Components/customer-details/customer-details.component';
import { InvoiceEmailComponent } from '../Components/invoice-email/invoice-email.component';
import { CollectionsComponent } from '../Admin-Driver-Components/collections/collections.component';
import { DriverHomeComponent } from '../Admin-Driver-Components/driver-home/driver-home.component';
import { LoginComponent } from '../Admin-Driver-Components/login/login.component';
import { AdminHomeComponent } from '../Admin-Driver-Components/admin-home/admin-home.component';
import { DriverListComponent } from '../Admin-Driver-Components/driver-list/driver-list.component';
import { BookingsListComponentComponent } from '../Admin-Driver-Components/bookings-list-component/bookings-list-component.component';
import { VehicleListComponentComponent } from '../Admin-Driver-Components/vehicle-list-component/vehicle-list-component.component';


const routes: Routes = [
  //-------------Customer Paths----------------------
  {
    path: 'StorageUnit', component: StorageUnitComponent
  },
  {
    path: 'AboutUs', component: AboutUsComponent
  },
  {
    path: 'ContactUs', component: ContactUsComponent
  },
  {
    path: 'Booking', component: BookingComponent
  },
  {
    path: 'CustomerHome', component: CustomerHomepageComponent
  },
  {
    path:'',redirectTo:'/CustomerHome', pathMatch:'full'
  },
  {
    path: 'availableRooms', component: AvailableStorageComponent 
  },
  {
    path: 'customerDetails', component: CustomerDetailsComponent
  },
  {
    path: 'view-email', component: InvoiceEmailComponent
  },
  //-------------Admin Driver Paths----------------------
  {
    path: 'collection', component: CollectionsComponent
  },
  {
    path: 'driverHome', component: DriverHomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'adminHome', component: AdminHomeComponent
  },
  {
    path: 'driver-list', component: DriverListComponent
  },
  {
    path: 'vehicle-list', component: VehicleListComponentComponent
  },
  {
    path: 'bookings-list', component: BookingsListComponentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
