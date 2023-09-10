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


const routes: Routes = [
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
