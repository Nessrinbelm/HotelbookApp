import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';

const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'celebrations', component:CelebrationsComponent},
  {path: 'food', component: FoodComponent},
  {path:'lifestyle', component:LifestyleComponent},
  {path:'weddings', component:WeddingsComponent},
  {path:'offers', component:OffersComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
