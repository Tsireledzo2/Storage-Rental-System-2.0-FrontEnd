import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverHomeComponent } from './Components/driver-home/driver-home.component';
import { VehicleListComponentComponent } from './Components/vehicle-list-component/vehicle-list-component.component';
import { BookingsListComponentComponent } from './Components/bookings-list-component/bookings-list-component.component';
import { DriverListComponent } from './driver-list/driver-list.component';


const routes: Routes = [
  {path: 'driver-list', component: DriverListComponent},
  { path: 'vehicle-list', component: VehicleListComponentComponent },
  { path: 'bookings-list', component: BookingsListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
