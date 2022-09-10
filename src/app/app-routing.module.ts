import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodComponent } from './food/food.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { SuccespageComponent } from './succespage/succespage.component';
import { ChooseComponent } from './choose/choose.component';

const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'celebrations', component:CelebrationsComponent},
  {path: 'food', component: FoodComponent},
  {path:'lifestyle', component:LifestyleComponent},
  {path:'weddings', component:WeddingsComponent},
  {path:'offers', component:OffersComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminTemplateComponent , canActivate : [AuthenticationGuard]},
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'MyBookings',component:MyBookingsComponent},
  {path:'Succes',component:SuccespageComponent},
  {path:'Choose',component:ChooseComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
