import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCarComponent } from './add-car/add-car.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/ ', pathMatch: 'full' },
  { path: 'add-car', component: AddCarComponent },
  { path: 'car-detail/:id', component: CarDetailComponent },
  { path: 'car-list', component: CarListComponent },
  { path: '', component: CarListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
