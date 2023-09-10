import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewEmailComponent } from '../Components/view-email/view-email.component';
import { StorageUnitComponent } from '../Components/storage-unit/storage-unit.component';
import { AboutUsComponent } from '../Components/about-us/about-us.component';
import { ContactUsComponent } from '../Components/contact-us/contact-us.component';
import { BookingComponent } from '../Components/booking/booking.component';
import { CustomerHomepageComponent } from '../Components/customer-homepage/customer-homepage.component';

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
    path: 'view-email', component: ViewEmailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
