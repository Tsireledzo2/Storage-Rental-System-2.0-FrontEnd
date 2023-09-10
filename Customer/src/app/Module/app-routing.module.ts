import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmailComponent } from '../Components/viewEmail/view-email.component';

const routes: Routes = [
  {
    path: 'viewEmail', component: ViewEmailComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
