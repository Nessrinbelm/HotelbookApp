import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MybookingsService {
  public host:string="http://localhost:8085"

  constructor(private httpClient:HttpClient) { }
  public getBookingsById(page:number,size:number){
    return this.httpClient.get(this.host+"/bookings");
  }
}
