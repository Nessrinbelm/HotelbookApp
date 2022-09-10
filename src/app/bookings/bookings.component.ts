import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from '../models/booking.model';
import { AddServiceService } from '../services/add-service.service';
import { MybookingsService } from '../services/mybookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  booking : Booking= new Booking();
 
  constructor(private http :HttpClient, private addservice : AddServiceService, private router : Router) { }
  
  ngOnInit(): void { 
   
  }
  /*OnSubmit(){
   this.addservice.CreateBooking(this.booking).subscribe((response)=>{
      console.log(response);
      this.booking=new Booking();
      this.router.navigateByUrl('Succes');
    });}}*/

    OnSubmit(){
      this.router.navigateByUrl('Succes')
    }}
