import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarDetailComponent } from './components/car/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent },
  { path: "cars", component: CarComponent },
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/car-detail/:carId", component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"payment/:rental",component:PaymentComponent},
  {path:"brand/add",component:BrandAddComponent, canActivate:[LoginGuard]},
  {path:"color/add",component:ColorAddComponent},
  {path:"car/add",component:CarAddComponent},
  {path:"brand/list",component:BrandListComponent},
  {path:"color/list",component:ColorListComponent},
  {path:"brand/update/:brandId",component:BrandUpdateComponent},
  {path:"color/update/:colorId",component:ColorUpdateComponent},
  {path:"car/update/:carId",component:CarUpdateComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
