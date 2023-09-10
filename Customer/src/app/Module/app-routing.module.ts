import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmailComponent } from '../Components/view-email/view-email.component';

const routes: Routes = [
  {
    path: 'view-email', component: ViewEmailComponent ,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
