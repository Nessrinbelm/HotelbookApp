import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient , private router : Router) { }
  Url='http://localhost:8085/';

  CreateUser(user: User){
       return this.http.post<User>(this.Url+"utilisateurses",user);
       
}
}
