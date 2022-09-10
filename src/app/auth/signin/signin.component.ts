import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/models/user.model';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userFormGroup!:FormGroup
  errorMessage : any;

  constructor(private fb:FormBuilder , private authService: AuthentificationService , private router: Router) { }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control("")
    });
  }
  handleLogin(){
    let username=this.userFormGroup.value.username;
    let password=this.userFormGroup.value.password;
    this.authService.login(username,password).subscribe({
       next:(appUser:AppUser)=>{
         this.authService.authenticateUser(appUser).subscribe({
          next:(data)=>{
            this.router.navigateByUrl("/Home")

          }

         });
       },
       error : (err)=>{

        this.errorMessage=err;

       }
    });

  }

}
