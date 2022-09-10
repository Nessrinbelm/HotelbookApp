import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MybookingsService } from '../services/mybookings.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  public bookings:any;
  public size:number=5;
  public currentPage:number=0;
  
  constructor(private MybookingService:MybookingsService) { }

  ngOnInit(): void {
  }
  onGetBookings(){
    this.MybookingService.getBookingsById(this.currentPage,this.size)
    .subscribe(data=>{
      this.bookings=data;
    
    },err=>{
      console.log(err);
    })
   
   

}
}
