import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './Components/collections/collections.component';
import { DriverHomeComponent } from './Components/driver-home/driver-home.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
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
    path: '', redirectTo:'/login', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
