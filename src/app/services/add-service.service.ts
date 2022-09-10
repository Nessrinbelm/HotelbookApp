import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class AddServiceService {

  constructor(private http:HttpClient , private router : Router) { }
  Url='http://localhost:8085/';

  CreateBooking(booking : Booking){
       return this.http.post<Booking>(this.Url+"booking",booking);
       
  }

}
