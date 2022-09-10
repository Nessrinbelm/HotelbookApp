import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodComponent } from './food/food.component';
import { RestaurantComponent } from './food/restaurant/restaurant.component';
import { ClubsComponent } from './food/clubs/clubs.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessSpaComponent } from './lifestyle/wellness-spa/wellness-spa.component';
import { ActivitiesComponent } from './lifestyle/activities/activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternsWeddingsComponent } from './weddings/westerns-weddings/westerns-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { UserComponent } from './Users/user/user.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AddServiceService } from './services/add-service.service';
import { SuccespageComponent } from './succespage/succespage.component';
import { ChooseComponent } from './choose/choose.component';
import { CelebrationbookingComponent } from './celebrationbooking/celebrationbooking.component';




@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodComponent,
    RestaurantComponent,
    ClubsComponent,
    LifestyleComponent,
    WellnessSpaComponent,
    ActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternsWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    UserComponent,
    BookingsComponent,
    MyBookingsComponent,
    AdminTemplateComponent,
    SuccespageComponent,
    ChooseComponent,
    CelebrationbookingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  
  
  ],
  providers: [AddServiceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
